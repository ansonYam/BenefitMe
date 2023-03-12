import React, { useState, useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';
import styles from '../styles';

export default function BenefitsScreen({ route }) {
    const { company } = route.params;
    const [benefits, setBenefits] = useState([]);

    useEffect(() => {
        const fetchBenefits = async () => {
            try {
                const companyId = company["_id"];
                const res = await fetch(`http://localhost:3001/companies/${companyId}/benefits`);
                const json = await res.json();
                setBenefits(json);
            } catch (err) {
                console.error(err);
            }
        };
        fetchBenefits();
    }, [route.params.company]);

    return (
        <View style={styles.container}>
            <Text><h1>{company["Company Name"]}</h1></Text>
            <FlatList
                data={benefits}
                renderItem={({ item }) => <Text>{item}</Text>}
                keyExtractor={(item) => item}
            />
        </View>
    )
}