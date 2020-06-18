import axios from "axios";

const instance = axios.create({
    baseURL: "https://picturerender-2a833.firebaseio.com/",
});

export default instance;
