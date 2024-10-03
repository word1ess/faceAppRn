import { useRef } from "react";
import { View, Image, Dimensions, StyleSheet, Text } from "react-native";

export default function CustomImgContainer({
  source,
  bordered = false,
  radius = false,
  width = "100%",
  height = "auto",
  flex = true,
}) {
  const styles = StyleSheet.create({
    imageContainer: {
      flex: flex ? 1 : 0,
      width,
      height,
      margin: "20px 0px 28px",
      marginTop: 20,
      marginBottom: 20,
      position: "relative",
      borderStyle: "solid",
      borderWidth: bordered ? 1 : 0,
      borderColor: bordered ? "#9f8fff" : "none",
      borderTopLeftRadius: radius ? 32 : 0,
      borderTopRightRadius: radius ? 32 : 0,
      borderBottomLeftRadius: radius ? 32 : 0,
      borderBottomRightRadius: radius ? 32 : 0,
      overflow: "hidden",
      padding: 10,
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderTopLeftRadius: radius ? 32 : 0,
      borderTopRightRadius: radius ? 32 : 0,
      borderBottomLeftRadius: radius ? 32 : 0,
      borderBottomRightRadius: radius ? 32 : 0,
    },
  });
  return (
    <View style={styles.imageContainer}>
      <Image source={source} style={styles.image} />
    </View>
  );
}
