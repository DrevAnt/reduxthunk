import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../../../library/common/components/Loading";
import AddPost from "../AddPost/AddPost";
import { getPosts, addPost } from "../../actions";

const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.getPosts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      {/* Add post */}
      <AddPost />
      {/* Get Posts */}
      <div>
        <div>
          {posts.loading ? (
            posts.error ? (
              <div>Error in API</div>
            ) : (
              <Loading />
            )
          ) : (
            <div>
              <ul className="list-group">
                {posts.postsList.map((post) => (
                  <li
                    key={post.id}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <div>
                      <h5>{post.title}</h5>
                      {post.body}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PostsList;
