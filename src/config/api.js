import axios from "axios";

// set config defaults while creating instance
export const API = axios.create({
    baseURL: "https://mejikfoundation1589011157021.microgen.mejik.id/graphql",
});

// alter config after instance is set
export const setAuthToken = (token) => {
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

