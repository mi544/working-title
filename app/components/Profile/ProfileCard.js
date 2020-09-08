import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card, Subheading, TouchableRipple } from 'react-native-paper';

import theme from "../../constants/theme";

const ProfileCard = props => {
    let card = (
        <Card
            theme={{ ...theme, roundness: 20 }}
            style={{ height: props.height, width: props.width, borderWidth: 1, borderColor: "#ccc" }}
        >
            <Card.Content style={styles.cardContainer} >
                <Text numberOfLines={1} style={styles.title}>{props.title}</Text>
                <Subheading style={styles.subheading}>{props.subheading}</Subheading>
            </Card.Content>
        </Card>
    );

    if (props.isTouchable) {
        card = (
            <Card
                theme={{ ...theme, roundness: 20 }}
                style={{ height: props.height, width: props.width, overflow: "hidden", borderWidth: 1.2, borderColor: theme.colors.primary }}
            >
                <TouchableRipple
                    style={{ flex: 1 }}
                    onPress={() => { }}
                >
                    <Card.Content style={styles.cardContainer} >
                        <Text numberOfLines={1} style={styles.title}>{props.title}</Text>
                        <Subheading style={styles.subheading}>{props.subheading}</Subheading>
                    </Card.Content>
                </TouchableRipple>
            </Card>
        );
    }

    return card;
};

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 35,
    },
    subheading: {
        fontSize: 16
    }
});

export default ProfileCard;