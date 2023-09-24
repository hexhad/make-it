import { Text, TouchableOpacity, View } from "react-native";
import { nav } from "../../utils/MainNavigation";
import { ScreenNames } from "../../utils/Constants";
import { connect } from "react-redux";
import { MainAction } from "../../redux/actions/MainAction";
import Loader from "../../components/Loader";

const mapState = (state) => {
  return ({
    loading: state?.dummy?.dummy?.loading,
    data: state?.dummy?.dummy?.data,
    error: state?.dummy?.dummy?.error,
  });
};

const mapDispatch = {
  getDummy: MainAction?.getDummy,
};

const connector = connect(mapState, mapDispatch);
const ScreenTwo = ({ getDummy, loading, data, error }) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={() => {
        nav.restStack([
          { name: ScreenNames.ONBOARDING_SCREEN },
        ]);
      }}>
        <Text>RESET</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
        getDummy();
      }}>
        <Text>TRIGGER STATE</Text>
      </TouchableOpacity>

      <Loader visible={loading}/>
    </View>
  );
};
export default connector(ScreenTwo);
