import { createStackNavigator } from "react-navigation-stack";

import MyProfileScreen from "../screens/MyProfileScreen";

const MyProfileStackNavigator = createStackNavigator({
    MyProfile: MyProfileScreen
});

export default MyProfileStackNavigator;
