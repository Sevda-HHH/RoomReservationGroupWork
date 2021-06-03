import React from "react";
import { applyMiddleware, createStore } from "redux";
import reducer from "../modules/reservations/reducer";
import { logger } from "redux-logger";

const store = createStore(reducer, applyMiddleware(logger));
