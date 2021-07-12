import {View} from "react-native";
import React from "react";

export default function SizedBox({height, width}: {
    height?: number;
    width?: number;
}) {
    return <View style={{height, width}}/>
}