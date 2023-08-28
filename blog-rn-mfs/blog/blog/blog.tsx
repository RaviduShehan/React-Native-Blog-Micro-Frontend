 import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { ArticleList } from '@shehan97105/blog-rn-mfs.blog.article-list';
import { Article } from '@shehan97105/blog-rn-mfs.blog.article';  

export function Blog() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleArticlePress = (articleId) => {
    setSelectedArticle(articleId);
  };

  return (
    <View style={styles.container}>
      {selectedArticle !== null ? (
        <Article
          id={selectedArticle.id}
          title={selectedArticle.title}
          description={selectedArticle.description}
          showFullContent
        />
      ) : (
        <ArticleList onArticlePress={handleArticlePress} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
