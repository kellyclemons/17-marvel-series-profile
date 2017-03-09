export default function comicData(state = [], action) {
  switch (action.type) {
    case 'COMICS@FIND_ALL_COMPLETE':
      return action.data;
    default:
      return state;
  }
}
