import React from 'react';
import {StyleSheet, View} from 'react-native';
import AppText from "../components/AppText/AppText";
import {H_PADDING} from "../styles";
import AppTextInput from "../components/AppTextInput/AppTextInput";
import FoodSelect from "../components/FoodSelect/FoodSelect";
import data from '../../fixtures/food.json';

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={{
                paddingHorizontal: H_PADDING
            }}>

                <View style={{
                    paddingBottom: 12
                }}>
                    <AppText bold={true} size={'XL'}>
                        Delicious
                    </AppText>
                    <AppText bold={true} size={'XL'}>
                        food for you
                    </AppText>
                </View>

                <View style={{
                    paddingBottom: 20
                }}>
                    <AppTextInput/>
                </View>
            </View>


            <FoodSelect categories={data}/>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {},
});
