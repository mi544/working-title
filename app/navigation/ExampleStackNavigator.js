import { createStackNavigator } from "react-navigation-stack";

import MainScreen from "../screens/MainScreen";
import ProfileScreen from "../screens/ProfileScreen";

const ExampleStackNavigator = createStackNavigator({
    Main: MainScreen,
    Profile: ProfileScreen
});

export default ExampleStackNavigator;
