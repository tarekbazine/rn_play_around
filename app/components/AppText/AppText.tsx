import {Text} from "react-native";
import React from "react";

const TEXT_SIZE = {
    'XL': 34,
    'L': 22,
    'M': 17,
    'S': 15
}

const TEXT_COLOR = {
    'default': '#000',
    'secondary': '#9A9A9D',
    'active': '#FA4A0C',
}

export interface AppTextProps {
    size?: 'XL' | 'L' | 'M' | 'S';
    bold?: boolean;
    color?: 'active' | 'secondary';
    children?: any;
}

export default function AppText(props: AppTextProps) {

    // todo fontFamily "SF Pro Rounded"

    const fontSize = TEXT_SIZE[props.size || 'M'];
    const color = TEXT_COLOR[props.color || 'default'];
    const fontWeight = props.bold ? 'bold' : 'normal';


    return <Text style={{
        color,
        fontSize,
        fontWeight
    }}>{props.children}</Text>;
}