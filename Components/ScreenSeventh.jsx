import CircularProgress from "react-native-circular-progress-indicator";
import CustomText from "./Сommon/CustomText.jsx";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { View, Image, Text, StyleSheet, Pressable } from "react-native";
import { useSelector } from "react-redux";

export default function ScreenSeventh() {
  const imageFrontal = useSelector((state) => state.image.frontal.toUser);
  const imageSource = imageFrontal ? { uri: imageFrontal } : "";
  const statisticsAll = useSelector((state) => state.statistics.items);
  const colors = [
    "#E8846E",
    "#3D73EB",
    "#AA37C7",
    "#12A1AA",
    "#54B15D",
    "#D6A731",
  ];
  const colorsGradient = ["#c78fff", "#3d73eb"];
  const navigation = useNavigation();
  const btnClickHandle = () => {
    navigation.navigate("screen-7");
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
      <View style={styles.contentStatistics}>
        <View style={styles.imageContainer}>
          <LinearGradient colors={colorsGradient} style={styles.imageBorder}>
            <Image source={imageSource} style={styles.image} />
          </LinearGradient>
        </View>
        <View style={styles.contentStatisticsRow}>
          {statisticsAll.map((statistic, i) => {
            return (
              <View key={i} style={styles.contentStatisticsItem}>
                <CustomText text={statistic.name} fontSize={14} />
                <CircularProgress
                  radius={44}
                  value={statistic.score}
                  progressValueColor={"#fff"}
                  activeStrokeColor={colors[i]}
                  duration={1000}
                />
              </View>
            );
          })}
        </View>
        <View style={styles.btns}>
          <LinearGradient colors={colorsGradient} style={styles.btnGradient}>
            <Pressable onPress={btnClickHandle}>
              <Text style={styles.btnText}>Сохранить</Text>
            </Pressable>
          </LinearGradient>
          <LinearGradient
            colors={colorsGradient}
            style={styles.btnBorderedStyle}
          >
            <Pressable>
              <View style={styles.btnBorderStyle}>
                <Text style={styles.textBtnBorderedStyle}>Поделиться</Text>
              </View>
            </Pressable>
          </LinearGradient>
        </View>
      </View>
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
  contentStatistics: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    paddingTop: 100,
    marginTop: 60,
    marginBottom: 30,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: "#0f1720",
    width: "100%",
  },
  contentStatisticsRow: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    width: "100%",
    rowGap: 20,
  },
  contentStatisticsItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    gap: 20,
  },
  btns: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    marginTop: 40,
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
    width: "46%",
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
