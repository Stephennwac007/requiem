import * as api from "../api";
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE, DISLIKE } from "../constants/actionTypes";

// making Action creators

// READ
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

// CREATE
export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

// UPDATE
export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
  console.log(error);
  }
};

// DELETE
export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

// LIKE
export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
  console.log(error);
  }
};

// DISLIKE
export const dislikePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.unlikePost(id);

    dispatch({ type: DISLIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
}