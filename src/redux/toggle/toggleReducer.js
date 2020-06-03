const INITIAL_STATE = {
  toggle: false,
};

const toggleSidebar = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      return {
        ...state,
        toggle: !state.toggle,
      };

    default:
      return state;
  }
};

export default toggleSidebar;
