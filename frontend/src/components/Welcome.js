import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap';

const Welcome = () => {
  return (
    <Jumbotron>
      <h1>Los Gallery</h1>
      <p>
        Los Gallery is a simple photo gallery App that uses Unsplash API. Enter
        any search term in the input field and try it.
      </p>
      <p>
        <Button variant="primary" href="//unsplash.com" target="_blank">
          Learn more
        </Button>
      </p>
    </Jumbotron>
  );
};

export default Welcome;
