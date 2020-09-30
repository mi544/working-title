// import axios from "axios";
import { SERVER } from "@env";

export default {
    findAllFriends: () => fetch(`${SERVER}/api/users`),
    findUserById: id => fetch(`${SERVER}/api/users/${id}`)
};
