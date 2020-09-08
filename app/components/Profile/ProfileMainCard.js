import React from "react";
import { View, StyleSheet } from "react-native";
import { Card, Title, Subheading } from 'react-native-paper';

const ProfileMainCard = props => {
    return (
        <Card>
            <View style={styles.profileContainer}>
                <View style={styles.profileNameContainer}>
                    <Title style={styles.profileName}>{props.name}</Title>
                    <Subheading style={styles.profileStatus}>"{props.status}"</Subheading>
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
    profileNameContainer: {
        width: "65%",
        alignItems: "center"
    },
    profileName: {
        fontSize: 30,
        marginTop: 50
    },
    profileStatus: {
        fontSize: 15,
        marginTop: "auto",
        marginBottom: 10
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