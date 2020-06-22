import React, { Component } from "react";

import styles from "./Picture.module.css";
import CanvasDrawing from "./CanvasDrawing/CanvasDrawing";

class Picture extends Component {
    // updateHandle = (event) => {
    //     event.preventDefault();

    //     this.setState((prevState) => {
    //         return {
    //             source: prevState.source,
    //         };
    //     });
    //     console.log(this.state.source);
    //     const source = {
    //         source: this.state.source,
    //         // id: Math.random(),
    //     };
    //     axios
    //         .post("/source.json", source)
    //         .then((response) => {
    //             this.setState({ source: source });
    //             console.log(response);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // };

    // resetHandler = () => {
    //     this.setState({ source: "" });
    // };

    // pictureHandler = (file) => {
    //     let reader = new FileReader();
    //     reader.onloadend = (e) => this.setState({ source: e.target.result });
    //     reader.readAsDataURL(file);
    // };

    render() {
        return (
            <div className={styles.Picture}>
                <div className={styles.Uploader}>
                    <CanvasDrawing hideGrid hideInterface />
                </div>
            </div>
        );
    }
}

export default Picture;
