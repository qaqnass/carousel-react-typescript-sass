import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Carousel } from '../components/carousel/Carousel';

let container: any;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('Check if nex-icon action is working fine', () => {
  act(() => {
    ReactDOM.render(<Carousel windowWidth={window.innerWidth} />, container);
  });

  const next = container.querySelector('img[data-set="icon-next"]');

  act(() => {
    next.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
});


it('Check if prev-icon action is working fine', () => {
  act(() => {
    ReactDOM.render(<Carousel windowWidth={window.innerWidth} />, container);
  });

  const next = container.querySelector('img[data-set="icon-next"]');
// This action is to change carousel state 
  act(() => {
    next.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });

  const prev = container.querySelector('img[data-set="icon-prev"]');
  act(() => {
    prev.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
});