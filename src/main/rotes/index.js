import React from "react";
import { Route, Switch } from "react-router";

import Home from "../../library/common/components/Home/Home";
import TodoList from "../../modules/Todos/components/TodoList/TodoList";
import PostsList from "../../modules/Posts/components/PostsList/PostsList";
import UsersList from "../../modules/Users/components/UsersList/UsersList";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/UsersList" exact component={UsersList} />
      <Route path="/PostsList" exact component={PostsList} />
      <Route path="/TodoList" exact component={TodoList} />
      <Route path="*" component={Home} />
    </Switch>
  );
}
