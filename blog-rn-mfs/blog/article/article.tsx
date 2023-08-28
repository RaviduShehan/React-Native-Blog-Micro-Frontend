import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export function Article({ id, title, description, onPress, showFullContent }) {
  const content = showFullContent ? description : `${id}: ${title}`;

  return (
    <TouchableOpacity onPress={onPress} style={styles.articleContainer}>
      <Text style={styles.articleContent}>{content}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  articleContainer: {
    marginBottom: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  articleContent: {
    fontSize: 16,
    color: '#666',
  },
});
