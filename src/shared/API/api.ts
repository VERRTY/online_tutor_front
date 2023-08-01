import axios from "axios";
import {__API__} from "../config/APIconst/APIconst";


export const $api = axios.create({
    baseURL: __API__,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
});