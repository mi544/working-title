import { createStackNavigator } from "react-navigation-stack";

import ExampleScreen from "../screens/ExampleScreen";
import ProfileScreen from "../screens/ProfileScreen";

const ExampleStackNavigator = createStackNavigator({
    Main: ExampleScreen,
    Profile: ProfileScreen
});


export default ExampleStackNavigator;