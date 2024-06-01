import React from "react";
import { Link } from 'react-router-dom';
import styles from "./Drawer.module.css";
import Home from '../../assets/home@3x.png'
import Library from '../../assets/library@3x.png'
import Annales from '../../assets/annales@3x.png'
import Playlists from '../../assets/playlists@3x.png'
import Planner from '../../assets/planner@3x.png'
import History from '../../assets/history@3x.png'
import Logo from '../logo/Logo'
import { colors } from "../../theme/globals";
import { Divider } from 'antd'
import { Button } from "antd";
import Search from '../../assets/searchDrawer.png'
import Label from '../common/label/Label'
import Neurology from '../../assets/neurology.png'
import CloseIcon from '../../assets/close.png'
import Heart from '../../assets/heart@3x.png'
import Info from '../../assets/info.png'
import DrawerSearch from '../search/DrawerSearch';

const Drawer = () => {

    const labels = [
        {
            leftIcon: Neurology,
            leftLabel: false,
            title: 'Neurologie',
            rightIcon: CloseIcon
        },
        {
            leftIcon: false,
            leftLabel: 96,
            title: 'Myasthénie',
            rightIcon: CloseIcon
        },
        {
            leftIcon: false,
            leftLabel: 268,
            title: 'Hypercalcémie',
            rightIcon: CloseIcon
        },
        {
            leftIcon: Heart,
            leftLabel: false,
            title: 'Cardiologie',
            rightIcon: CloseIcon
        },
    ]

    const linkts = [
        {
            to: '/home',
            title: 'Home',
            icon: Home
        },
        {
            to: '/library',
            title: 'Library',
            icon: Library
        },
        {
            to: '/annales',
            title: 'Annales',
            icon: Annales
        },
        {
            to: '/playlists',
            title: 'Playlists',
            icon: Playlists
        },
        {
            to: '/planner',
            title: 'Planner',
            icon: Planner
        },
        {
            to: '/history',
            title: 'History',
            icon: History
        },
        {
            to: '/help',
            title: 'Help',
            icon: Info
        },
        {
            to: '/logout',
            title: 'Log out',
            icon: Info
        },

    ]
    return (
        <div className={styles.container}>
            <Logo />
            {/* <DrawerSearch /> */}
            <img src={Search} />
            
            <div style={{ marginTop: 25 }}>
                {
                    linkts.slice(0, 3).map(({ to, icon, title }) => {
                        return (
                            <Link className={styles.link} to={to}>
                                <div style={{ display: 'flex', flexDirection: 'row', height: 44 }}>
                                    <img width={20} height={20} src={icon} />
                                    <div style={{ marginLeft: 12, color: '#FFFFFFB2' }}>{title}</div>
                                </div>
                            </Link>
                        )
                    })
                }
                <Divider />
                {
                    linkts.slice(3, 6).map(({ to, icon, title }) => {
                        return (
                            <Link className={styles.link} to={to}>
                                <div style={{ display: 'flex', flexDirection: 'row', height: 44 }}>
                                    <img width={20} height={20} src={icon} />
                                    <div style={{ marginLeft: 12, color: '#FFFFFFB2' }}>{title}</div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
            <div className={styles.separator} />
            <Button style={{ backgroundColor: colors.bg2 }} type="primary" shape="round" size='large'>
                Custom test
            </Button>
            <div style={{ marginTop: 25 }}>
                <div style={{ color: colors.gray }}>FAVORITES</div>
                <div style={{ padding: 4 }}>
                    <div style={{ background: colors.dark, padding: 18 }}>
                        {
                            labels.map(({ leftIcon, leftLabel, title, rightIcon }) => <Label leftIcon={leftIcon} leftLabel={leftLabel} title={title} rightIcon={rightIcon} />)
                        }
                    </div>
                </div>
            </div>
            <div style={{ marginTop: 10 }}>
                {
                    linkts.slice(6, 8).map(({ to, icon, title }) => {
                        return (
                            <Link className={styles.link} to={to}>
                                <div style={{ display: 'flex', flexDirection: 'row', height: 44 }}>
                                    <img width={20} height={20} src={icon} />
                                    <div style={{ marginLeft: 12, color: '#FFFFFFB2' }}>{title}</div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Drawer;
