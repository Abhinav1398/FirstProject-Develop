import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './Header.scss';

const Header = ({app}) =>{
    console.log('headerrr');
    return(
        <div className={classNames('header','footer')}> Header {app} </div>
    )
}
export default Header;