import CustomText from "./Сommon/CustomText.jsx";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import CustomImgContainer from "./Сommon/CustomImgContainer.jsx";

import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useDispatch } from "react-redux";
import { setImageFrontal } from "../redux/image.js";
import { useCameraPermissions } from "expo-camera";

export default function ScreenSecond() {
  const colorsGradient = ["#c78fff", "#3d73eb"];
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [permission, requestPermission] = useCameraPermissions();

  const convertImageToBase64 = async (uri) => {
    const base64 = await FileSystem.readAsStringAsync(uri, {
      encoding: FileSystem.EncodingType.Base64,
    });
    return base64;
  };
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.6,
    });
    if (!result.canceled) {
      const base64 = await convertImageToBase64(result.assets[0].uri);
      dispatch(setImageFrontal([result.assets[0].uri, base64]));
      navigation.navigate("screen-4");
      // let localUri = result.assets[0].uri;
      // let filename = localUri.split("/").pop();
      // let match = /\.(\w+)$/.exec(filename);
      // let type = match ? `image/${match[1]}` : `image`;

      // const formData = new FormData();
      // formData.append("image_files", { uri: localUri, type, name: filename });

      // try {
      //   const response = await photoApi.postImageApi(
      //     session,
      //     formData,
      //     filename
      //   );

      //   console.log("Ответ сервера:", response); // Логируем ответ

      //   if (response.ok) {
      //     const data = await response.json();
      //     dispatch(setStatistics(data.items));
      //   } else {
      //     // Обработка ошибки 422
      //     console.error("Ошибка 422:", response.status, response.json());
      //   }
      // } catch (error) {
      //   console.error("Error uploading image:", error);
      // }
    }
  };

  const takePermission = () => {
    requestPermission(true);
    if (!permission.granted) return;
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
