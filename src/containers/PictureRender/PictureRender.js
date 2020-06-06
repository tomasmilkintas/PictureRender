import React, { Component } from "react";

import styles from "./PictureRender.module.css";
import Aux from "../../hoc/Aux/Aux";
import Button from "../../components/UI/Button/Button";
import Picture from "../../components/Picture/Picture";

class PictureRender extends Component {
    render() {
        return (
            <Aux>
                <div className={styles.PictureRender}>
                    <h2>Picture Rendering Masterpiece</h2>
                    <Picture />
                </div>
                <div>
                    <p>View Results:</p>
                    <Button btnType="Success">Continue</Button>
                    <Button btnType="Danger">Reset</Button>
                </div>
            </Aux>
        );
    }
}

export default PictureRender;
