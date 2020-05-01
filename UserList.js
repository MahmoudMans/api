import React, { useState, useEffect } from "react";
import axios from "axios";



export default function UserList() {
  const [listOfUser, setlistOfUser] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setlistOfUser(res.data);
    });
  }, []);
  console.log(listOfUser);
  return (
    <div >
      <table >
        <tr >
          <th  >
            id
          </th>
          <th  >
            name
          </th>
          <th  >
            email
          </th>
        </tr>

        {listOfUser.map((el) => {
          return (
            <tr >
              <td>
                {el.id}
              </td>
              <td >
                {el.name}
              </td>
              <td >
                {el.email}
              </td>
            </tr>
          );
        })}
      </table>
   
    </div>
  );
}