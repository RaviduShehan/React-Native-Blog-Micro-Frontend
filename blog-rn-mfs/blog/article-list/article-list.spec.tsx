import React from 'react';
import { render } from '@testing-library/react-native';
import { BasicArticleList } from './article-list.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicArticleList />);
  const rendered = getByText('hello from ArticleList');
  expect(rendered).toBeTruthy();
});
