import CustomText from "./Сommon/CustomText.jsx";
import * as ImagePicker from "expo-image-picker";
import CustomImgContainer from "./Сommon/CustomImgContainer.jsx";
import checkCorrectBase from "../commonFn/checkCorrectBase.js";

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

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.1,
      base64: true,
    });

    if (!result.canceled) {
      let base64 = checkCorrectBase(result.assets[0].base64);
      dispatch(setImageFrontal([result.assets[0].uri, base64]));
      navigation.navigate("screen-4");
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
      {/* <LinearGradient colors={colorsGradient} style={styles.btnGradient}>
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
      </LinearGradient> */}
      <LinearGradient colors={colorsGradient} style={styles.btnGradient}>
        <Pressable onPress={pickImage}>
          <Text style={styles.btnText}>Загрузить из галлереи</Text>
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
