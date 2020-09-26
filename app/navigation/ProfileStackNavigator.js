import { createStackNavigator } from "react-navigation-stack";

import ProfileScreen from "../screens/ProfileScreen";

const ProfileStackNavigator = createStackNavigator({
    Profile: ProfileScreen
});

export default ProfileStackNavigator;
