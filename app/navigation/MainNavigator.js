import { createAppContainer } from "react-navigation";

import { createDrawerNavigator } from "react-navigation-drawer";

import TabsNavigator from "./TabsNavigator";

const MainNavigator = createDrawerNavigator({
    Main: TabsNavigator
});


export default createAppContainer(MainNavigator);