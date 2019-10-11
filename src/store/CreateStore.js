export default (reducer, initialState) => {
  let currentState = initialState;
  const listeners = [];
  return {
    getState: () => currentState,
    dispatch: action => {
        currentState = reducer(currentState, action);
        listeners.forEach(listener => listener());
    },
    subscribe: (listener) => {
        listeners.push(listener)

      // TODO We needed add unsubscribe method
        return function unsubscribe() {
            const index = listeners.indexOf(listener)
            listeners.splice(index, 1)
        }
    }
  };
}
