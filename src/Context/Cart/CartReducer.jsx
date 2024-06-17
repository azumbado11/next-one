const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_CART":
      /* payload.id = item ID */
      const itemId = payload.id;
      const itemIndex = state.findIndex((item) => item.id === itemId);
      payload.quantity = 1;

      if (itemIndex >= 0) {
        const updated = state.map((item) => {
          if (item.id === itemId) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });
        return updated;
      }
      return [...state, payload];
    case "DELETE_TO_CART":
      const filtered = state.filter((item) => {
        if (item.id !== payload) {
          return item;
        }
      });
      return filtered;
    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
};
export default reducer;
/* 
case "ADD_TO_CART":
  return [...state, payload];



findIndex return -1 if item its not found
findIndex return -1 or ItemIndex
*/
