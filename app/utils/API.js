import axios from "axios";
import { SERVER } from "@env";

export default {
    findAllUsers: () => axios.get(`${SERVER}/api/users`),
    findUserById: id => axios.get(`${SERVER}/api/users/${id}`)
};
