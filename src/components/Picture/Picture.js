import React, { Component } from "react";

import styles from "./Picture.module.css";
import CanvasDrawing from "./CanvasDrawing/CanvasDrawing";

class Picture extends Component {
    render() {
        return (
            <div className={styles.Picture}>
                <CanvasDrawing hideGrid hideInterface />
            </div>
        );
    }
}

export default Picture;
