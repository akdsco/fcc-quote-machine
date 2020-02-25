import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTumblr, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faQuoteLeft} from '@fortawesome/free-solid-svg-icons';
import {keyframes} from "styled-components";
import {SocialBtn, NewQuoteBtn, Quote, Author } from "./StyledComp";

function Box(props) {

  const htmlReadyText = (data) => {
    if(data) {
      return data.replace(/\s/g, "%20");
    }
    return '';
  };

  const textKeyFrame = keyframes`
  0% {
    color: ${props.color.prevColor};
  }
  100% {
    color: ${props.color.currentColor};
  }
  `;

  const bgTheme = {
    color: props.color.currentColor,
    keyFrame: props.keyFrame
  };

  const textTheme = {
    color: props.color.currentColor,
    keyFrame: textKeyFrame
  };

  const {author, quote} = props.quote;

  return(
    <div>
      <div id='quote-box'>
        <Quote id='text' theme={textTheme}><FontAwesomeIcon icon={faQuoteLeft} size='sm' className='quote-icon' />{quote}</Quote>
        <Author id='author' theme={textTheme}> - {author}</Author>

        <div className='control-panel flex'>
          <div className='flex'>
            <SocialBtn
              theme={bgTheme}
              href={`https://twitter.com/intent/tweet?hashtags=quotes
              &related=freecodecamp
              &text="${htmlReadyText(quote)}"%20${htmlReadyText(author)}`}
              className='social-share-btn'
              id='tweet-quote'>
              <FontAwesomeIcon size='1x' className='social-icon' icon={faTwitter} />
            </SocialBtn>
            <SocialBtn
              theme={bgTheme}
              href={`https://www.tumblr.com/widgets/share/tool?posttype=quote
              &tags=quotes,freecodecamp
              &caption=${htmlReadyText(author)}
              &content=${htmlReadyText(quote)}
              &canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`}
              className='social-share-btn'
              id='tumbler-quote'
            >
              <FontAwesomeIcon size='1x' className='social-icon' icon={faTumblr} />
            </SocialBtn>
          </div>
          <NewQuoteBtn
            theme={bgTheme}
            onClick={props.bgColorChange}
            id='new-quote'
            className='new-quote-btn'
          >
            Next quote
          </NewQuoteBtn>
        </div>
      </div>
    </div>
  )
}

export default Box