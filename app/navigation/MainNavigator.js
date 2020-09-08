import { createAppContainer } from "react-navigation";

import { createDrawerNavigator } from "react-navigation-drawer";

import TabsNavigator from "./TabsNavigator";

const MainNavigator = createDrawerNavigator({
    Main: TabsNavigator,
    Messages: TabsNavigator
});


export default createAppContainer(MainNavigator);