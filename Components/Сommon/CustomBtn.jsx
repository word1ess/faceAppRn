import { Text, View, StyleSheet, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

export default function CustomBtn({
  btnType = "fill",
  text,
  colorsGradient = ["#c78fff", "#3d73eb"],
  href,
}) {
  const navigation = useNavigation();
  const btnClickHandle = () => {
    navigation.navigate(href);
  };

  if (btnType === "bordered") {
    return (
      <LinearGradient colors={colorsGradient} style={styles.btnBorderedStyle}>
        <Pressable onPress={btnClickHandle}>
          <View style={styles.btnBorderStyle}>
            <Text style={styles.textBtnBorderedStyle}>{text}</Text>
          </View>
        </Pressable>
      </LinearGradient>
    );
  }
  return (
    <LinearGradient colors={colorsGradient} style={styles.btnGradient}>
      <Pressable onPress={btnClickHandle}>
        <Text style={styles.btnText}>{text}</Text>
      </Pressable>
    </LinearGradient>
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
