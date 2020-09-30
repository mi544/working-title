// import axios from "axios";
import { SERVER } from "@env";

export default {
    findAllFriends: () => fetch(`${SERVER}/api/friends`),
    findProfile: () => fetch(`${SERVER}/api/profile`),
    findUserById: id => fetch(`${SERVER}/api/users/${id}`)
};
