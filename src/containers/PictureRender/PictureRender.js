import React, { Component } from "react";

import styles from "./PictureRender.module.css";
import Aux from "../../hoc/Aux/Aux";
import Button from "../../components/UI/Button/Button";

class PictureRender extends Component {
    render() {
        return (
            <Aux>
                <h2 className={styles.PictureRender}>Picture Rendering Masterpiece</h2>
                <p>View Results:</p>
                <Button btnType="Success">Continue</Button>
                <Button btnType="Danger">Reset</Button>
            </Aux>
        );
    }
}

export default PictureRender;
