import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTumblr, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faQuoteLeft} from '@fortawesome/free-solid-svg-icons';
import styled, {keyframes} from "styled-components";
import {StyledSocialBtn} from "./StyledComponents";

function Box(props) {

  // const StyledSocialBtn = styled.a`
  //   color: ${props.color.currentColor};
  //   animation: ${props.keyFrame} 2s forwards;
  // `;

  const StyledButton = styled.button`
    background-color: ${props.color.currentColor};
    animation: ${props.keyFrame} 2s forwards;
  `;

  const textKeyFrame = keyframes`
  0% {
    color: ${props.color.prevColor};
  }
  100% {
    color: ${props.color.currentColor};
  }
  `;

  const StyledQuote = styled.h1`
    color: ${props.color};
    animation: ${textKeyFrame} 2s forwards;
  `;

  const StyledAuthor = styled.p`
    color: ${props.color};
    animation: ${textKeyFrame} 2s forwards;
  `;

  const htmlReadyText = (data) => {
    if(data) {
      return data.replace(/\s/g, "%20");
    }
    return '';
  };

  const {author, quote} = props.quote;

  return(
    <div>
      <div id='quote-box'>
        <StyledQuote id='text'><FontAwesomeIcon icon={faQuoteLeft} size='sm' className='quote-icon' />{quote}</StyledQuote>
        <StyledAuthor id='author'> - {author}</StyledAuthor>

        <div className='control-panel flex'>
          <div className='flex'>
            <StyledSocialBtn
              href={`https://twitter.com/intent/tweet?hashtags=quotes
              &related=freecodecamp
              &text="${htmlReadyText(quote)}"%20${htmlReadyText(author)}`}
              className='social-share-btn'
              id='tweet-quote'>
              <FontAwesomeIcon size='1x' className='social-icon' icon={faTwitter} />
            </StyledSocialBtn>
            <StyledSocialBtn
              href={`https://www.tumblr.com/widgets/share/tool?posttype=quote
              &tags=quotes,freecodecamp
              &caption=${htmlReadyText(author)}
              &content=${htmlReadyText(quote)}
              &canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`}
              className='social-share-btn'
              id='tumbler-quote'
            >
              <FontAwesomeIcon size='1x' className='social-icon' icon={faTumblr} />
            </StyledSocialBtn>
          </div>
          <StyledButton onClick={props.bgColorChange} id='new-quote' className='new-quote-btn'>Next quote</StyledButton>
        </div>
      </div>
    </div>
  )
}

export default Box