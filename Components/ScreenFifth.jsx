import CustomText from "./Сommon/CustomText.jsx";
import CustomBtn from "./Сommon/CustomBtn.jsx";
import CustomImgContainer from "./Сommon/CustomImgContainer.jsx";
import * as FileSystem from "expo-file-system";

import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View, Pressable, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useDispatch } from "react-redux";
import { setImageProfile } from "../redux/image.js";

export default function ScreenFifth() {
  const colorsGradient = ["#c78fff", "#3d73eb"];
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const convertImageToBase64 = async (uri) => {
    const base64 = await FileSystem.readAsStringAsync(uri, {
      encoding: FileSystem.EncodingType.Base64,
    });
    return base64;
  };
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.6,
    });
    if (!result.canceled) {
      const base64 = await convertImageToBase64(result.assets[0].uri);
      dispatch(setImageProfile([result.assets[0].uri, base64]));
      navigation.navigate("tabs");
    }
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
      <CustomText text={"Сделайте селфи в профиль"} />
      <CustomImgContainer source={require("../assets/img/face.png")} radius />
      <CustomBtn text="Сделать селфи" href="screen-6" />
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
