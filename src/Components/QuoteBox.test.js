import React from "react";
import QuoteBox from "./QuoteBox";
import {shallow} from 'enzyme'
import {findByTestAttr} from "../test/testUtils";

const defaultProps = {
  color: {
    prevColor: '',
    currentColor: ''
  },
  quote: {
    quote: '',
    author: ''
  }
};

const setup = (props={}) => {
  const setupProps = {...defaultProps, ...props};
  return shallow(<QuoteBox {...setupProps} />)
};

test('component renders without errors', () => {
  const wrapper = setup();
  const component = wrapper.find('#quote-box');
  expect(component.length).toBe(1);
});