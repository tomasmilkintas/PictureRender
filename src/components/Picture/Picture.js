import React, { Component } from "react";
import axios from "../../axios-orders";

import styles from "./Picture.module.css";
import CanvasDrawing from "./CanvasDrawing/CanvasDrawing";
// import CanvasDraw from "react-canvas-draw";
import SuccessBaby from "../../assets/success-baby.jpg";

class Picture extends Component {
    state = {
        source: "",
    };

    updateHandle = (event) => {
        event.preventDefault();

        this.setState((prevState) => {
            return {
                source: prevState.source,
            };
        });
        console.log(this.state.source);
        const source = {
            source: this.state.source,
            // id: Math.random(),
        };
        axios
            .post("/source.json", source)
            .then((response) => {
                this.setState({ source: source });
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    resetHandler = () => {
        this.setState({ source: "" });
    };

    pictureHandler = (file) => {
        let reader = new FileReader();
        reader.onloadend = (e) => this.setState({ source: e.target.result });
        reader.readAsDataURL(file);
    };

    render() {
        return (
            <div className={styles.Picture}>
                <div className={styles.Uploader}>
                    <p>
                        Click the highlighted area to <span>select</span>
                    </p>{" "}
                    <p>OR </p>
                    <p>
                        {" "}
                        <span>Drag and drop</span> your images on it for a preview!
                    </p>
                    <img src={this.state.source} alt="" />
                    <input
                        type="file"
                        name="picture"
                        className={styles.FilePhoto}
                        onChange={(e) => this.pictureHandler(e.target.files[0])}
                    />
                </div>
                <button onClick={this.resetHandler.bind(this)}>
                    Not happy with your selection? Reset
                </button>
                <hr />
                <button onClick={this.updateHandle.bind(this)}>Store the data</button>
                <hr />
                <div>
                    <CanvasDrawing hideGrid hideInterface />
                </div>
            </div>
        );
    }
}

export default Picture;
