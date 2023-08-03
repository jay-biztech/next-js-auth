'use client';

import { usePost } from '../hooks';

export default function Page({ params }) {
  const [post] = usePost(params.id);

  return (
    <div className="container">
      {post ? (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{post?.title}</h5>
            <p className="card-text">{post?.body}</p>
            {post?.tags.map((tag, index) => {
              return (
                <ul className="list-group list-group-flush" key={index}>
                  <li className="list-group-item">{tag}</li>
                </ul>
              );
            })}
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
