import React, {useEffect, useState} from 'react';
import './App.css';
import Box from "./Components/Box";
import styled, {keyframes} from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHashtag} from "@fortawesome/free-solid-svg-icons";

const randomColor = require('randomcolor');

function App() {
  const [color, setColor] = useState(randomColor());
  const [quote, setQuote] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    let startingColor = randomColor();
    setColor({
      currentColor: startingColor,
      prevColor: startingColor
    });
    fetchQuote();
  }, []);

  const fetchQuote = () => {
    let url = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes';
    fetch(url)
      .then(res => res.json())
      .then(data => setQuote(data[0]));
  };

  const handleColorChange = () => {
    setColor(prevState => ({
      currentColor: randomColor(),
      prevColor: prevState.currentColor
    }));
    fetchQuote();
  };

  const handleCategory = ( e, name ) => {
    e.preventDefault();
    setCategory(name);
  };

  const keyFrame = keyframes`
  0% {
    background-color: ${color.prevColor};
  }
  100% {
    background-color: ${color.currentColor};
  }
  `;

  const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    color: ${color};
    animation: ${keyFrame} 2s forwards;
  `;

  const borderKeyFrame = keyframes`
  0% {
    border-bottom-color: ${color.prevColor};
  }
  100% {
    border-bottom-color: ${color.currentColor};
  }
  `;

  const StyledButton = styled.button`
    border-bottom: 3px solid ${color.currentColor};
    animation: ${borderKeyFrame} 2s forwards;
  `;

  return (
    quote &&
      <StyledDiv className="App">
        <div className='category-group'>
          {category === 'computer' ?
            <button className='category-button selected-button'>
              <FontAwesomeIcon size='sm' icon={faHashtag}/>
              computer speaks
            </button>
            :
            <StyledButton
              className={`category-button`}
              onClick={e => handleCategory(e, 'computer')}
            >
              <FontAwesomeIcon size='sm' icon={faHashtag}/>
              computer speaks
            </StyledButton>}
          {category === 'breakingBad' ?
            <button className='category-button selected-button'>
              <FontAwesomeIcon size='sm' icon={faHashtag}/>
              breaking bad
            </button>
            :
            <StyledButton
              className={`category-button`}
              onClick={e => handleCategory(e, 'breakingBad')}
            >
              <FontAwesomeIcon size='sm' icon={faHashtag} />
              breaking bad
            </StyledButton>
          }
        </div>
        <Box
          bgColorChange={handleColorChange}
          color={color}
          keyFrame={keyFrame}
          quote={quote}
        />
        <p className='credits'>by <a href='http://arkadiusz.tech'>akds.tech</a></p>
      </StyledDiv>
  );
}

export default App
