
import React from 'react'
import classes from './../Users.module.css'
import { NavLink } from 'react-router-dom';




export const Profile = (props) => {

    console.log(props);
    return (
        <div key={props.ProfilePage.id}>
            <div className={classes.container}></div>
            <div id="card-big" class={classes.card_big}>
                <div className={classes.card_big__main}>
                    <div className={classes.card_big__img}></div>
                    <div className={classes.card_big__descr}>
                        <div className={classes.card_big__descr_block}>{props.ProfilePage.militaryRank}</div>
                        <div className={classes.card_big__descr_block}>{props.ProfilePage.firstName}</div>
                        <div className={classes.card_big__descr_block}>{props.ProfilePage.middleName}</div>
                        <div className={classes.card_big__descr_block}>{props.ProfilePage.lastName}</div>
                        <div className={classes.card_big__descr_block}>{props.ProfilePage.position}</div>
                        <div className={classes.card_big__descr_block}>{props.ProfilePage.academicDegree}</div>
                        <div className={classes.card_big__descr_block}>{props.ProfilePage.isMarried}</div>
                    </div>
                </div>
                <div className={classes.card_big__info}>{props.ProfilePage.info}</div>
                <div className={classes.card_big__footer}>
                    <div className={classes.card_big__footer_img}></div>
                    <div className={classes.card_big__footer_other}>
                        <div className={classes.card_big__footer_subject}>АЛВС</div>
                        <div className={classes.card_big__footer_specialty}>САФ</div>
                    </div>
                    <div className={classes.card_big__footer_descr}>sfsdfsdfsdfdsfsdf</div>
                </div>
            </div>
            <NavLink to={'/Users'} id="bigCardClose" className={classes.card_big__close}>Вернуться</NavLink>
        </div>
        );

}