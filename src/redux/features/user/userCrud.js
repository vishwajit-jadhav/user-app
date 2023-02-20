import axios from "axios";
import { baseUrl } from "../../../config/baseUrl";

export const fetchUsersList = () => {
    return axios.get(`${baseUrl}users`);
};
