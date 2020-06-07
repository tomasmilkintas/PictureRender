import React from "react";

import NavigationItems from "../NavigationItems/NavigationItems";
import styles from "./Toolbar.module.css";

const toolbar = (props) => (
    <header className={styles.Toolbar}>
        <nav className={styles.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;
