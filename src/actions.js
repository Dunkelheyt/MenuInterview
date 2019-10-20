// synchronous action creator
export const increment = () => {
  return {
    type: "INCREMENT"
  };
};

// asynchronous action creator

export const fetchData = () => {
  return dispatch => {
    return fetch("https://api.myjson.com/bins/qjri4")
      .then(response => response.json())
      .then(json => dispatch({ type: "FetchData", data: json }))
      .catch(err =>
        dispatch({ type: "ERROR", msg: "Network error; unable to fetch data" })
      );
  };
};

export const fetchMoreData = () => {
  return dispatch => {
    return fetch("https://api.myjson.com/bins/qjri4")
      .then(response => response.json())
      .then(json => dispatch({ type: "FetchMoreData", data: json }))
      .catch(err =>
        dispatch({
          type: "ERROR - MORE DATA",
          msg: "Unable to fetch more data!"
        })
      );
  };
};
