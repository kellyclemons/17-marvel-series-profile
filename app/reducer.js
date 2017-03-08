import { combineReducers } from 'redux';
import characterData from './reducer/character-data';
import comicData from './reducer/comic-data';
import seriesInfo from './reducer/series-info';
import modal from './reducer/modal';

export default combineReducers({
  characterData,
  comicData,
  modal,
  seriesInfo,
});
