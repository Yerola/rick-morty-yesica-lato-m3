import axios from "axios";
export const ADD_CHARACTER = "ADD_CHARACTER";
export const GET_CHARACTERS = "GET_CHARACTERS";
export const DELETE_CHARACTER = "DELETE_CHARACTER";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

export let addCharacter = (character) => {
  return async function (dispatch) {
    try {
      let result = await axios
        .post(`http://localhost:3001/rickandmorty/fav/`, character)
      // .then((info) => info.data)
      // .then((data) => {
      dispatch({
        type: ADD_CHARACTER,
        payload: result.data,
      });
      // });
    } catch (error) {
      console.log(error);
    }
  };
};

export function deleteCharacter(id) {
  return async function (dispatch) {
    try {
      await axios
        .delete(`http://localhost:3001/rickandmorty/fav/${id}`)
      // .then((info) => info.data)
      // .then((data) => {
      dispatch({
        type: DELETE_CHARACTER,
        payload: id,
      });
      // });
    } catch (error) {
      console.log(error);
    }
  };
}

export const filterCards = (status) => {
  return { type: FILTER, payload: status };
};
export const orderCards = (id) => {
  return { type: ORDER, payload: id };
};

export const searchCharacters = () => {
  return function (dispatch) {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: GET_CHARACTERS, payload: data.results })
      );
  };
};
