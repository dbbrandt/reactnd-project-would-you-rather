import { getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "./logger";

const middleware = [ ...getDefaultMiddleware(), logger];

export default middleware;
