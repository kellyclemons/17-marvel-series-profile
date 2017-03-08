export default function modal(state = [], action) {
  switch (action.type) {
    case 'MODAL@SET':
      return action.data;
    case 'MODAL@CLEAR':
      return state = [];
    default:
      return state;
  }
}
