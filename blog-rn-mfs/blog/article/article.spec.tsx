import React from 'react';
import { render } from '@testing-library/react-native';
import { BasicArticle } from './article.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicArticle />);
  const rendered = getByText('hello from Article');
  expect(rendered).toBeTruthy();
});
