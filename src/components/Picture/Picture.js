import React, { Component } from "react";

import styles from "./Picture.module.css";
import CanvasDrawing from "./CanvasDrawing/CanvasDrawing";

class Picture extends Component {
    resetHandler = () => {
        let image = document.querySelector("img");
        image.src = "";
    };

    render() {
        function handleFile(e) {
            const content = e.target.result;
            let image = document.querySelector("img");
            image.src = content;
            console.log(content);
        }

        function handleChangeFile(file) {
            let reader = new FileReader();
            reader.onloadend = handleFile;
            reader.readAsDataURL(file);
        }

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
                    <img src="" alt="" />
                    <input
                        type="file"
                        name="picture"
                        className={styles.FilePhoto}
                        onChange={(e) => handleChangeFile(e.target.files[0])}
                    />
                </div>
                <button onClick={this.resetHandler}>Not happy with your selection? Reset</button>
                <div>
                    <CanvasDrawing hideGrid hideInterface />
                </div>
            </div>
        );
    }
}

export default Picture;
