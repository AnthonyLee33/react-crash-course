import React, { useEffect, useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import User from "../components/user";

function Home() {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(data);
  }

  useEffect(() => {
    fetchUsers();
    },  []);

  return (
    <div>
      {users.map((user) => {
        <Link to={`/users/${user.id}`} key={user.id}>
          <User
            id={user.id}
            name={user.name}
            email={user.email}
            username={user.username}
          />
        </Link>
      })}
    </div>
  );
}

export default Home;
