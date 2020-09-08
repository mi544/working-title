import { createStackNavigator } from "react-navigation-stack";

import FriendsListScreen from "../screens/FriendsListScreen";
import ProfileScreen from "../screens/ProfileScreen";

const FriendsStackNavigator = createStackNavigator({
    Friends: FriendsListScreen,
    Profile: ProfileScreen
});


export default FriendsStackNavigator;