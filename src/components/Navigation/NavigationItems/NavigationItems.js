import React from "react";

import styles from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = () => (
    <ul className={styles.NavigationItems}>
        <NavigationItem>Your Picture Rendering Masterpiece</NavigationItem>
    </ul>
);

export default navigationItems;
