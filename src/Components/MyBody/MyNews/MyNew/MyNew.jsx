import React from 'react';
import classes from './MyNew.module.css'

const MyNew = (props) => {

  return (
    <div className={classes.item}>
      <div>
        {props.message}
      </div>
      <div>
        <span>like</span>
      </div>
    </div>
  );
}

export default MyNew;