import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import styles from '../styles';

export default function CompareScreen({ route }) {
    const { company, benefits, companyToCompare } = route.params;
    const [otherCompanyBenefits, setOtherCompanyBenefits] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOtherCompanyBenefits = async () => {
            try {
                const companyId = companyToCompare["_id"];
                const res = await fetch(`http://localhost:3001/companies/${companyId}/benefits`);
                const json = await res.json();
                setOtherCompanyBenefits(json);
                setLoading(false);
            } catch (err) {
                console.error(err);
            }
        };

        fetchOtherCompanyBenefits();
    }, []);

    if (loading) {
        return <Text>Loading...</Text>;
    }

    return (
        <View style={[styles.container, localStyles.container]}>
            <View style={localStyles.companyContainer}>
                <Text><h2>{company["Company Name"]}</h2></Text>
                <FlatList
                    data={benefits}
                    renderItem={({ item }) => <Text>{item}</Text>}
                    keyExtractor={(item) => item}
                />
            </View>
            <View style={localStyles.companyContainer}>
                <Text><h2>{companyToCompare["Company Name"]}</h2></Text>
                <FlatList
                    data={otherCompanyBenefits}
                    renderItem={({ item }) => <Text>{item}</Text>}
                    keyExtractor={(item) => item}
                />
            </View>
        </View>
    );
};

const localStyles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
    },
    companyContainer: {
        flex: 1,
        marginRight: 20,
        alignItems: 'center',
        justifyContent: 'center',        
    }
})