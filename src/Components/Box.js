import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTumblr, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faQuoteLeft} from '@fortawesome/free-solid-svg-icons';

function Box() {

  return(
    <div id='quote-box'>

      <h1 id='text'><FontAwesomeIcon icon={faQuoteLeft} size='sm' className='quote-icon' />Sample quote from someone enlightened</h1>
      <p id='author'> - Authors Name</p>

      <div className='control-panel flex'>
        <div className='flex'>
          <a href='http://link.com' className='social-share-btn' id='tweet-quote'><FontAwesomeIcon size='md' className='social-icon' icon={faTwitter} /></a>
          <a href='http://link.com' className='social-share-btn' id='tumbler-quote'><FontAwesomeIcon size='md' className='social-icon' icon={faTumblr} /></a>
        </div>
        <button id='new-quote' className='new-quote-btn'>New quote</button>
      </div>
    </div>
  )
}

export default Box