import { createStackNavigator } from "react-navigation-stack";

import ExampleScreen from "../screens/ExampleScreen";

const ExampleStackNavigator = createStackNavigator({
    GreatScreen: ExampleScreen
});


export default ExampleStackNavigator;