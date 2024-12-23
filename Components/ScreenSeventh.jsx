import CircularProgress from "react-native-circular-progress-indicator";
import CustomText from "./Сommon/CustomText.jsx";
import BtnsForSave from "./Сommon/BtnsForSave.jsx";
import UserAnalisysImage from "./Сommon/UserAnalisys.jsx";

import { photoApi } from "../api/api.js";
import { setLoadingStatus, setStatistics } from "../redux/statistics.js";
import { LinearGradient } from "expo-linear-gradient";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { BlurView } from "expo-blur";
import { Linking } from "react-native";
import shareTextDone from "../commonFn/setTextToShare.js";

export default function ScreenSeventh() {
  const dispatch = useDispatch();
  const screenContentRef = useRef(null);
  const [textShare, setTextShare] = useState(null);

  const session = useSelector((state) => state.statistics.userSession);
  const isLoading = useSelector((state) => state.statistics.isLoading);
  const statisticsAll = useSelector((state) => state.statistics.items);

  const imageFrontal = useSelector((state) => state.image.frontal.toServer);
  // const imageProfile = useSelector((state) => state.image.profile.toServer);
  const imageFrontalToUser = useSelector((state) => state.image.frontal.toUser);
  const imageSource = imageFrontalToUser ? { uri: imageFrontalToUser } : "";

  const refferallsCount = useSelector(
    (state) => state.statistics.userRefferals
  );
  const refferallLink = useSelector(
    (state) => state.statistics.userRefferalLink
  );

  function getExtensionFromBase64(base64String) {
    const mimeTypeMatch = base64String.match(
      /^data:image\/(png|jpeg|jpg|gif|webp);base64,/
    );
    if (mimeTypeMatch) {
      return mimeTypeMatch[1];
    }
    return null;
  }

  const getStatisticks = async () => {
    const images = [];
    if (imageFrontalToUser === undefined) {
      console.log("Нет изображения!");
      return;
    }
    let extension = getExtensionFromBase64(imageFrontalToUser) || "jpg"; // Определение расширения файла

    images.push({ image: imageFrontal, extension });

    try {
      const response = await photoApi.postImageApi(session, images);
      dispatch(setLoadingStatus(true));
      if (!response.error) {
        const data = await response.json();
        dispatch(setStatistics(data.items));
        dispatch(setLoadingStatus(false));
      } else {
        const responseError = response.json();
        console.error("Ошибка загрузки:", responseError.error);
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

  useEffect(() => {
    shareTextDone(statisticsAll, setTextShare);
  }, [isLoading]);

  const colors = [
    "#E8846E",
    "#3D73EB",
    "#AA37C7",
    "#12A1AA",
    "#54B15D",
    "#D6A731",
  ];
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
        <UserAnalisysImage
          imageSource={imageSource}
          colorsGradient={colorsGradient}
        />
        <View
          style={styles.contentStatisticsRow}
          ref={screenContentRef}
          collapsable={false}
        >
          {statisticsAll.map((statistic, i) => {
            return (
              <View key={i} style={styles.contentStatisticsItem}>
                <CustomText
                  text={
                    statistic.name.charAt(0).toUpperCase() +
                    statistic.name.slice(1)
                  }
                  fontSize={14}
                />
                {isLoading ? (
                  <ActivityIndicator size="large" color="#fff" />
                ) : (
                  <CircularProgress
                    radius={44}
                    value={statistic.score}
                    progressValueColor={"#fff"}
                    activeStrokeColor={colors[i]}
                    duration={1000}
                  />
                )}
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
        <BtnsForSave
          isLoading={isLoading}
          screenContentRef={screenContentRef}
          refferallLink={refferallLink}
          text={textShare}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
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
    bottom: -100,
    left: -20,
    width: "113%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.97)",
    padding: 20,
    height: 380,
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
    minHeight: 120,
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
  btnBorderStyle: {
    gap: 8,
    padding: 12,
    borderRadius: 60,
    color: "#9f8fff",
    backgroundColor: "#16202c",
  },
});
