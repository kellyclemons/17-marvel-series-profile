export default function modal(state = null, action) {
  switch (action.type) {
    case 'MODAL@SET':
      return action.data;
    case 'MODAL@CLEAR':
      return state = null;
    default:
      return state;
  }
}
