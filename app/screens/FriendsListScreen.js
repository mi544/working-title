import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import { Provider as PaperProvider, ActivityIndicator, Colors } from "react-native-paper";

import API from "../utils/API";

import theme from "../constants/theme";

import FriendCard from "../components/Friends/FriendCard";

const FriendsListScreen = props => {

    const showProfiles = itemData => (
        <FriendCard
            name={itemData.item.name}
            image={itemData.item.profilePicture}
            onProfileClick={() => props.navigation.navigate("Profile", { userId: itemData.item.userId })}
        />
    );

    const [isLoaded, setIsLoaded] = useState(false);
    const [allFriends, setAllFriends] = useState();

    useEffect(() => {
        loadFriends();
    }, [])

    const loadFriends = () => {
        API.findAllUsers()
            .then(({ data }) => {
                setAllFriends(data);
                setIsLoaded(true);
            })
            .catch(err => console.log(err));
    };

    if (!isLoaded) {
        return (
            <PaperProvider theme={theme}>
                <ActivityIndicator
                    animating
                    color={Colors.red800}
                    size="large"
                />
            </PaperProvider >
        );
    }

    return (
        <PaperProvider theme={theme}>
            <FlatList
                keyExtractor={item => String(item.id)}
                data={allFriends}
                renderItem={showProfiles}
            />
        </PaperProvider >
    );
};

const styles = StyleSheet.create({

});

export default FriendsListScreen;