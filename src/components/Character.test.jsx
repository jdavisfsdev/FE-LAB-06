import React from 'react';
import { render } from '@testing-library/react';
import Character from './Character';

describe('Character component', () => {
  it('render character', () => {
    const { asFragment } = render(
      <Character />
    );
    expect(asFragment()).toMatchSnapshot;
  });
});
