import {
  View,
  StyleSheet,
  Pressable,
  FlatList,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomText from "./CustomText";
import { useState } from "react";

export default function CustomTextComponent({ route }) {
  const { text } = route.params;
  const navigation = useNavigation();
  const [dataText] = useState(text);

  const textItem = ({ item }) => {
    return item;
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
      <Pressable onPress={navigation.goBack} style={styles.backBtn}>
        <CustomText
          text="<"
          color="#9f8fff"
          fontSize={30}
          width="fit-content"
        />
        <CustomText text="Назад" width="fit-content" />
      </Pressable>
      <ScrollView contentContainerStyle={styles.text}>{text}</ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  backBtn: {
    display: "flex",
    flexDirection: "row",
    width: "120%",
    backgroundColor: "#2a3d55",
    alignItems: "center",
    gap: 20,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    padding: 10,
    zIndex: 100,
  },
  text: {
    display: "flex",
    maxWidth: "100%",
    gap: 16,
    top: 60,
    paddingBottom: 80,
  },
});
