import React from 'react';
import classes from './MyBody.module.css'
import MyNews from './MyNews/MyNews';
import MyNew from './MyNews/MyNew/MyNew';


const MyBody = (props) => {
   debugger;
   let AllNews = props.state.News.map((n) => { return <MyNew message={n.newM} /> });
   return (
      <div>
         Main Content
         <MyNews dispatch={props.dispatch} state={props.state} />
         <div className={classes.MyBodyClass}>
            {AllNews}
         </div>
      </div>
   );
}

export default MyBody;