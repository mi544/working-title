import React from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs"

import { MaterialCommunityIcons } from "@expo/vector-icons";

import ExampleStackNavigator from "./ExampleStackNavigator";
import FriendsStackNavigator from "./FriendsStackNavigator";

const tabScreenConfig = {
    Home: {
        screen: ExampleStackNavigator,
        navigationOptions: {

            tabBarIcon: tabInfo => (
                <MaterialCommunityIcons
                    name="home-circle"
                    size={26}
                />
            )
        }
    },
    Friends: {
        screen: FriendsStackNavigator,
        navigationOptions: {

            tabBarIcon: tabInfo => (
                <MaterialCommunityIcons
                    name="account-multiple"
                    size={26}
                />
            )
        }
    },
};

const TabsNavigator = Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        shifting: false,
        labeled: false,
        barStyle: { backgroundColor: "white" }
    })
    : createBottomTabNavigator(tabScreenConfig);

export default TabsNavigator;