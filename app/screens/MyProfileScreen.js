import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { fetchProfile } from "../store/actions/fetchProfile";

import theme from "../constants/theme";
import ProfileMainCard from "../components/Profile/ProfileMainCard";
import ProfileCard from "../components/Profile/ProfileCard";
import Loading from "../components/Loading";
import CustomHeaderButton from "../components/CustomHeaderButton";

const MyProfileScreen = props => {
    const dispatch = useDispatch();

    const loadProfile = useCallback(
        () => {
            dispatch(fetchProfile());
        },
        // TODO
        // should be re-created when logged in person's id changes
        [dispatch]
    );

    useEffect(() => {
        loadProfile();
    }, []);

    const isFetching = useSelector(state => state.profile.isFetching);
    const isError = useSelector(state => state.profile.error);
    const profile = useSelector(state => state.profile.profile);

    if (isFetching || !profile) {
        return <Loading />;
    }

    if (isError) {
        return <Text>Error</Text>;
    }

    return (
        <PaperProvider theme={theme}>
            <ScrollView>
                <View style={styles.screen}>
                    <ProfileMainCard
                        name={profile.name}
                        status={profile.status}
                        image={profile.profilePicture}
                    />

                    <View style={styles.profileCardsContainer}>
                        <ProfileCard
                            isTouchable
                            width="40%"
                            height="100%"
                            title={profile.friends}
                            subheading="friends"
                        />

                        <ProfileCard
                            isTouchable
                            width="24%"
                            height="100%"
                            title={profile.posts}
                            subheading="posts"
                        />

                        <ProfileCard
                            width="32%"
                            height="100%"
                            title={profile.likes}
                            subheading="likes"
                        />
                    </View>

                    <View style={styles.profileCardsContainer}>
                        <ProfileCard
                            isTouchable
                            width="30%"
                            height="100%"
                            title={profile.comments}
                            subheading="comments"
                        />

                        <ProfileCard
                            width="66%"
                            height="100%"
                            title={profile.specialMember ? "IS" : "NOT"}
                            subheading="a special member"
                        />
                    </View>
                </View>
            </ScrollView>
        </PaperProvider>
    );
};

MyProfileScreen.navigationOptions = navData => {
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
        flex: 1
    },
    profileCardsContainer: {
        flexDirection: "row",
        marginTop: 20,
        justifyContent: "space-around",
        paddingHorizontal: 5,
        height: 125
    },
    addButtonContainer: {
        height: 60,
        width: 175,
        marginVertical: 10,
        marginHorizontal: 10,
        alignSelf: "flex-end",
        borderRadius: 20,
        overflow: "hidden"
    },
    addButton: {
        width: "100%",
        height: "100%"
    }
});

export default MyProfileScreen;
