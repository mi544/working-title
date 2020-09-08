import { createBottomTabNavigator } from "react-navigation-tabs";

import ExampleStackNavigator from "./ExampleStackNavigator";
import ProfileStack from "./ProfileStack";

const TabsNavigator = createBottomTabNavigator({
    Foo: ExampleStackNavigator,
    Bar: ProfileStack
});


export default TabsNavigator;