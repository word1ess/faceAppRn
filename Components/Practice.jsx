import { View, Image, Text, StyleSheet, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
import CustomText from "./Сommon/CustomText.jsx";
import { setPracticeToggle } from "../redux/plan.js";

export default function Practice() {
  const imageFrontalToUser = useSelector((state) => state.image.frontal.toUser);
  const practiceItems = useSelector((state) => state.plan.practice);
  const imageSource = imageFrontalToUser ? { uri: imageFrontalToUser } : "";
  const colorsGradient = ["#c78fff", "#3d73eb"];

  const dispatch = useDispatch();

  const handleToggleActivePractice = (i) => {
    dispatch(setPracticeToggle(i));
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
      <LinearGradient colors={colorsGradient} style={styles.headerGradient}>
        <View style={styles.headerInfo}>
          <CustomText
            text="Ваш прогресс"
            width="fit-content"
            fontSize={14}
            marginBottom={12}
          />
          <Pressable style={styles.btnWhite}>
            <CustomText text="Посмотреть" width="fit-content" fontSize={16} />
          </Pressable>
        </View>
        <View style={styles.imageContainer}>
          <Image source={imageSource} style={styles.image} />
        </View>
      </LinearGradient>
      <CustomText
        text="Ежедневная практика"
        width="fit-content"
        marginBottom={20}
      />
      <View style={styles.planRow}>
        {practiceItems.map((practiceItem, i) => {
          return (
            <Pressable
              style={styles.planItem}
              onPress={() => {
                handleToggleActivePractice(i);
              }}
            >
              <CustomText
                width="fit-content"
                text={practiceItem.text}
                fontSize={14}
              />
              <View style={styles.planDone}>
                <View
                  style={
                    practiceItem.isDone
                      ? styles.planDoneActive
                      : styles.planDoneUnactive
                  }
                ></View>
              </View>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  headerGradient: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    borderRadius: 20,
    paddingHorizontal: 32,
    paddingVertical: 24,
    marginBottom: 40,
  },
  image: {
    width: "90%",
    height: "90%",
    borderRadius: 80,
    overflow: "hidden",
  },
  imageContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    width: 80,
    height: 80,
    borderRadius: 80,
  },
  btnWhite: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 60,
  },

  planRow: {
    display: "flex",
    flexDirection: "coulmn",
    gap: 20,
    width: "100%",
  },
  planItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    gap: 10,
    backgroundColor: "#2a3d55",
    padding: 16,
    paddingRight: 24,
    borderRadius: 20,
    width: "100%",
  },
  planDone: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 32,
    height: 32,
    backgroundColor: "#90bdf3",
    borderRadius: 32,
  },
  planDoneUnactive: {
    height: 28,
    width: 28,
    backgroundColor: "#16202c",
    borderRadius: 28,
  },
  planDoneActive: {
    height: 28,
    width: 28,
    backgroundColor: "#007bff",
    borderRadius: 28,
  },
});
