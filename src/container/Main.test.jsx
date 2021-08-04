import React from 'react';
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Main from './Main';
import { BrowserRouter as Router } from 'react-router-dom';

const server = setupServer(
  rest.get(
    'https://hey-arnold-api.herokuapp.com/api/v1/characters/:count',
    (req, res, ctx) => {
      return res(
        ctx.json(
          [...Array(+req.params.count)].map((_, i) => ({
            _id: 'dfasfs',
            name: `name  number ${i}`,
            image: 'imageURL'
          }))
        )
      );
    })
);

describe('Main container', () => {

  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('displays list of character names', async () => {
    render(
      <Router>
        <Main />
      </Router>);

    screen.getByText('Loading.....');

    const ul = await screen.findByRole('list');
    expect(ul).not.toBeEmptyDOMElement;

  });
});
