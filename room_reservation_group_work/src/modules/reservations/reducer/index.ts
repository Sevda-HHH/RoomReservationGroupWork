import React from "react";
import { ACTION_TYPES } from "../../models/enumActions";
import { initialState } from "../../models/initalState";
import { IAction } from "../../models/types";

const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_RESERVATION:
      return state;
    default:
      return state;
  }
};

export default reducer;
