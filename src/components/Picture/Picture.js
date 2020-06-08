import React, { Component } from "react";

import styles from "./Picture.module.css";

class Picture extends Component {
    resetHandler = () => {
        let image = document.querySelector("img");
        image.src = "";
    };

    render() {
        function handleFile(e) {
            const content = e.target.result;
            console.log(content);
            let image = document.querySelector("img");
            image.src = content;
            // You can set content in state and show it in render.
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
            </div>
        );
    }
}

export default Picture;
