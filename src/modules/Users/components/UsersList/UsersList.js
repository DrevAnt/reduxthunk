import React, { useEffect } from "react";
import Loading from "../../../../library/common/components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../actions";
import { Link } from "react-router-dom";

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.getUsers);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <>
      <div>
        {users.loading ? (
          users.error ? (
            <div>Error in API</div>
          ) : (
            <Loading />
          )
        ) : (
          <div>
            <ul className="list-group">
              {users.usersList.map((user) => (
                <Link key={user.id} to={`/UserList/${user.id}/Albums`}>
                  <li
                    key={user.id}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    {user.name}
                    {user.username}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default UserList;
