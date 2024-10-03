import { View, Image, Text, StyleSheet, Pressable } from "react-native";
import { useSelector } from "react-redux";
import CustomText from "./Сommon/CustomText.jsx";
import Svg, { Path } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";

export default function Plan() {
  const plan = useSelector((state) => state.plan.items);
  const navigation = useNavigation();
  const handleClickNavigate = (text) => {
    navigation.navigate("CustomTextComponent", {
      text,
    });
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
      <CustomText text="Ваш план улучшений!" marginBottom={40} />
      <View style={styles.planRow}>
        {plan.map((planItem, i) => {
          return (
            <Pressable
              style={styles.planItem}
              onPress={() => {
                handleClickNavigate(planItem.text);
              }}
            >
              <CustomText
                width="fit-content"
                text={i}
                fontSize={48}
                color={i === 0 ? "#d6a731" : "#fff"}
              />
              <View style={styles.planItemInfo}>
                <CustomText
                  text={planItem.title}
                  fontSize={12}
                  textAlign="left"
                  marginBottom={12}
                />

                <CustomText
                  text={planItem.priority}
                  fontSize={14}
                  fontUpperCase
                  color={i === 0 ? "#d6a731" : "#90BDF3"}
                  marginBottom={0}
                  textAlign="left"
                />
              </View>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={8}
                height={17}
                style={styles.planArrow}
              >
                <Path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.51192 0.930571C0.826414 0.661005 1.29989 0.697426 1.56946 1.01192L7.56946 8.01192C7.8102 8.29279 7.8102 8.70724 7.56946 8.98811L1.56946 15.9881C1.29989 16.3026 0.826414 16.339 0.51192 16.0695C0.197426 15.7999 0.161005 15.3264 0.430571 15.0119L6.01221 8.50001L0.430571 1.98811C0.161005 1.67361 0.197426 1.20014 0.51192 0.930571Z"
                  fill="#90BDF3"
                />
              </Svg>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
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
});
