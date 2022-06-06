const CAKE_ORDERED = "CAKE_ORDERED";

//*action creater- which returns an action
const orderCake = () => {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
};
