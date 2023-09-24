import { FlatList, Text, TouchableOpacity, useWindowDimensions, View } from "react-native";
import { nav } from "../utils/MainNavigation";
import { Colors, ScreenNames } from "../utils/Constants";
import MainButton from "../components/MainButton";

export default () => {
  const onPress = () => {
    nav.navigate(ScreenNames.BOTTOM_NAV);
  };

  const { width } = useWindowDimensions();

  const onboardingData = [
    {
      desc: "Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      title: "Explore MAKE IT App from your Device",
    }, {
      desc: "Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      title: "Explore MAKE IT App from your Device",
      buttonAction: () => onPress(),
      dummyAction: () => {
        nav.goBack();
      },
    },
  ];

  const renderCard = ({ item, ...rest }) => {
    return (
      <View style={{ width: width }}>

        <View style={{
          flex: 3,
          backgroundColor: Colors.DARK_BLUE,
          justifyContent: "center",
          alignItems: "center",
        }}>
          <View style={{
            height: 100,
            width: 100,
            backgroundColor: "white",
          }} />
        </View>
        <View style={{
          flex: 2,
          backgroundColor: Colors.WHITE,
          padding: 20,
        }}>
          <Text style={{
            fontSize: 30,
            textAlign: "center",
            color: Colors.DARK_BLUE,
            fontWeight: "700",
          }}>{item?.title}</Text>
          <Text style={{ fontSize: 15, textAlign: "center", color: Colors.DARK_GRAY }}>{item?.desc}</Text>
          {!!item?.dummyAction && <TouchableOpacity
            onPress={item?.dummyAction}>
            <Text>GO BACK</Text>
          </TouchableOpacity>}
          {!!item?.buttonAction && <MainButton
            label={"Get Started"}
            onPress={item?.buttonAction}
            style={{ marginTop: "auto", marginBottom: 50 }}
          />}
        </View>
      </View>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={onboardingData}
        renderItem={renderCard}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        // keyExtractor={(i)=>i.id}
        bounces={false}
      />
    </View>
  );
}
