import CircularProgress from "react-native-circular-progress-indicator";
import CustomText from "./Сommon/CustomText.jsx";

import { photoApi } from "../api/api.js";
import { setStatistics } from "../redux/statistics.js";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { View, Image, Text, StyleSheet, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { BlurView } from "expo-blur";
import { Linking } from "react-native";

export default function ScreenSeventh() {
  const dispatch = useDispatch();

  const imageFrontalToUser = useSelector((state) => state.image.frontal.toUser);
  const imageFrontalToServer = useSelector(
    (state) => state.image.frontal.toServer
  );
  const imageProfileToServer = useSelector(
    (state) => state.image.profile.toServer
  );
  const session = useSelector((state) => state.statistics.session);
  const statisticsAll = useSelector((state) => state.statistics.items);
  const refferallsCount = useSelector(
    (state) => state.statistics.userRefferals
  );
  const refferallLink = useSelector(
    (state) => state.statistics.userRefferalLink
  );

  const imageSource = imageFrontalToUser ? { uri: imageFrontalToUser } : "";

  const getStatisticks = async () => {
    const imagesToServer = [imageFrontalToServer, imageProfileToServer];
    const images = [];

    for (const image of imagesToServer) {
      let filename = image.split("/").pop();
      let match = /\.(\w+)$/.exec(filename);
      let extension = match ? match[1] : "jpg"; // Определение расширения файла

      if (image === undefined) {
        console.log("Нет изображения!");
        return;
      }
      images.push({
        image,
        extension,
      });
    }

    try {
      const response = await photoApi.postImageApi(session, images);

      if (response.ok) {
        const data = await response.json();
        dispatch(setStatistics(data.items));
      } else {
        // Обработка ошибки 422
        const responseErrorr = response.json();
        console.error(
          "Ошибка 422:",
          response.status,
          response.json(responseErrorr.detail[1])
        );
      }
    } catch (error) {
      console.error("Error uploading images:", error);
    }
  };
  const btnHandleInvite = () => {
    Linking.openURL(
      `https://t.me/share/url?url=${refferallLink}&text=Скорее_Заходи!`
    );
  };
  useEffect(() => {
    getStatisticks();
  }, []);

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

          {refferallsCount < 3 && (
            <BlurView
              intensity={100}
              tint="dark"
              style={styles.contentStatisticsShadow}
            >
              <CustomText
                text={"Для разблокировки пригласите больше рефералов!"}
              />
              <CustomText text={`${refferallsCount}/3`} />
              <LinearGradient
                colors={colorsGradient}
                style={styles.btnGradient}
              >
                <Pressable onPress={btnHandleInvite}>
                  <Text style={styles.btnText}>Пригласить</Text>
                </Pressable>
              </LinearGradient>
            </BlurView>
          )}
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
    position: "relative",
  },
  contentStatisticsShadow: {
    position: "absolute",
    bottom: 0,
    left: -20,
    width: "113%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.97)",
    padding: 20,
    height: 280,
    overflow: "hidden",
    borderRadius: 20,
    elevation: 10,
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
