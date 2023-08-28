import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Blog } from '@shehan97105/blog-rn-mfs.blog.blog'; // Import the blog component
export type BlogConsumerProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};
 
export function BlogConsumer({ text }: BlogConsumerProps) {
    return (
      <View style={styles.container}>
        <Blog />
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


 