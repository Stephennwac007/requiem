import axios from "axios";

const url = "http://localhost:5000/posts";

export const fetchPosts = async () => axios.get(url);
export const createPost = async (newPostData) => axios.post(url, newPostData);
export const updatePost = async (id, updatedPostData) => axios.patch(`${url}/${id}`, updatedPostData);
export const deletePost = async (id) => axios.delete(`${url}/${id}`);
export const likePost = async (id) => axios.patch(`${url}/${id}/likePost`);
export const unlikePost = async (id) => axios.patch(`${url}/${id}/dislikePost`);

