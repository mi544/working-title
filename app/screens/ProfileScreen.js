import React, { useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import {
    Provider as PaperProvider,
    Button,
    ActivityIndicator,
    Colors
} from "react-native-paper";

import { fetchProfile } from "../store/actions/fetchProfile";

import theme from "../constants/theme";
import ProfileMainCard from "../components/Profile/ProfileMainCard";
import ProfileCard from "../components/Profile/ProfileCard";
import Loading from "../components/Loading";

const ProfileScreen = props => {
    const userId = props.navigation.getParam("userId");
    const profile = useSelector(state =>
        state.friends.friends.find(profile => profile.id === userId)
    );

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

                    <View style={styles.addButtonContainer}>
                        <Button
                            mode="contained"
                            icon="account-plus"
                            contentStyle={styles.addButton}
                            theme={{ ...theme }}
                            onPress={() => {}}
                        >
                            Add to friends
                        </Button>
                    </View>
                </View>
            </ScrollView>
        </PaperProvider>
    );
};

ProfileScreen.navigationOptions = navigationData => {
    const userName = navigationData.navigation.getParam("userName");
    return { headerTitle: `${userName}'s Profile` };
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

export default ProfileScreen;
