import React from "react";
import styles from './DrawerSearch.module.css'
import SearchLeftIcon from '../../assets/searchIcon.png'
import SearchControlIcon from '../../assets/rightControls.png'

const DrawerSearch = () => {
    return (
        <div className={styles.container}>
            <div className={styles.searchWrapper}>
                <div className={styles.searchBox}>
                <div className={styles.searchIcon}>
                    <img src={SearchLeftIcon} />
                </div>
                <div className={styles.searchInput}>
                    <input type="text" placeholder="Search" />
                </div>
                <div className={styles.rightControls}>
                    <img src={SearchControlIcon} />
                </div>
                </div>
            </div>
        </div>
    )
}

export default DrawerSearch;
