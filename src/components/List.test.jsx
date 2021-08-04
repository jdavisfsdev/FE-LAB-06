import React from 'react';
import { render } from '@testing-library/react';
import List from './List';

describe('List component', () => {
  it('render list', () => {
    const { asFragment } = render(
      <List />
    );
    expect(asFragment()).toMatchSnapshot;
  });
});
