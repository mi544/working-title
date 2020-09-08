import { createStackNavigator } from "react-navigation-stack";

import ProfileScreen from "../screens/ProfileScreen";

const ProfileStack = createStackNavigator({
    Profile: ProfileScreen
});


export default ProfileStack;