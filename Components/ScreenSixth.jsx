import CustomText from "./Сommon/CustomText.jsx";
import * as FileSystem from "expo-file-system";

import {
  Pressable,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import Svg, { Path } from "react-native-svg";
import { useDispatch } from "react-redux";
import { setImageProfile } from "../redux/image.js";

export default function ScreenSixth() {
  const [facing, setFacing] = useState("front");
  const [permission, requestPermission] = useCameraPermissions();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const colorsGradient = ["#c78fff", "#3d73eb"];
  let cameraRef;
  const convertImageToBase64 = async (uri) => {
    const base64 = await FileSystem.readAsStringAsync(uri, {
      encoding: FileSystem.EncodingType.Base64,
    });
    return base64;
  };
  const takePhotoHandle = async () => {
    if (!cameraRef) return;

    let photo = await cameraRef.takePictureAsync({ quality: 0.8 });
    const resizedPhoto = await ImageManipulator.manipulateAsync(photo.uri, [
      { resize: { width: 600, height: 800 } },
    ]);
    const base64 = await convertImageToBase64(resizedPhoto.uri);

    dispatch(setImageProfile([resizedPhoto.uri, base64]));
    navigation.navigate("tabs");
  };

  if (!permission) {
    return <View />;
  }
  if (!permission.granted) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#16202c",
          alignItems: "center",
          padding: 20,
        }}
      >
        <CustomText text="Разрешите доступ к камере!" />
        <LinearGradient colors={colorsGradient} style={styles.btnGradient}>
          <Pressable onPress={requestPermission}>
            <Text style={styles.btnText}>Разрешить доступ</Text>
          </Pressable>
        </LinearGradient>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#16202c",
        padding: 20,
      }}
    >
      <CameraView
        style={styles.camera}
        facing={facing}
        ref={(r) => {
          cameraRef = r;
        }}
      />
      <View style={styles.takePhotoStyle}>
        <Pressable
          onPress={() => {
            navigation.navigate("screen-2");
          }}
          style={styles.btnBackStyle}
        >
          <Svg xmlns="http://www.w3.org/2000/svg" width={10} height={10}>
            <Path
              d="M9.16691 4.16666H2.84191L5.59191 1.42499C5.74883 1.26807 5.83698 1.05524 5.83698 0.833325C5.83698 0.611407 5.74883 0.398578 5.59191 0.241658C5.43499 0.0847387 5.22216 -0.00341797 5.00024 -0.00341797C4.77832 -0.00341797 4.56549 0.0847387 4.40857 0.241658L0.241906 4.40833C0.166039 4.48758 0.106568 4.58103 0.0669058 4.68333C-0.0164426 4.88621 -0.0164426 5.11377 0.0669058 5.31666C0.106568 5.41895 0.166039 5.51241 0.241906 5.59166L4.40857 9.75832C4.48604 9.83643 4.57821 9.89843 4.67976 9.94074C4.78131 9.98304 4.89023 10.0048 5.00024 10.0048C5.11025 10.0048 5.21917 9.98304 5.32072 9.94074C5.42227 9.89843 5.51444 9.83643 5.59191 9.75832C5.67001 9.68086 5.73201 9.58869 5.77432 9.48714C5.81662 9.38559 5.8384 9.27667 5.8384 9.16666C5.8384 9.05665 5.81662 8.94773 5.77432 8.84618C5.73201 8.74463 5.67001 8.65246 5.59191 8.57499L2.84191 5.83333H9.16691C9.38792 5.83333 9.59988 5.74553 9.75616 5.58925C9.91244 5.43297 10.0002 5.22101 10.0002 4.99999C10.0002 4.77898 9.91244 4.56702 9.75616 4.41074C9.59988 4.25446 9.38792 4.16666 9.16691 4.16666Z"
              fill="#9F8FFF"
            />
          </Svg>
          <CustomText text="Назад" fontSize={14} />
        </Pressable>
        <TouchableOpacity onPress={takePhotoHandle} style={styles.btnTakePhoto}>
          <LinearGradient
            colors={colorsGradient}
            style={styles.btnTakePhotoInner}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  takePhotoStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    marginTop: 28,
  },
  btnBackStyle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    position: "absolute",
    top: 20,
    left: 0,
  },
  btnTakePhoto: {
    width: 77,
    height: 77,
    borderWidth: 8,
    borderColor: "#fff",
    borderRadius: 60,
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  btnTakePhotoInner: {
    width: 60,
    height: 60,
  },
});
