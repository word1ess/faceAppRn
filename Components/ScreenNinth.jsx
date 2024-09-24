import CustomText from "./Сommon/CustomText.jsx";

import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { View, Image, Text, StyleSheet, Pressable } from "react-native";
import { useSelector } from "react-redux";
import Svg, { Path } from "react-native-svg";

export default function ScreenNinth() {
  const imageFrontal = useSelector((state) => state.image.frontal);
  const imageSource = imageFrontal ? { uri: imageFrontal } : "";
  const rating = useSelector((state) => state.statistics.overallRating);
  const navigation = useNavigation();
  const btnClickHandle = () => {
    navigation.navigate("screen-2");
  };

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
    tabBar: {
      position: "relative",
      width: "100%",
      height: 12,
      marginBottom: 16,
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
      borderBottomLeftRadius: 8,
      borderBottomRightRadius: 8,
    },
    tabText: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 10,
      width: 50,
      height: 45,
      position: "absolute",
      bottom: -4,
      left: `${rating - 20}%`,
    },
    tabThumb: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 20,
      height: 20,
      zIndex: 100,
      backgroundColor: "#fff",
      borderRadius: 20,
      padding: 5,
    },
    tabThumbGradient: {
      width: 12,
      height: 12,
      borderRadius: 20,
    },
    contentStatisticsTop: {
      textAlign: "center",
    },
  });

  const colorsGradient = ["#c78fff", "#3d73eb"];
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
          <CustomText
            color="#90bdf3"
            fontSize={14}
            fontWeightStyle={300}
            text="Общий рейтинг"
          />
          <CustomText text={rating} fontSize={96} />
          <LinearGradient style={styles.tabBar} colors={colorsGradient}>
            <View style={styles.tabText}>
              <CustomText text="Вы здесь" fontSize={10} />
              <View style={styles.tabThumb}>
                <LinearGradient
                  style={styles.tabThumbGradient}
                  colors={colorsGradient}
                ></LinearGradient>
              </View>
            </View>
          </LinearGradient>
          <Text style={styles.contentStatisticsTop}>
            <CustomText text={"Ваш общий рейтинг лучше чем у "} />
            <CustomText text={"62% "} color="#9f8fff" />
            <CustomText text={"людей"} />
          </Text>
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
