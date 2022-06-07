const redux = require("redux");

const initialState = {
  name: "sohel",
  address: {
    street: "123 Main St",
    city: "Boston",
    state: "MA",
  },
};

const STREET_UPDATED = "STREET_UPDATED";

const updateStreet = (street) => {
  return {
    type: STREET_UPDATED,
    payload: street,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
      return {
        ...state,
        address: {
          ...state.address,
          street: action.payload,
        },
      };
    default: {
      return state;
    }
  }
};

const store = redux.createStore(reducer);
console.log("Initital state", store.getState());

const unSubscribe = store.subscribe(() =>
  console.log("Updated state", store.getState())
);

store.dispatch(updateStreet("456 Main St"));

unSubscribe();
