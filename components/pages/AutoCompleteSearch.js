import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';

const AutocompleteSearch = ({ data, onSuggestionClick }) => {
  const [inputValue, setInputValue] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const handleInputChange = (value) => {
    setInputValue(value);

    // Filter the data based on the input value
    const filtered = data.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleSuggestionClick = (item) => {
    setInputValue(item);
    setFilteredData([]);
    onSuggestionClick(item);
  };

  return (
    <View>
      <TextInput
        style={{ borderWidth: 1, padding: 10 }}
        value={inputValue}
        onChangeText={handleInputChange}
        placeholder="Search..."
      />
      <FlatList
        data={filteredData}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleSuggestionClick(item)}>
            <Text style={{ padding: 10 }}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

export default AutocompleteSearch;
