import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from '../../Styles';

export default function LabInstructor() {
  const teacher = ['Pongot, Jophiel', 'Alilin, Sofia Dara', 'Dela Pena, Prince', 'Yare, Jerilyn'];
  const [searchText, setSearchText] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = (text) => {
    setSearchText(text);
    const filteredSuggestions = teacher.filter((teachers) =>
      teachers.toLowerCase().includes(text.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  const renderSuggestion = (item) => (
    <TouchableOpacity onPress={() => handleSuggestionSelect(item)} style={styles.suggestionItem}>
      <Text>{item}</Text>
    </TouchableOpacity>
  );

  const handleSuggestionSelect = (item) => {
    setSearchText(item); // Set the selected suggestion as the input text
    setSuggestions([]); // Clear suggestions
  };

  const handleOutsideClick = () => {
    // Handle clicks outside of the input and suggestions by clearing suggestions.
    setSuggestions([]);
  };

  return (
    <TouchableWithoutFeedback onPress={handleOutsideClick}>
      <View>
        <View>
          <Text style={styles.firstFormLabel}>Lab Instructor</Text>
        </View>
        <View>
          <TextInput
            style={styles.firstFormInput}
            placeholder='Lab Instructor'
            value={searchText}
            onChangeText={handleSearch}
          />
        </View>
        {suggestions.map((item) => renderSuggestion(item))}
      </View>
    </TouchableWithoutFeedback>
  );
}
