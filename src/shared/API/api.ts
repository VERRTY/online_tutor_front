import axios from "axios";
import {__API__} from "../config/APIconst/APIconst";


export const $api = axios.create({
    baseURL: __API__,
});