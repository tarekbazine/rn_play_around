import {Pressable, ScrollView, StyleSheet, View} from "react-native";
import React, {useState} from "react";
import {Category} from "../../models/category.interface";
import AppText from "../AppText/AppText";


export default function FoodSelect({categories}: { categories: Category[] }) {

    // TODO s :
    //  - extract Tabs to a component

    const [activeTab, setActive] = useState('');

    return (
        <View style={styles.container}>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.tabsContainer}>
                    {
                        categories.map(category => {
                            return (
                                <Pressable onPress={() => setActive(category.name)}>
                                    <TabTitle title={category.name} active={category.name == activeTab}/>
                                </Pressable>
                            )
                        })
                    }
                </View>
            </ScrollView>


        </View>
    );
}


function TabTitle({title, active}: { title: string, active: boolean }) {
    return (
        <View>
            <View style={{
                paddingVertical: 7,
                paddingHorizontal: 11,
            }}>
                <AppText color={active ? 'active' : 'secondary'}>{title}</AppText>
            </View>

            {
                active ? (
                    <View style={{
                        height: 3,
                        backgroundColor: '#FA4A0C',
                        borderRadius: 3
                    }}/>
                ) : null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignContent: 'center'
    },
    tabsContainer: {
        flexDirection: "row",
        paddingHorizontal: 75,
    }
});