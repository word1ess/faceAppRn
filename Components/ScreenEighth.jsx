import CustomText from "./Сommon/CustomText.jsx";

import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { View, Image, Text, StyleSheet, Pressable } from "react-native";
import { useSelector } from "react-redux";
import Svg, { Path } from "react-native-svg";

export default function ScreenEighth() {
  const imageFrontal = useSelector((state) => state.image.frontal.toUser);
  const imageSource = imageFrontal ? { uri: imageFrontal } : "";
  const colorsGradient = ["#c78fff", "#3d73eb"];
  const statisticsAll = useSelector((state) => state.statistics.info);

  const svgForItems = [
    {
      width: 61,
      height: 62,
      path: [
        <Path
          d="M10.1836 42.1652C6.6106 41.5949 3.88184 38.5004 3.88184 34.7674V30.1729C3.88184 28.9654 4.37157 27.8719 5.16249 27.0809C5.9534 26.29 7.04573 25.8003 8.25325 25.8003C8.88373 25.7992 9.50688 25.9354 10.0794 26.1994M51.317 42.165C54.2151 41.7021 56.5577 39.5787 57.3394 36.8001M51.4213 26.1991C51.9768 25.9425 52.5944 25.8007 53.2471 25.8007C54.4542 25.8007 55.5464 26.2905 56.3374 27.0804C57.1284 27.8714 57.6183 28.9648 57.6183 30.173V32.7172"
          stroke="#E8846E"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />,
        <Path
          d="M13.6454 10.9388C11.3942 14.2483 10.0793 18.2445 10.0793 22.5488V38.6847C10.0793 42.5156 11.6016 46.1884 14.3099 48.8966L22.144 56.7308M16.274 7.79348C20.0029 4.13481 25.1136 1.87891 30.7504 1.87891C36.4587 1.87891 41.6268 4.19223 45.3675 7.93293C49.1082 11.6736 51.4215 16.8405 51.4215 22.5488V38.6847C51.4215 42.5156 49.8992 46.1884 47.191 48.8966L37.9072 58.1804C36.6649 59.4228 34.98 60.1208 33.2231 60.1211H28.2777C27.2148 60.1211 26.1777 59.8656 25.2507 59.3886M51.4215 30.1756H52.3192C53.5063 30.1756 54.4673 31.1365 54.4673 32.3236V33.7311M6.73096 33.7311V32.3236C6.73096 31.1365 7.69191 30.1756 8.87905 30.1756H9.77672"
          stroke="#E8846E"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />,
      ],
    },
    {
      width: 61,
      height: 60,
      path: [
        <Path
          d="M19.7618 23.5387C20.5692 21.8008 21.7962 20.2973 23.3126 19.1582M37.1876 19.1582C39.9942 21.2664 41.8083 24.6227 41.8083 28.4031C41.8083 34.7863 36.6333 39.9613 30.2501 39.9613C23.8669 39.9613 18.6919 34.7863 18.6919 28.4031C18.6919 28.0797 18.7048 27.7609 18.7317 27.4445"
          stroke="#12A1AA"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />,
        <Path
          d="M3.14102 33.0778C2.41492 32.0894 1.74323 31.0621 1.12891 30.0005C6.94258 19.9517 17.8059 13.1899 30.25 13.1899C36.543 13.1899 42.4316 14.9196 47.4672 17.929M50.8504 20.2399C54.2938 22.9132 57.1873 26.2276 59.3711 30.0005C53.5574 40.0493 42.6941 46.8099 30.25 46.8099C20.5516 46.8099 11.8141 42.7036 5.67812 36.1353"
          stroke="#12A1AA"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />,
        <Path
          d="M59.3711 30.0002C53.558 23.2306 42.6939 18.6758 30.25 18.6758C17.8061 18.6758 6.94199 23.2306 1.12891 30.0002"
          stroke="#12A1AA"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />,
        <Path
          d="M30.25 32.9732C32.7739 32.9732 34.8199 30.9272 34.8199 28.4033C34.8199 25.8795 32.7739 23.8335 30.25 23.8335C27.7262 23.8335 25.6802 25.8795 25.6802 28.4033C25.6802 30.9272 27.7262 32.9732 30.25 32.9732Z"
          stroke="#12A1AA"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />,
      ],
    },
    {
      width: 44,
      height: 62,
      path: [
        <Path
          d="M1.125 25.8759V22.6074C1.125 11.192 10.3795 1.9375 21.7961 1.9375C27.5044 1.9375 32.6725 4.25083 36.4132 7.99152C37.0109 8.58919 37.571 9.22202 38.0913 9.88883M40.284 13.3518C41.6809 16.1362 42.4672 19.2792 42.4672 22.6074V38.7433C42.4672 42.5742 40.9449 46.247 38.2367 48.9552L28.9529 58.239C27.7106 59.4814 26.0257 60.1794 24.2688 60.1797H19.3234C17.5667 60.1797 15.8815 59.4812 14.6393 58.239L5.35555 48.9552C4.01437 47.6142 2.95046 46.0222 2.22458 44.27C1.4987 42.5179 1.12506 40.6399 1.125 38.7433V29.9775"
          stroke="#D6A731"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />,
        <Path
          d="M12.6065 32.2679C15.6358 32.2679 18.0915 30.8499 18.0915 29.1008C18.0915 27.3516 15.6358 25.9336 12.6065 25.9336C9.57728 25.9336 7.12158 27.3516 7.12158 29.1008C7.12158 30.8499 9.57728 32.2679 12.6065 32.2679Z"
          stroke="#D6A731"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />,
        <Path
          d="M30.8936 32.2679C33.9229 32.2679 36.3786 30.8499 36.3786 29.1008C36.3786 27.3516 33.9229 25.9336 30.8936 25.9336C27.8644 25.9336 25.4087 27.3516 25.4087 29.1008C25.4087 30.8499 27.8644 32.2679 30.8936 32.2679Z"
          stroke="#D6A731"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />,
      ],
    },
    {
      width: 61,
      height: 60,
      path: [
        <Path
          d="M14.5749 38.6384C19.768 38.6384 23.9779 36.2075 23.9779 33.2089C23.9779 30.2102 19.768 27.7793 14.5749 27.7793C9.38173 27.7793 5.17188 30.2102 5.17188 33.2089C5.17188 36.2075 9.38173 38.6384 14.5749 38.6384Z"
          stroke="#54B15D"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />,
        <Path
          d="M18.4528 28.4929C18.7433 29.0413 18.8946 29.6526 18.8935 30.2731C18.8935 32.3798 17.1865 34.0868 15.0798 34.0868C12.9732 34.0868 11.2661 32.3798 11.2661 30.2731C11.2661 29.4665 11.5174 28.7179 11.9433 28.1028M40.2707 23.0336C41.9172 22.0261 43.8531 21.4453 45.9252 21.4453C49.9441 21.4453 53.4502 23.6301 55.3282 26.8749"
          stroke="#54B15D"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />,
        <Path
          d="M48.5579 28.0462C48.9991 28.6953 49.2351 29.4665 49.2342 30.2563C49.2342 32.4016 47.5294 34.1399 45.4256 34.1399C43.3218 34.1399 41.617 32.4016 41.617 30.2563C41.617 29.601 41.7763 28.984 42.0572 28.4435M55.328 33.2089C55.328 36.2075 51.1181 38.6384 45.925 38.6384C40.7318 38.6384 36.522 36.2075 36.522 33.2089C36.522 30.2102 40.7318 27.7793 45.925 27.7793C51.1181 27.7793 55.328 30.2102 55.328 33.2089Z"
          stroke="#54B15D"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />,
        <Path
          d="M20.1719 23.0608C18.5316 22.0605 16.6031 21.4839 14.5389 21.4839C10.5354 21.4839 7.04272 23.653 5.17188 26.8745"
          stroke="#54B15D"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />,
      ],
    },
  ];

  const navigation = useNavigation();
  const btnClickHandle = () => {
    navigation.navigate("screen-8");
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
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={svgForItems[i]?.width}
                  height={svgForItems[i]?.height}
                >
                  {svgForItems[i]?.path}
                </Svg>
                <CustomText text={statistic.name} fontSize={18} />
                <CustomText text={statistic.description} fontSize={12} />
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
