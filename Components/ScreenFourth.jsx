import CustomText from "./Сommon/CustomText.jsx";
import CustomBtn from "./Сommon/CustomBtn.jsx";
import CustomImgContainer from "./Сommon/CustomImgContainer.jsx";
import { View } from "react-native";
import { useSelector } from "react-redux";
export default function ScreenFourth() {
  const imageFrontal = useSelector((state) => state.image.frontal.toUser);
  const imageSource = imageFrontal ? { uri: imageFrontal } : "";

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
      <CustomText text="Фронтальное" />
      <CustomImgContainer source={imageSource} />
      <CustomBtn text="Далее" href="screen-5" />
      <CustomBtn text="Переснять" href="screen-2" btnType="bordered" />
    </View>
  );
}
