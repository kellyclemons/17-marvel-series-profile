export function loadComplete(data) {
  return {
    type: 'SERIES_INFO@LOAD_COMPLETE',
    data
  };
}

export function charactersFindAllComplete(data) {
  return {
    type: 'CHARACTERS@FIND_ALL_COMPLETE',
    data
  };
}

export function comicsFindAllComplete(data) {
  return {
    type: 'COMICS@FIND_ALL_COMPLETE',
    data
  };
}

export function modalSet(data) {
  return {
    type: 'MODAL@SET',
    data
  };
}

export function modalClear() {
  return {
    type: 'MODAL@SET',
  };
}


export function seriesInfoLoadComplete(data) {
  return {
    type: 'SERIES_INFO@LOAD_COMPLETE',
    data
  };
}

export function charactersFindForId(id) {
  return (dispatch) => {
    fetch(`http://marvel-is-broke.herokuapp.com/series/${id}/characters`)
    .then(r => r.json())
    .then((data) => {
      const current = data.data.results[0];
      dispatch(charactersFindAllComplete(current));
    });
  };
}

export function comicsFindForId(id) {
  return (dispatch) => {
    fetch(`http://marvel-is-broke.herokuapp.com/series/${id}/characters`)
    .then(r => r.json())
    .then((data) => {
      const current = data.data.results[0];
      dispatch(comicsFindAllComplete(current));
    });
  };
}

export function seriesInfoSearch(name) {
  return (dispatch) => {
    fetch(`http://marvel-is-broke.herokuapp.com/series?limit=1&titleStartsWith=${name}`)
    .then(r => r.json())
    .then((data) => {
      const current = data.data.results[0];
      dispatch(seriesInfoLoadComplete(current));
      dispatch(charactersFindForId(current.id));
      dispatch(comicsFindForId(current.id));
    });
  };
}
