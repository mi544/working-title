import React from "react";
import { StyleSheet, View } from "react-native";
import {
    Provider as PaperProvider,
    ActivityIndicator,
    Colors
} from "react-native-paper";

import theme from "../constants/theme";

const Loading = props => {
    return (
        <PaperProvider theme={theme}>
            <ActivityIndicator animating color={Colors.red800} size="large" />
        </PaperProvider>
    );
};

export default Loading;
