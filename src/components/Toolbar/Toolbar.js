import React from "react";

import styles from "./Toolbar.module.css";

const toolbar = () => (
    <header className={styles.Toolbar}>
        <h1 className={styles.DesktopOnly}>Your Picture Rendering Masterpiece</h1>
    </header>
);

export default toolbar;
