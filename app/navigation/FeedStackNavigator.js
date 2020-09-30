import { createStackNavigator } from "react-navigation-stack";

import FeedScreen from "../screens/FeedScreen";
import MyProfileScreen from "../screens/MyProfileScreen";

const FeedStackNavigator = createStackNavigator({
    Feed: FeedScreen
});

export default FeedStackNavigator;
