export default (state = [], action) => {
  switch (action.type) {
    case 'ADD':
      if (state.indexOf(action.payload) === -1)
        return [...state, action.payload];
      else return state;
    default:
      return state;
  }
}