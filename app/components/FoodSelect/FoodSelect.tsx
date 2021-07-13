import {Animated, Pressable, ScrollView, StyleSheet, View} from "react-native";
import React, {useRef, useState} from "react";
import {Category} from "../../models/category.interface";
import AppText from "../AppText/AppText";
import FoodCard from "../FoodCard/FoodSelect";
import SizedBox from "../SizedBox/SizedBox";


export default function FoodSelect({categories}: { categories: Category[] }) {

    if (!categories?.length) {
        return <AppText>No Results</AppText>
    }

    // TODO s :
    //  - extract Tabs to a component

    const scrollX = useRef(new Animated.Value(0)).current;

    const [activeTab, setActive] = useState(categories[0].name);

    const activeCategory = categories.find(c => c.name == activeTab) || categories[0];

    const flatListRef = useRef<Animated.FlatList>();

    return (
        <View style={styles.container}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.tabsContainer}>
                    {
                        categories.map(category => {
                            return (
                                <Pressable onPress={() => {

                                    setActive(category.name);

                                    // @ts-ignore
                                    flatListRef?.current.scrollToOffset({animated: true, offset: 0});
                                }}>
                                    <TabTitle title={category.name} active={category.name == activeTab}/>
                                </Pressable>
                            )
                        })
                    }
                </View>
            </ScrollView>

            <SizedBox height={10}/>

            <Animated.FlatList
                // @ts-ignore
                ref={flatListRef}

                initialScrollIndex={2}

                contentContainerStyle={styles.tabsContainer}
                horizontal={true}

                onScroll={Animated.event(
                    [{nativeEvent: {contentOffset: {x: scrollX}}}],
                    {useNativeDriver: true}
                )}

                data={activeCategory.items}
                renderItem={({item}) => {
                    return (
                        <View style={{paddingRight: 34}}>
                            <FoodCard product={item}/>
                        </View>
                    )
                }}
            />

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
    container: {},
    tabsContainer: {
        flexDirection: "row",
        paddingHorizontal: 75,
    }
});