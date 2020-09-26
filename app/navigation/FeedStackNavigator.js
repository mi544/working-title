import { createStackNavigator } from "react-navigation-stack";

import FeedScreen from "../screens/FeedScreen";

const FeedStackNavigator = createStackNavigator({
    Feed: FeedScreen
});

export default FeedStackNavigator;
