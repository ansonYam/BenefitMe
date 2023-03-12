import React, { useState } from 'react';
import { TextInput, FlatList, View, Text } from 'react-native';

const SearchBar = () => {
    const [searchText, setSearchText] = useState('');
    const [suggestions, setSuggestions] = useState('');

    const handleSearchTextChange = (text) => {
        setSearchText(text);

        fetch(`http://localhost:3001/api/suggestions?search=${text}`);
    }
}