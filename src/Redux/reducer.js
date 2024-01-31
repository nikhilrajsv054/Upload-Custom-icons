// reducer.js
import { SET_SELECTED_ICON, SET_CUSTOM_ICONS } from "./actionTypes";

const initialState = {
  selectedIcon: null,
  customIcons: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_ICON:
      return {
        ...state,
        selectedIcon: action.payload,
      };
    case SET_CUSTOM_ICONS:
      return {
        ...state,
        customIcons: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
