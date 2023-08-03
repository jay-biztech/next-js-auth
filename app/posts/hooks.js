import axios from 'axios';
import { useEffect, useState } from 'react';

export const usePosts = () => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = axios
        .get('/api/posts')
        .then(function ({ data }) {
          setPosts(data.data.posts);
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    fetchPosts();
  }, []);

  return [posts];
};

export const usePost = (postId) => {
  const [post, setPost] = useState();

  useEffect(() => {
    const fetchPost = async () => {
      const posts = axios
        .get(`/api/posts/${postId}`)
        .then(function ({ data }) {
          setPost(data.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    fetchPost();
  }, []);

  return [post];
};