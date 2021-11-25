import React from 'react'
import './content.css';
import Articles from '../articles/articles'
import GetBtn from '../getStarted/getStarted';
function Content() {
  return (
     <div className="contentContainer">
         <Articles />
         <GetBtn />
     </div>
  );
}
export default Content;
