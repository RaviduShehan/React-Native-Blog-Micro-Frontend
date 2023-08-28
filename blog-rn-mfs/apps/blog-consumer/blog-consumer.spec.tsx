import React from 'react';
import { render } from '@testing-library/react-native';
import { BasicBlogConsumer } from './blog-consumer.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicBlogConsumer />);
  const rendered = getByText('hello from BlogConsumer');
  expect(rendered).toBeTruthy();
});
