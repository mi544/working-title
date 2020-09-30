import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, FlatList, Text } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { fetchFriends } from "../store/actions/fetchFriends";

import theme from "../constants/theme";

import CustomHeaderButton from "../components/CustomHeaderButton";
import FriendCard from "../components/Friends/FriendCard";
import Loading from "../components/Loading";

const FriendsListScreen = props => {
    const dispatch = useDispatch();

    const loadAllFriends = useCallback(
        () => {
            dispatch(fetchFriends());
        },
        // TODO
        // should be re-created when logged in person's id changes
        [dispatch]
    );

    useEffect(() => {
        loadAllFriends();
    }, []);

    const isFetching = useSelector(state => state.friends.isFetching);
    const isError = useSelector(state => state.friends.error);
    const friends = useSelector(state => state.friends.friends);

    if (isFetching) {
        return <Loading />;
    }

    if (isError) {
        return <Text>Error</Text>;
    }

    const showProfiles = itemData => (
        <FriendCard
            name={itemData.item.name}
            image={itemData.item.profilePicture}
            onProfileClick={() =>
                props.navigation.navigate("Profile", {
                    userId: itemData.item.userId
                })
            }
        />
    );

    return (
        <PaperProvider theme={theme}>
            <FlatList
                keyExtractor={item => String(item.id)}
                data={friends}
                renderItem={showProfiles}
            />
        </PaperProvider>
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

const styles = StyleSheet.create({});

export default FriendsListScreen;
