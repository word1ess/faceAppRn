import { View, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomText from "./CustomText";

export default function CustomTextComponent({ route }) {
  const { text } = route.params;
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#16202c",
        overflow: "hidden",
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
      <div style={styles.text}>
        <div style={styles.textRow}>
          {text.map((textCopmonent) => {
            return (
              <CustomText
                text={textCopmonent.text}
                fontSize={textCopmonent.fontSize}
                textAlign={textCopmonent.textAlign}
                color={textCopmonent.color}
                fontUpperCase={textCopmonent.fontUpperCase}
                marginBottom={textCopmonent.marginBottom}
                marginTop={textCopmonent.marginTop}
                paddingLeft={textCopmonent.paddingLeft}
              />
            );
          })}
        </div>
      </div>
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
    position: "relative",
    overflowY: "auto",
    height: "100vh",
  },
  textRow: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
    paddingBottom: 80,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 80,
  },
});
