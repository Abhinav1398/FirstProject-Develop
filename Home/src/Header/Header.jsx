import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './Header.scss';

const Header = () =>{
    console.log('headerrr');
    return(
        <div className={classNames('header','footer')}> Header </div>
    )
}
export default Header;