import React, { useState, useEffect } from 'react';
import { FlatList, Picker, Text, StyleSheet, View } from 'react-native';
import styles from '../styles';

export default function BenefitsScreen({ route, navigation }) {
    const { company } = route.params;
    const [benefits, setBenefits] = useState([]);
    const [companies, setCompanies] = useState([]);
    const [selectedCompany, setSelectedCompany] = useState('');

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

        const fetchCompanies = async () => {
            try {
                const res = await fetch('http://localhost:3001/companies');
                const companies = await res.json();
                // don't compare to the currently-selected company
                const companiesToCompare = companies.filter((c) => c._id !== company._id);
                setCompanies(companiesToCompare);
            } catch (err) {
                console.error(err);
            }
        };

        fetchBenefits();
        fetchCompanies();
    }, [route.params.company]);

    const handleCompare = (companyToCompare) => {
        console.log(company, companyToCompare);
        navigation.navigate('Compare', { company, benefits, companyToCompare });
    }

    return (
        <View style={styles.container}>
            <Text><h1>{company["Company Name"]}</h1></Text>
            <FlatList
                data={benefits}
                renderItem={({ item }) => <Text>{item}</Text>}
                keyExtractor={(item) => item}
            />
            <View style={localStyles.pickerContainer}>
            <Picker
                selectedValue={selectedCompany}
                onValueChange={(itemValue, itemIndex) => {
                    setSelectedCompany(itemValue);
                    // console.log(itemValue);
                    // why are we one-indexed?
                    const selectedItem = companies[itemIndex - 1];
                    handleCompare(selectedItem);
                }}
            >
                <Picker.Item label="Select a company to compare" value="" />
                {companies.map((item) => (
                    <Picker.Item key={item["_id"]} label={item["Company Name"]} value={item} />
                ))}
            </Picker>
            </View>
            {/*
            <FlatList
                data={companies}
                keyExtractor={(i) => i._id.toString()}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item["Company Name"]}</Text>
                        <TouchableOpacity onPress={() => handleCompare(item)}>
                            <Text>Compare</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
            */}
        </View>
    )
}

const localStyles = StyleSheet.create({
    pickerContainer: {
        marginBottom: 40,
    }
})