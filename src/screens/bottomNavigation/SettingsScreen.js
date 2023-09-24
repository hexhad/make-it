import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import { nav } from "../../utils/MainNavigation";

export default () => {
  return (
    <SafeAreaView>
      <Text>Settings Screen</Text>
      <TouchableOpacity onPress={() => {
        nav.pop();
      }}>
        <Text>GoBACK</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
