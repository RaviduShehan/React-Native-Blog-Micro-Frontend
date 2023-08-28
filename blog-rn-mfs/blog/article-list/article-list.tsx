
import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Article } from '@shehan97105/blog-rn-mfs.blog.article';


const articles = [
  { id: 1, title: 'Introduction to Micro Frontends', description: 'Sample Description 01' },
  { id: 2, title: 'Building Scalable Apps with Micro Frontends', description: 'Sample Description 02' },
  { id: 3, title: 'Building Scalable Apps with React Native', description: 'Sample Description 03' },
  { id: 4, title: 'Introduction to React Native', description: 'Sample Description 04' },
  { id: 5, title: 'Building Scalable Apps with React', description: 'Sample Description 05' },
  // Add more articles here
];

export function ArticleList({ onArticlePress }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Article
            id={item.id}
            title={item.title}
            description={item.description}
            onPress={() => onArticlePress(item)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
