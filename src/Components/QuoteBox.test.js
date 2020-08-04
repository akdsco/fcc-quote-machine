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

test('renders twitter share button', () => {
  const component = wrapper.find('#tweet-quote');
  expect(component.length).toBe(1);
});

test('renders tumblr share button', () => {
  const component = wrapper.find('#tumbler-quote');
  expect(component.length).toBe(1);
});

test("htmlLink() replaces all spaces to html sign", () => {
  const component = wrapper.find('#tumbler-quote');
});

test("renders new quote button", () => {
  const component =  wrapper.find('#new-quote');
  expect(component.length).toBe(1);    const wrapper = setup();

});

describe('testing functionality of new quote btn', () => {
  const mockSetCurrentGuess = jest.fn();
  let wrapper;

  beforeEach( () => {
    mockSetCurrentGuess.mockClear();
    React.useState = jest.fn( () => ['', mockSetCurrentGuess]);
    wrapper = setup();
  });

  test('changes to new quote after click', () => {
    const newQuoteBtn = wrapper.find('#new-quote');

    const mockEvent = {
      quote: "Test quote",
      author: 'Test'
    };
    newQuoteBtn.simulate('click');

    expect(mockSetCurrentGuess).toHaveBeenCalledWith({quote: 'Test quote', author: 'Tes'});
  });
});