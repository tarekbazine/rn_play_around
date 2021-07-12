import {Text} from "react-native";
import React from "react";

const TEXT_SIZE = {
    'XL': 34,
    'L': 22,
    'M': 17,
    'S': 15
}

export interface AppTextProps {
    size?: 'XL' | 'L' | 'M' | 'S';
    bold?: boolean;
    children?: any;
}

export default function AppText(props: AppTextProps) {

    // todo fontFamily "SF Pro Rounded"

    const fontSize = TEXT_SIZE[props.size || 'M'];
    const fontWeight = props.bold ? 'bold' : 'normal';


    return <Text style={{
        fontSize,
        fontWeight
    }}>{props.children}</Text>;
}