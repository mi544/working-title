import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { HeaderButtons, Item } from "react-navigation-header-buttons"

import API from "../utils/API";

import theme from "../constants/theme";

import CustomHeaderButton from "../components/CustomHeaderButton";
import FriendCard from "../components/Friends/FriendCard";
import Loading from "../components/Loading";

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
            <Loading />
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

FriendsListScreen.navigationOptions = navData => {
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

});

export default FriendsListScreen;