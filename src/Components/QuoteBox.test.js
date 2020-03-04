import React from "react";
import QuoteBox from "./QuoteBox";
import {shallow} from 'enzyme'

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
let wrapper;
beforeEach(() => {
  wrapper = setup();
});

test('QuoteBox renders without errors', () => {
  const component = wrapper.find('#quote-box');
  expect(component.length).toBe(1);
});

test('renders quote without errors', () => {
  const component = wrapper.find('#text');
  expect(component.length).toBe(1);
});

test('renders FontAwesomeIcon and non-empty quote', () => {
  wrapper = setup({quote: {quote: 'test quote'}});
  const component = wrapper.find('#text');
  expect(component.text().length).toBe(29);
});

test("renders 'unknown' if authors prop is empty", () => {
  const component = wrapper.find('#author');
  expect(component.text()).toBe(' - unknown');
});

test("renders authors name if authors prop is not empty", () => {
  wrapper = setup({quote: {author: 'Mike'}});
  const component = wrapper.find('#author');
  expect(component.text()).toBe(' - Mike');
});