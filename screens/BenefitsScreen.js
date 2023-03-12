import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';

export default function BenefitsScreen({ route }) {
    const { company } = route.params;
    console.log("In the benefits screen with company ", company["Company Name"]);
    return (
        <View>
            <Text>Benefits Screen</Text>
        </View>
    )
}