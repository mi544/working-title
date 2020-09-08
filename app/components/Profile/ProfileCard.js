import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card, Subheading } from 'react-native-paper';

import theme from "../../constants/theme";

const ProfileCard = props => {
    return (
        <Card
            theme={{ ...theme, roundness: 20 }}
            style={{ height: props.height, width: props.width }}
        >
            <Card.Content style={styles.cardContainer} >
                <Text numberOfLines={1} style={styles.title}>{props.title}</Text>
                <Subheading style={styles.subheading}>{props.subheading}</Subheading>
            </Card.Content>
        </Card>
    );
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