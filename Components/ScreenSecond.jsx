import CustomText from "./Сommon/CustomText.jsx";
import * as ImagePicker from "expo-image-picker";
import CustomImgContainer from "./Сommon/CustomImgContainer.jsx";

import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setImageFrontal } from "../redux/image.js";
import { photoApi } from "../api/api.js";
import { setStatistics } from "../redux/statistics.js";
import { useCameraPermissions } from "expo-camera";

export default function ScreenSecond() {
  const colorsGradient = ["#c78fff", "#3d73eb"];
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const session = useSelector((state) => state.statistics.userSession);

  const [permission, requestPermission] = useCameraPermissions();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.7,
    });
    if (!result.canceled) {
      let localUri = result.assets[0].uri;
      let filename = localUri.split("/").pop();
      let match = /\.(\w+)$/.exec(filename);
      let type = match ? `image/${match[1]}` : `image`;
      let formData = new FormData();
      formData.append("image_files", { uri: localUri, type, name: filename });

      dispatch(setImageFrontal(localUri));
      navigation.navigate("screen-4");

      try {
        const response = await photoApi.postImageApi(
          session,
          formData,
          filename
        );
        if (response.ok) {
          const data = await response.json();
          dispatch(setStatistics(data.items));
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  const takePermission = () => {
    requestPermission(true);
    if (!permission.granted) {
      return;
    }
    navigation.navigate("screen-3");
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#16202c",
        padding: 20,
      }}
    >
      <CustomText text={"Сделайте фронтальное селфи"} />
      <CustomImgContainer source={require("../assets/img/face.png")} radius />
      <LinearGradient colors={colorsGradient} style={styles.btnGradient}>
        <Pressable onPress={takePermission}>
          <Text style={styles.btnText}>Сделать селфи</Text>
        </Pressable>
      </LinearGradient>
      <LinearGradient colors={colorsGradient} style={styles.btnBorderedStyle}>
        <Pressable onPress={pickImage}>
          <View style={styles.btnBorderStyle}>
            <Text style={styles.textBtnBorderedStyle}>
              Загрузить из галлереи
            </Text>
          </View>
        </Pressable>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  btnGradient: {
    width: "100%",
    borderRadius: 60,
    gap: 8,
    padding: 20,
    marginTop: 18,
  },
  btnText: {
    fontSize: 20,
    textAlign: "center",
    color: "#fff",
  },
  btnBorderedStyle: {
    width: "100%",
    borderRadius: 60,
    padding: 2,
    marginTop: 18,
  },
  btnBorderStyle: {
    gap: 8,
    padding: 20,
    borderRadius: 60,
    color: "#9f8fff",
    backgroundColor: "#16202c",
  },

  textBtnBorderedStyle: {
    fontSize: 20,
    textAlign: "center",
    color: "#9f8fff",
  },
});