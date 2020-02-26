import React, {useEffect, useState} from 'react';
import './App.css';
import QuoteBox from "./Components/QuoteBox";
import {keyframes} from "styled-components";
import {StyledDiv} from "./Components/StyledComp";
import Categories from "./Components/Categories";
import Credits from "./Components/Credits";

const randomColor = require('randomcolor');

function App() {
  const [color, setColor] = useState(randomColor());
  const [quote, setQuote] = useState('');
  const [category, setCategory] = useState('wow');

  useEffect(() => {
    let startingColor = randomColor();
    setColor({
      currentColor: startingColor,
      prevColor: startingColor
    });
    fetchWow();
  }, []);

  const fetchBreakingBad = () => {
    let url = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes';
    fetch(url)
      .then(res => res.json())
      .then(data => setQuote(data[0]));
  };

  const fetchWow = () => {
    let url = 'https://quote-garden.herokuapp.com/quotes/random';
    fetch(url)
      .then(res => res.json())
      .then(data => setQuote({
        quote: data.quoteText,
        author: data.quoteAuthor
      }));
  };

  const setNewQuote = () => {
    setColor(prevState => ({
      currentColor: randomColor(),
      prevColor: prevState.currentColor
    }));
    category === 'wow' ? fetchWow() : fetchBreakingBad();
  };

  const handleCategory = ( e, name ) => {
    e.preventDefault();
    setCategory(name);
    name === 'wow' ? fetchWow() : fetchBreakingBad();
  };

  const keyFrame = keyframes`
  0% {
    background-color: ${color.prevColor};
  }
  100% {
    background-color: ${color.currentColor};
  }
  `;

  const borderKeyFrame = keyframes`
  0% {
    border-bottom-color: transparent;
  }
  100% {
    border-bottom-color: ${color.currentColor};
  }
  `;

  return (
    quote &&
      <StyledDiv
        theme={{color, keyFrame}}
        className="App"
      >
        <Categories
          color={color}
          category={category}
          borderKeyFrame={borderKeyFrame}
          handleCategory={handleCategory}
        />
        <QuoteBox
          color={color}
          quote={quote}
          keyFrame={keyFrame}
          setNewQuote={setNewQuote}
        />
        <Credits />
      </StyledDiv>
  );
}

export default App
