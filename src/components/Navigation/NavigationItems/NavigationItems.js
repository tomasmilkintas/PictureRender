import React from "react";

import styles from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = () => (
    <ul className={styles.NavigationItems}>
        <NavigationItem>Home</NavigationItem>
        <NavigationItem>Picture Render</NavigationItem>
        <NavigationItem>Results</NavigationItem>
    </ul>
);

export default navigationItems;
