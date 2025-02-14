import axios from "axios";

const authEndPoint = "https://accounts.spotify.com/authorize?";
const clientId = "1a9be68c278249ea846c4dfbb5686751";
const redirectUri = "https://berhythm-music-player.vercel.app/";
const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndPoint = `${authEndPoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

const apiClient = axios.create({
    baseURL: "https://api.spotify.com/v1",
});

export const setClientToken = (token) => {
    apiClient.interceptors.request.use(async function (config){
        config.headers.Authorization = "Bearer " + token;

        return config;
    })
}

    export default apiClient;
