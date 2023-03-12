import React, { useState, useEffect } from 'react';
import { SearchBar } from 'react-native-elements';
import { FlatList, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import styles from '../styles';

export default function CompaniesScreen({ route, navigation }) {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState('');
    const [companies, setCompanies] = useState([]);

    const fetchData = async () => {
        const res = await fetch('http://localhost:3001/companies');
        const json = await res.json();
        setData(json);
        setCompanies(json.slice());
    };

    useEffect(() => {
        fetchData();
    }, []);

    const updateQuery = (input) => {
        setCompanies(data.slice());
        setQuery(input);
        console.log(query);
    }

    const filterNames = (company) => {
        // 1. query in all lowercase
        let search = query.toLowerCase().replace(/ /g, "_");
        // 2. does the name in our list start with the query's first letter
        if (company["Company Name"].toLowerCase().startsWith(search)) {
            // 3. if yes, return
            return company["Company Name"];
        } else {
            // 4. if no, don't render
            companies.splice(companies.indexOf(company), 1);
            return null;
        }
    }

    return (
        <View style={localStyles.container}>
            <SearchBar
                onChangeText={updateQuery}
                value={query}
                placeholder="Type Here..." />

            <FlatList data={companies} keyExtractor={(i) => i._id.toString()}
                extraData={query}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Benefits', { company: item })}>
                        <Text style={localStyles.flatList}>{filterNames(item)}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const localStyles = StyleSheet.create({
    container: {
        backgroundColor: '#ffc300',
    },
    flatList: {
        paddingLeft: 15,
        marginTop: 15,
        paddingBottom: 15,
        fontSize: 20,
        borderBottomColor: '#26a69a',
        borderBottomWidth: 1
    }
});
