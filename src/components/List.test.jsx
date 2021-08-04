import React from 'react';
import { render } from '@testing-library/react';
import List from './List';

describe('List component', () => {
  it('render list', () => { 
    const characters = [];
    const { asFragment } = render(
      <List characters={characters}/>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
