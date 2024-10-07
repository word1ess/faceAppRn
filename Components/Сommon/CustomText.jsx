import { Text } from "react-native";
import { StyleSheet } from "react-native";
export default function CustomText({
  text,
  fontWeightStyle = 500,
  fontSize = 20,
  fontUpperCase = false,
  color = "#fff",
  textAlign = "center",
  marginBottom = 0,
  marginLeft = 0,
  marginTop = 0,
  paddingLeft = 0,
  width = "100%",
  display = "flex",
}) {
  // switch (fontWeightStyle) {
  //   case 300:
  //     fontFamily = "Ubuntu-Light";
  //     break;
  //   case 500:
  //     fontFamily = "Ubuntu-Medium";
  //     break;
  //   default:
  //     fontFamily = "Ubuntu-Regular";
  //     break;
  // }
  const styles = StyleSheet.create({
    textStyle: {
      // fontFamily,
      fontSize,
      textAlign,
      color,
      marginBottom,
      marginLeft,
      marginTop,
      width,
      paddingLeft,
      textTransform: fontUpperCase ? "uppercase" : "none",
    },
  });
  return <Text style={styles.textStyle}>{text}</Text>;
}
