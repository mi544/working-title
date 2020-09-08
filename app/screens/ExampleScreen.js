import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ExampleScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>Example Screen Here!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default ExampleScreen;