import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHashtag} from "@fortawesome/free-solid-svg-icons";
import {CategoryBtn} from "./StyledComp";

function Categories(props) {
  const {category, color, borderKeyFrame, handleCategory} = props;

  return(
    <div className='category-group'>
      {category === 'wow' ?
        <button className='category-button selected-button'>
          <FontAwesomeIcon size='sm' icon={faHashtag}/>
          words of wisdom
        </button>
        :
        <CategoryBtn
          theme={{color, borderKeyFrame}}
          className={`category-button`}
          onClick={e => handleCategory(e, 'wow')}
        >
          <FontAwesomeIcon size='sm' icon={faHashtag}/>
          words of wisdom
        </CategoryBtn>}
      {category === 'breakingBad' ?
        <button className='category-button selected-button'>
          <FontAwesomeIcon size='sm' icon={faHashtag}/>
          breaking bad
        </button>
        :
        <CategoryBtn
          theme={{color, borderKeyFrame}}
          className={`category-button`}
          onClick={e => handleCategory(e, 'breakingBad')}
        >
          <FontAwesomeIcon size='sm' icon={faHashtag} />
          breaking bad
        </CategoryBtn>
      }
    </div>
  )
}

export default Categories