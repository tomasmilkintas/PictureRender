import React, { Component } from "react";

import styles from "./Picture.module.css";

class Picture extends Component {
    // state = {
    //     content: "",
    // };

    render() {
        function handleFile(e) {
            const content = e.target.result;
            console.log(content);
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
                    click here or drag here your images for preview and set picture data
                    <img src="" alt="" show={this.state.content} />
                    <input
                        type="file"
                        name="picture"
                        className={styles.FilePhoto}
                        onChange={(e) => handleChangeFile(e.target.files[0])}
                    />
                </div>
            </div>
        );
    }
}

export default Picture;
