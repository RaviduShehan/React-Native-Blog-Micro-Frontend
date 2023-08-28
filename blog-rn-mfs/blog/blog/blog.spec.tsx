import React from 'react';
import { render } from '@testing-library/react-native';
import { BasicBlog } from './blog.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicBlog />);
  const rendered = getByText('hello from Blog');
  expect(rendered).toBeTruthy();
});
