import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
//
// test('renders App component without crashing', () => {
//   shallow(<App />);
// });
//
// test('renders quote container with id #quote-box', () => {
//   const app = shallow(<App />);
//   const quoteBox = <QuoteBox id='quote-box' />;
//   expect(app.contains(quoteBox)).toEqual(true);
// });