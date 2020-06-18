import React, { Component } from "react";

import styles from "./PictureRender.module.css";
import Aux from "../../hoc/Aux/Aux";
import Button from "../../components/UI/Button/Button";
import Picture from "../../components/Picture/Picture";
// import CanvasDrawing from "../../components/Picture/CanvasDrawing/CanvasDrawing";

class PictureRender extends Component {
    render() {
        return (
            <Aux>
                <div className={styles.PictureRender}>
                    <h2>Your Picture Rendering Masterpiece</h2>
                    <Picture />
                </div>
                {/* <div>
                    <p>View Results:</p>
                    <Button btnType="Danger">BACK TO HOMEPAGE</Button>
                    <Button btnType="Success">CONTINUE</Button>
                </div> */}
            </Aux>
        );
    }
}

export default PictureRender;
