import React from "react";
import { View, StyleSheet, TouchableNativeFeedback, TouchableOpacity, Platform } from "react-native";
import { Card, Text } from 'react-native-paper';

const Touchable = Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;

const FriendCard = props => {
    return (
        <View style={styles.cardContainer}>
            <Touchable onPress={props.onProfileClick}>
                <Card style={styles.card}>
                    <View style={styles.profileContainer}>
                        <View style={{ flexDirection: "row" }}>
                            <View style={styles.profileNameContainer}>
                                <Text numberOfLines={1} style={styles.profileName}>{props.name}</Text>
                            </View>
                            <View style={styles.profileAvatarContainer}>
                                <Card.Cover
                                    style={styles.profileAvatar}
                                    resizeMode="center"
                                    source={{ uri: props.image }}
                                />
                            </View>
                        </View>
                    </View>
                </Card>
            </Touchable>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        alignItems: "center"
    },
    card: {
        alignItems: "center",
        height: 75,
        width: "85%",
        marginVertical: 10
    },
    profileContainer: {
        flexDirection: "row",
    },
    profileNameContainer: {
        width: "65%",
        justifyContent: "center"
    },
    profileName: {
        fontSize: 22,
        marginLeft: 15
    },
    profileAvatarContainer: {
        width: "35%",
        height: "100%"
    },
    profileAvatar: {
        width: "100%",
        height: "100%"
    }
});

export default FriendCard;