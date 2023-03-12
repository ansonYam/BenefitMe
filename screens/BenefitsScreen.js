import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../styles';

export default function BenefitsScreen({ route }) {
    const { industry } = route.params;
    const [benefits, setBenefits] = useState([]);

    useEffect(() => {
        async function fetchBenefits() {
            try {
                const response = await fetch(`http://localhost:3001/api/benefits/${industry}`);
                const data = await response.json();
                setBenefits(data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchBenefits();
    }, [industry]);

    return (
        <View>
            <Text>{JSON.stringify(benefits)}</Text>
        </View>
    );
}