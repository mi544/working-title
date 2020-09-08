import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { MaterialCommunityIcons } from "@expo/vector-icons"

const CustomHeaderButton = props => {
    return (
        <HeaderButton
            {...props}
            IconComponent={MaterialCommunityIcons}
            iconSize={23}
        // color={}
        />
    );
};

export default CustomHeaderButton;