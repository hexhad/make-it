import { Text, TouchableOpacity, View } from "react-native";
import { nav } from "../../utils/MainNavigation";
import { ArrowUpCircle } from "react-native-feather";
export default () => {
  return (
    <View>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={() => {
        nav.pop();
      }}>
        <Text>GoBACK</Text>
        <ArrowUpCircle height={30} width={30} color={"red"} />
      </TouchableOpacity>
    </View>
  );
}
