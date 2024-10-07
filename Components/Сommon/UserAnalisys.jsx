import { LinearGradient } from "expo-linear-gradient";
import { View, StyleSheet, Image } from "react-native";
export default function UserAnalisysImage({ imageSource, colorsGradient }) {
  return (
    <View style={styles.imageContainer}>
      <LinearGradient colors={colorsGradient} style={styles.imageBorder}>
        <Image source={imageSource} style={styles.image} />
      </LinearGradient>
    </View>
  );
}
const styles = StyleSheet.create({
  imageContainer: {
    position: "absolute",
    top: -40,
    left: 115,
    borderRadius: 120,
    width: 120,
    height: 120,
    overflow: "hidden",
    padding: 8,
  },
  imageBorder: {
    borderRadius: 120,
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 120,
  },
});
