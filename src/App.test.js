import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import {findByTestAttr} from "./test/testUtils";

const defaultProps = {
  quote: {quote: ''}
};

const setup = (props={}) => {
  const setupProps = {...defaultProps, ...props};
  return shallow(<App {...setupProps} />)
};
describe("renders app and it's children components without errors", () => {
  let wrapper;
  beforeEach( () => {
    wrapper = setup();
  });

  test('renders App without errors', () => {
    const component = findByTestAttr(wrapper, 'component-app');
    expect(component.length).toBe(1);
  });

  test('renders Categories without errors', () => {
    const component = findByTestAttr(wrapper, 'component-categories');
    expect(component.length).toBe(1);
  });

  test('renders QuoteBox without errors', () => {
    const component = findByTestAttr(wrapper, 'component-quote-box');
    expect(component.length).toBe(1);
  });
});