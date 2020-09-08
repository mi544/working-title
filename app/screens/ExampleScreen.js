import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { HeaderButtons, Item } from "react-navigation-header-buttons"

import CustomHeaderButton from "../components/CustomHeaderButton";

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

ExampleScreen.navigationOptions = navData => {
    return {
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    title="Menu"
                    iconName="menu"
                    onPress={navData.navigation.toggleDrawer}
                />
            </HeaderButtons>
        )
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default ExampleScreen;