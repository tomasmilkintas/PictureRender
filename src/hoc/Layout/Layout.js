import React, { Component } from "react";

import Aux from "../Aux/Aux";
import styles from "./Layout.module.css";
import PictureRender from "../../containers/PictureRender/PictureRender";

class Layout extends Component {
    render() {
        return (
            <Aux>
                <div className={styles.Layout}>
                    <p>Home</p>
                    <p>PictureRender</p>
                    <p>Results</p>
                </div>
                <PictureRender />
            </Aux>
        );
    }
}

export default Layout;
