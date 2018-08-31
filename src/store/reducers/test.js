const testInitialState = {
  isTest: true
};

const test = (state = testInitialState, action) => {
  switch (action.type) {
    case "NO_TEST":
      return { ...state, isTest: false };

    default:
      return { ...state };
  }
};

export default test;
