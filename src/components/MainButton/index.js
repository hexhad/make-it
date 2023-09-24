import { Text, TouchableOpacity } from "react-native";
import { Colors } from "../../utils/Constants";

export default ({ label, onPress, style }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: Colors.DARK_BLUE,
        height: 55,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}>
      <Text style={{ color: Colors.WHITE, fontSize: 17 }}>{label}</Text>
    </TouchableOpacity>
  );
}
