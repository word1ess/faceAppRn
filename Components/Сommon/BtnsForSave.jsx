import { LinearGradient } from "expo-linear-gradient";
import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";

import * as Sharing from "expo-sharing";
import * as MediaLibrary from "expo-media-library";
import * as FileSystem from "expo-file-system";
import * as Permissions from "expo-permissions";
export default function BtnsForSave({ isLoading }) {
  const colorsGradient = ["#c78fff", "#3d73eb"];
  const [screenshotUri, setScreenshotUri] = useState(null);
  const handleShareScreenshot = async () => {
    // try {
    //   const uri = await MediaLibrary.createAssetAsync(
    //     //  Используйте  `expo-screenshot`  для  создания  скриншота
    //     await FileSystem.readAsStringAsync(
    //       await MediaLibrary.getAssetInfoAsync(await Expo.takeSnapshotAsync())
    //         .uri
    //     )
    //   );
    //   setScreenshotUri(uri.uri);
    // } catch (error) {
    //   console.log(error);
    // }
    // try {
    //   //  Проверьте,  поддерживает  ли  устройство  обмен  файлами
    //   if (await Sharing.isAvailableAsync()) {
    //     await Sharing.shareAsync(screenshotUri, {
    //       dialogTitle: "Поделиться скриншотом",
    //       //  Для  Telegram  используйте  уточнение  `social: 'telegram'`
    //       //  https://docs.expo.dev/versions/latest/sdk/sharing.html
    //       social: "telegram",
    //     });
    //   } else {
    //     console.log(error);
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };
  return (
    <View style={styles.btns}>
      {/* <LinearGradient colors={colorsGradient} style={styles.btnGradient}>
  <Pressable onPress={btnClickHandle}>
    <Text style={styles.btnText}>Сохранить</Text>
  </Pressable>
</LinearGradient> */}
      {isLoading && (
        <LinearGradient colors={colorsGradient} style={styles.btnBorderedStyle}>
          <Pressable onPress={handleShareScreenshot}>
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
