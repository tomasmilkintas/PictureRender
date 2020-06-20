import React, { Component } from "react";

import styles from "./PictureRender.module.css";
import Aux from "../../hoc/Aux/Aux";
import Picture from "../../components/Picture/Picture";

class PictureRender extends Component {
    render() {
        return (
            <Aux>
                <div className={styles.PictureRender}>
                    <Picture />
                </div>
            </Aux>
        );
    }
}

export default PictureRender;
