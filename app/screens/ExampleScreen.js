import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

const ExampleScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>Example Screen Here!</Text>
            <Button
                mode="outlined"
                onPress={() => {
                    props.navigation.navigate("Profile");
                }}
            >Open profile</Button>
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