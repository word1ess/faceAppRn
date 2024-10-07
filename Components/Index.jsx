import React from "react";
import CustomText from "./Сommon/CustomText.jsx";
import CustomBtn from "./Сommon/CustomBtn.jsx";
import CustomImgContainer from "./Сommon/CustomImgContainer.jsx";
import * as Linking from "expo-linking";

import { View, Text, StyleSheet } from "react-native";
import {
  setUserSession,
  setUserRefferalls,
  setUserRefferallLink,
} from "../redux/statistics.js";
import { useDispatch, useSelector } from "react-redux";
import Svg, { Path } from "react-native-svg";
import { useEffect } from "react";
import { userApi } from "../api/api.js";
import { Platform } from "react-native";

export default function Index() {
  const dispatch = useDispatch();

  let session = "lRkdP0CKCytXWW9NJcWo0kxqrg6q5lWOJ90XV0c3mW8=";
  if (Platform.OS === "web") {
    const searcUrl = window.location.search;
    const searchParams = new URLSearchParams(searcUrl);

    session = searchParams.get("user").toString();
  }

  const getUserReferalls = async () => {
    try {
      const response = await userApi.getUserRefferallCountApi(session);
      if (response.ok) {
        const data = await response.json();
        dispatch(setUserRefferalls(data.count));
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
      console.error("Error get refferalls:", error);
    }
  };
  const getUserReferallLink = async () => {
    try {
      const response = await userApi.getUserRefferallLinkApi(session);
      if (response.ok) {
        const data = await response.json();
        dispatch(setUserRefferallLink(data.link));
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
      console.error("Error get refferalls:", error);
    }
  };

  useEffect(() => {
    dispatch(setUserSession(session));
    getUserReferalls();
    getUserReferallLink();
  }, []);

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
      <View style={styles.headerStyle}>
        <Svg xmlns="http://www.w3.org/2000/svg" width={50} height={50}>
          <Path
            d="M50.5002 22.5C50.4895 22.3669 50.4895 22.2331 50.5002 22.1C50.5002 21.4 50.3002 20.7 50.1752 20C49.718 17.9288 48.9865 15.9278 48.0002 14.05V14.05C46.3161 10.6043 43.8618 7.59228 40.8272 5.24699C37.7926 2.9017 34.2592 1.28603 30.5002 0.525V0.525L28.4002 0.2H28.0002H27.2752H27.0752L25.5002 0C24.6502 0 23.8002 0 23.0002 0H22.6002L20.5002 0.5C15.7003 1.48423 11.2955 3.85723 7.83304 7.3241C4.37062 10.791 2.00327 15.1989 1.0252 20V20C0.900196 20.7 0.800195 21.4 0.700195 22.1C0.710879 22.2331 0.710879 22.3669 0.700195 22.5C0.700195 23.325 0.700195 24.175 0.700195 25C0.700195 25.825 0.700195 26.7 0.700195 27.5C0.710879 27.6331 0.710879 27.7669 0.700195 27.9C0.700195 28.6 0.900196 29.3 1.0252 30C1.41886 32.0616 2.08292 34.0622 3.0002 35.95V35.95C4.6843 39.3957 7.1386 42.4077 10.1732 44.753C13.2077 47.0983 16.7412 48.714 20.5002 49.475L22.6002 49.8L23.0002 50H23.8502H24.2002C24.6502 50 25.0752 50 25.5252 50C26.3752 50 27.2252 50 28.0252 49.875H28.4252L30.5002 49.5C35.3001 48.5158 39.7049 46.1428 43.1674 42.6759C46.6298 39.209 48.9971 34.8011 49.9752 30V30C50.1002 29.3 50.2002 28.6 50.3002 27.9C50.3548 27.761 50.4217 27.6271 50.5002 27.5C50.5002 26.675 50.6252 25.825 50.6252 25C50.6252 24.175 50.5002 23.3 50.5002 22.5ZM28.4002 5.25L29.6502 5.425C34.1696 6.38968 38.2155 8.88966 41.1002 12.5H24.0502L28.4002 5.25ZM21.5502 5.45L22.5502 5.3L13.9502 20L9.7502 12.7C12.6592 8.97082 16.7957 6.39326 21.4252 5.425L21.5502 5.45ZM6.9752 32.5C6.52345 31.392 6.17204 30.2458 5.9252 29.075V29.075C5.9252 28.525 5.7252 27.95 5.6752 27.375C5.66315 27.2754 5.66315 27.1746 5.6752 27.075C5.54184 25.7283 5.54184 24.3717 5.6752 23.025C5.66315 22.9254 5.66315 22.8246 5.6752 22.725C5.6752 22.15 5.8252 21.575 5.9252 21.025C6.14512 19.9076 6.46301 18.8117 6.8752 17.75L15.5002 32.5H6.9752ZM22.7252 44.775L21.4752 44.6C16.9069 43.6557 12.8124 41.1441 9.9002 37.5H26.9502L22.7252 44.775ZM21.1752 32.5L16.8502 25L21.1752 17.5H29.8252L34.1502 25L29.8252 32.5H21.1752ZM29.5752 44.575L28.5752 44.725L37.0502 30L41.2502 37.3C38.3411 41.0292 34.2046 43.6067 29.5752 44.575V44.575ZM45.4002 27.075C45.4122 27.1746 45.4122 27.2754 45.4002 27.375C45.4002 27.95 45.2502 28.525 45.1502 29.075C44.9247 30.1585 44.6068 31.2207 44.2002 32.25L35.5002 17.5H43.9252C44.3769 18.608 44.7284 19.7542 44.9752 20.925C44.9752 21.475 45.1752 22.05 45.2252 22.625C45.2372 22.7246 45.2372 22.8254 45.2252 22.925C45.3585 24.2717 45.3585 25.6283 45.2252 26.975L45.4002 27.075Z"
            fill="#9F8FFF"
          />
        </Svg>
        <Text style={styles.headerText}>Logo</Text>
      </View>
      <Text>
        <CustomText text={"Сделайте селфи для анализа"} />{" "}
        <CustomText text={"и получите готовый результат"} color="#9f8fff" />
      </Text>
      <CustomText text={session} color="#9f8fff" fontSize={40} />
      <CustomText text={searcUrl} color="#9f8fff" fontSize={40} />
      <CustomImgContainer
        source={require("../assets/img/face.png")}
        bordered
        radius
      />
      <CustomBtn
        text="Начать"
        colorsGradient={["#9f8fff", "#3d73eb"]}
        href="screen-2"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  headerStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 32,
  },
  headerText: {
    // fontWeight: 500,
    fontSize: 48,
    textAlign: "center",
    color: "#fff",
    textTransform: "uppercase",
  },
});
