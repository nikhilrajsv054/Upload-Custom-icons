// iconActions.js
import { SET_SELECTED_ICON } from "./actionTypes";
import { SET_CUSTOM_ICONS } from "./actionTypes";

export const setSelectedIcon = (icon) => ({
  type: SET_SELECTED_ICON,
  payload: icon,
});

export const setCustomIcons = (icons) => ({
  type: SET_CUSTOM_ICONS,
  payload: icons,
});
