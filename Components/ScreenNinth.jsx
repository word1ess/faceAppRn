import CustomText from "./Сommon/CustomText.jsx";
import BtnsForSave from "./Сommon/BtnsForSave.jsx";

import { LinearGradient } from "expo-linear-gradient";
import { View, Image, Text, StyleSheet, ActivityIndicator } from "react-native";
import { useSelector } from "react-redux";

export default function ScreenNinth() {
  const imageFrontal = useSelector((state) => state.image.frontal.toUser);
  const imageSource = imageFrontal ? { uri: imageFrontal } : "";
  const rating = useSelector((state) => state.statistics.overallRating);
  const isLoading = useSelector((state) => state.statistics.isLoading);

  const colorsGradient = ["#c78fff", "#3d73eb"];

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
      left: `${rating}%`,
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

          {isLoading ? (
            <ActivityIndicator
              size="large"
              color="#fff"
              style={{
                display: "flex",
                margin: "auto",
              }}
            />
          ) : (
            <>
              <CustomText text={rating} fontSize={96} />
              <LinearGradient style={styles.tabBar} colors={colorsGradient}>
                {!isLoading && (
                  <View style={styles.tabText}>
                    <CustomText text="Вы здесь" fontSize={10} />
                    <View style={styles.tabThumb}>
                      <LinearGradient
                        style={styles.tabThumbGradient}
                        colors={colorsGradient}
                      ></LinearGradient>
                    </View>
                  </View>
                )}
              </LinearGradient>
            </>
          )}
          {!isLoading && (
            <Text style={styles.contentStatisticsTop}>
              <CustomText text={"Ваш общий рейтинг лучше чем у "} />
              <CustomText text={"62% "} color="#9f8fff" />
              <CustomText text={"людей"} />
            </Text>
          )}
        </View>
        <BtnsForSave isLoading={isLoading} />
      </View>
    </View>
  );
}
