import { LinearGradient } from "expo-linear-gradient";
import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import { captureRef } from "react-native-view-shot";
import { CameraView, useCameraPermissions } from "expo-camera";
import { Platform } from "react-native";

import * as MediaLibrary from "expo-media-library";
import * as Sharing from "expo-sharing";

export default function BtnsForSave({ isLoading, screenContentRef }) {
  const colorsGradient = ["#c78fff", "#3d73eb"];
  const [status, requestPermission] = MediaLibrary.usePermissions();
  const [permission, requestPermissionForStorage] = useCameraPermissions();

  const onSaveImageAsync = async () => {
    if (!Platform.OS === "web") {
      requestPermissionForStorage();
    }
    if (status === null) {
      requestPermission();
    }
    try {
      const localUri = await captureRef(screenContentRef.current, {
        result: "base64",
        format: "png",
        quality: 1,
        width: 240,
        height: 300,
      });
      shareFile(localUri);
    } catch (e) {
      alert(e);
    }
  };
  const shareFile = async (localUri) => {
    if (permission && (await Sharing.isAvailableAsync())) {
      try {
        const shareOptions = {
          message: "Посмотрите этот файл!",
        };
        await Sharing.shareAsync(localUri, shareOptions);
      } catch (e) {
        alert(e);
      }
    } else {
      requestPermissionForStorage();
      alert("Обмен не доступен!");
    }
  };

  return (
    <View style={styles.btns}>
      {/* <LinearGradient colors={colorsGradient} style=ё{styles.btnGradient}>
  <Pressable onPress={btnClickHandle}>
    <Text style={styles.btnText}>Сохранить</Text>
  </Pressable>
</LinearGradient> */}
      {isLoading && (
        <LinearGradient colors={colorsGradient} style={styles.btnBorderedStyle}>
          <Pressable onPress={onSaveImageAsync}>
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
