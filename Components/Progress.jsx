import {
  View,
  Image,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
} from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import { useSelector } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
import Svg, { Path } from "react-native-svg";
import { useState } from "react";

import CustomText from "./Сommon/CustomText.jsx";
import CustomImgContainer from "./Сommon/CustomImgContainer.jsx";
export default function Progress() {
  const imagesAll = [
    {
      source: "../assets/img/face.png",
    },
    {
      source: "../assets/img/face.png",
    },
    {
      source: "../assets/img/face.png",
    },
    {
      source: "../assets/img/face.png",
    },
    {
      source: "../assets/img/face.png",
    },
    {
      source: "../assets/img/face.png",
    },
    {
      source: "../assets/img/face.png",
    },
  ];
  const imageFrontalToUser = useSelector((state) => state.image.frontal.toUser);
  const statisticsAll = useSelector((state) => state.statistics.items);
  const [datastatistics] = useState(statisticsAll);

  const statisticsItem = ({ item }) => {
    const i = item.name.slice(0, 1) - 1;
    return (
      <View style={styles.contentStatisticsItem}>
        <CustomText
          text={i === 0 ? "Общий" : item.name.slice(3)}
          fontSize={10}
        />
        <CircularProgress
          radius={30}
          value={item.score}
          progressValueColor={"#fff"}
          activeStrokeColor={colors[i]}
          duration={1000}
        />
      </View>
    );
  };

  const imageSource = imageFrontalToUser ? { uri: imageFrontalToUser } : "";
  const colorsGradient = ["#c78fff", "#3d73eb"];
  const colors = [
    "#E8846E",
    "#3D73EB",
    "#AA37C7",
    "#12A1AA",
    "#54B15D",
    "#D6A731",
  ];
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
        <View style={styles.imageContainer}>
          <Image source={imageSource} style={styles.image} />
        </View>
        <FlatList
          data={datastatistics}
          renderItem={statisticsItem}
          horizontal={true}
        />
      </LinearGradient>
      <View style={styles.photos}>
        <CustomImgContainer
          source={require("../assets/img/face.png")}
          radius
          width={170}
          height={170}
          flex={false}
        />
        <CustomImgContainer
          source={require("../assets/img/face.png")}
          radius
          width={170}
          height={170}
          flex={false}
        />
        <CustomImgContainer
          source={require("../assets/img/face.png")}
          radius
          width={170}
          height={170}
          flex={false}
        />
        <CustomImgContainer
          source={require("../assets/img/face.png")}
          radius
          width={170}
          height={170}
          flex={false}
        />
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
    gap: 20,
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
  },
  planItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#2a3d55",
    padding: 16,
    paddingRight: 24,
    borderRadius: 20,
    width: "100%",
  },
  planArrow: {
    display: "flex",
    marginLeft: "auto",
  },
  contentStatisticsItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    marginBottom: 10,
    marginRight: 15,
  },
  photos: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    maxHeight: 400,
  },
});
