import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Provider as PaperProvider, Button, TouchableRipple, ActivityIndicator, Colors } from "react-native-paper";

import API from "../utils/API";

import theme from "../constants/theme";

import ProfileMainCard from "../components/Profile/ProfileMainCard";
import ProfileCard from "../components/Profile/ProfileCard";

const ProfileScreen = props => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [profileInfo, setProfileInfo] = useState();
    console.log(props)

    useEffect(() => {
        loadProfileInfo();
    }, [])

    const loadProfileInfo = () => {
        console.log("param", props.navigation.getParam("userId"));
        API.findUserById(props.navigation.getParam("userId"))
            .then(({ data }) => {
                setProfileInfo(data);
                setIsLoaded(true);
                console.log(profileInfo);
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
            <ScrollView>
                <View style={styles.screen}>
                    <ProfileMainCard
                        name={profileInfo.name}
                        status={profileInfo.status}
                        image={profileInfo.profilePicture}
                    />


                    <View style={styles.profileCardsContainer}>
                        <ProfileCard
                            isTouchable
                            width="48%"
                            height="100%"
                            title={profileInfo.friends}
                            subheading="friends"
                        />

                        <ProfileCard
                            isTouchable
                            width="24%"
                            height="100%"
                            title={profileInfo.posts}
                            subheading="posts"
                        />

                        <ProfileCard
                            width="24%"
                            height="100%"
                            title={profileInfo.likes}
                            subheading="likes"
                        />

                    </View>

                    <View style={styles.profileCardsContainer}>
                        <ProfileCard
                            isTouchable
                            width="24%"
                            height="100%"
                            title={profileInfo.comments}
                            subheading="comments"
                        />

                        <ProfileCard
                            width="72%"
                            height="100%"
                            title={profileInfo.specialMember ? "IS" : "NOT"}
                            subheading="a special member"
                        />

                    </View>

                    <View style={styles.addButtonContainer}>
                        <Button
                            mode="contained"
                            icon="account-plus"
                            contentStyle={styles.addButton}
                            theme={{ ...theme }}
                            onPress={() => { }}
                        >
                            Add to friends
                        </Button>
                    </View>

                </View>
            </ScrollView>
        </PaperProvider >
    );
};

ProfileScreen.navigationOptions = {
    headerTitle: "Name Name"
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