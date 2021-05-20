import React, { useState, useEffect } from "react";
import axios from "axios";
import "./DataFetching.css";

function DataFetching(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(result.data);
      } catch (error) {
        // handle any GET request or response handling errors
        console.log("fetch error");
      }
    };

    fetchData();
  }, []);

  //if(!users) return 'loading...';

  return (
    <div>
      <table className="usertable">
        <tbody>
          {users &&
            users.map((user) => (
              <tr
                key={user.id}
                className={
                  user.username.includes(props.username) ? "" : "hidden"
                }
              >
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataFetching;
