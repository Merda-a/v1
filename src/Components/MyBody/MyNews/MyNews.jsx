import React from 'react';
import classes from './MyNews.module.css'
import MyNew from './MyNew/MyNew';



const MyNews = (props) => {
  
  let newPostElement = React.createRef();

  let AllNews = props.allNews.map((n) => { return <MyNew message={n.newM} /> });

  let AddCallBack = () => {
    props.addNews();
  }
  let ChangeCallBack = () => {
    let Text = newPostElement.current.value;
    props.changeText(Text);
  }
  debugger;
  return (
    <div>
      <div className={classes.MyNews}>
        <div>My News</div>
        <textarea onChange={ChangeCallBack} ref={newPostElement} value={props.value}></textarea>
        <button onClick={AddCallBack}>Add News</button>
      </div>
      <div className={classes.News}>
        {AllNews}
      </div>
    </div>
  );
}

export default MyNews;