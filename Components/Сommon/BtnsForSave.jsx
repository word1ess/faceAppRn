import { LinearGradient } from "expo-linear-gradient";
import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { captureRef } from "react-native-view-shot";
import { Linking } from "react-native";

import * as MediaLibrary from "expo-media-library";
import * as Sharing from "expo-sharing";

export default function BtnsForSave({
  isLoading,
  screenContentRef,
  refferallLink,
  text,
}) {
  // ! Логика для передачи скриншота. Не работает(
  // const [status, requestPermission] = MediaLibrary.usePermissions();
  // const requestStoragePermission = async () => {
  //   const { status } = await MediaLibrary.requestPermissionsAsync();
  //   return status === "granted";
  // };
  // const onSaveImageAsync = async () => {
  //   const peremission = await requestStoragePermission();
  //   if (status === null) {
  //     requestPermission();
  //   }
  //   try {
  //     const localUri = await captureRef(screenContentRef.current, {
  //       result: "base64",
  //       format: "png",
  //       quality: 1,
  //       width: 200,
  //       height: 300,
  //     });
  //     shareFile(localUri, peremission);
  //   } catch (e) {
  //     alert(e);
  //   }
  // };
  // const shareFile = async (localUri, peremission) => {
  //   if (peremission && (await Sharing.isAvailableAsync())) {
  //     try {
  //       const shareOptions = {
  //         message: "Посмотрите этот файл!",
  //       };
  //       await Sharing.shareAsync(localUri, shareOptions);
  //     } catch (e) {
  //       alert(e);
  //     }
  //   } else {
  //     requestStoragePermission();
  //     alert("Обмен не доступен!");
  //   }
  // };

  const colorsGradient = ["#c78fff", "#3d73eb"];
  const handleSaveBtn = () => {
    Linking.openURL(
      `https://t.me/share/url?url=${refferallLink}&text=${encodeURIComponent(
        text
      )}`
    );
  };
  return (
    <View style={styles.btns}>
      {!isLoading && (
        <LinearGradient colors={colorsGradient} style={styles.btnBorderedStyle}>
          <Pressable onPress={handleSaveBtn}>
            <View style={styles.btnBorderStyle}>
              <Text style={styles.textBtnBorderedStyle}>Поделиться</Text>
            </View>
          </Pressable>
        </LinearGradient>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  btns: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    marginTop: 40,
    height: 45,
  },
  btnGradient: {
    width: "46%",
    borderRadius: 60,
    gap: 8,
    padding: 12,
  },
  btnText: {
    fontSize: 12,
    textAlign: "center",
    color: "#fff",
  },
  btnBorderedStyle: {
    width: "100%",
    borderRadius: 60,
    padding: 2,
  },
  btnBorderStyle: {
    gap: 8,
    padding: 12,
    borderRadius: 60,
    color: "#9f8fff",
    backgroundColor: "#16202c",
  },
  textBtnBorderedStyle: {
    fontSize: 12,
    textAlign: "center",
    color: "#9f8fff",
  },
});
