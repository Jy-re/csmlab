import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from '../../Styles';

export default function Course() {
  const courses = ['Physics', 'Chemistry', 'Biology', 'Biochemistry'];
  const [searchText, setSearchText] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = (text) => {
    setSearchText(text);
    const filteredSuggestions = courses.filter((course) =>
      course.toLowerCase().includes(text.toLowerCase())
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
    if (suggestions.length > 0) {
      setSuggestions([]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handleOutsideClick}>
      <View>
        <View>
          <Text style={styles.firstFormLabel}>Course</Text>
        </View>
        <View>
          <TextInput
            style={styles.firstFormInput}
            placeholder='Course'
            value={searchText}
            onChangeText={handleSearch}
          />
        </View>
        {suggestions.map((item) => renderSuggestion(item))}
      </View>
    </TouchableWithoutFeedback>
  );
}
