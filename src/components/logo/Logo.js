import React from "react";
import LogoIcon from '../../assets/logo@3x.png'
import styles from './Logo.module.css'

const Logo = () => {
    return (
        <img src={LogoIcon} width={89} height={114} style={{ alignSelf: 'center' }} />
    )
}

export default Logo;
