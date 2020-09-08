import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Provider as PaperProvider, Button } from "react-native-paper";

import theme from "../constants/theme";

import ProfileMainCard from "../components/Profile/ProfileMainCard";
import ProfileCard from "../components/Profile/ProfileCard";

const ProfileScreen = () => {
    return (
        <PaperProvider theme={theme}>
            <ScrollView>
                <View style={styles.screen}>
                    <ProfileMainCard
                        name="Name Name"
                        status="Isn't that just awesome?!"
                        image="https://picsum.photos/700"
                    />

                    <View style={styles.profileCardsContainer}>
                        <ProfileCard
                            width="48%"
                            height="100%"
                            title="21"
                            subheading="friends"
                        />
                        <ProfileCard
                            width="24%"
                            height="100%"
                            title="14"
                            subheading="posts"
                        />

                        <ProfileCard
                            width="24%"
                            height="100%"
                            title="242"
                            subheading="likes"
                        />

                    </View>

                    <View style={styles.profileCardsContainer}>
                        <ProfileCard
                            width="24%"
                            height="100%"
                            title="2"
                            subheading="friends"
                        />

                        <ProfileCard
                            width="72%"
                            height="100%"
                            title="2"
                            subheading="friends"
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