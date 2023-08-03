'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePosts } from './hooks';

const Posts = () => {
  const { data: session } = useSession({ required: true });

  const [posts] = usePosts();

  return (
    <div className="container">
      {posts?.map((post) => {
        return (
          <div key={post.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  <Link href={`posts/${post.id}`}>{post.title}</Link>
                </h5>
                <p className="card-text">{post.body}</p>
                {post.tags.map((tag, index) => {
                  return (
                    <ul className="list-group list-group-flush" key={index}>
                      <li className="list-group-item">{tag}</li>
                    </ul>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
