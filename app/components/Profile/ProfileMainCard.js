import React from "react";
import { View, StyleSheet } from "react-native";
import { Card, Text, Subheading } from "react-native-paper";

const ProfileMainCard = props => {
    return (
        <Card>
            <View style={styles.profileContainer}>
                <View style={styles.nameContainer}>
                    <Text numberOfLines={1} style={styles.name}>
                        {props.name}
                    </Text>
                    <Subheading numberOfLines={2} style={styles.status}>
                        "{props.status}"
                    </Subheading>
                </View>
                <View style={styles.profileAvatarContainer}>
                    <Card.Cover
                        style={styles.profileAvatar}
                        resizeMode="contain"
                        source={{ uri: props.image }}
                    />
                </View>
            </View>
        </Card>
    );
};

const styles = StyleSheet.create({
    profileContainer: {
        flexDirection: "row",
        width: "100%",
        height: 150
    },
    nameContainer: {
        width: "65%",
        alignItems: "center"
    },
    name: {
        fontSize: 34,
        fontWeight: "900",
        marginTop: 50,
        marginHorizontal: 15
    },
    status: {
        fontSize: 16,
        marginTop: "auto",
        marginBottom: 10,
        textAlign: "center",
        marginHorizontal: 15
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

export default ProfileMainCard;
