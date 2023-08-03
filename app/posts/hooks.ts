import axios from 'axios';
import { useEffect, useState } from 'react';
import { Post } from './types';

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>();

  useEffect(() => {
    const fetchPosts = async () => {
      axios
        .get('/api/posts')
        .then(function ({ data }) {
          setPosts(data.posts);
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    fetchPosts();
  }, []);

  return [posts];
};

export const usePost = (postId: string) => {
  const [post, setPost] = useState<Post>();

  useEffect(() => {
    const fetchPost = async () => {
      axios
        .get<Post>(`/api/posts/${postId}`)
        .then(function ({ data }) {
          setPost(data);
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    fetchPost();
  }, [postId]);

  return [post];
};
