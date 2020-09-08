import { createBottomTabNavigator } from "react-navigation-tabs";

import ExampleStackNavigator from "./ExampleStackNavigator";

const TabsNavigator = createBottomTabNavigator({
    Foo: ExampleStackNavigator,
    Bar: ExampleStackNavigator
});


export default TabsNavigator;