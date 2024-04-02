import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AccountManagement() {
  let [listAccounts, setListAccounts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    let userLogin = JSON.parse(localStorage.getItem("user_login"));
    if (!userLogin) {
      return navigate("/login");
    }

    let accountAPI = [
      {
        id: "1",
        email: "Email1@gmail.com",
      },
      {
        id: "2",
        email: "Email2@gmail.com",
      },
      {
        id: "3",
        email: "Email3@gmail.com",
      },
      {
        id: "4",
        email: "Email4@gmail.com",
      },
    ];

    setListAccounts(accountAPI);
  }, []);

  const rowItem = listAccounts.map((account) => {
    let url = "Account-Detail-" + account.id;
    return (
      <>
        <tr>
          <td> {account.id}</td>
          <td>
            <Link to={url}>{account.email}</Link>
          </td>
        </tr>
      </>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <td>id</td>
          <td>email</td>
        </tr>
      </thead>
      <tbody>{rowItem}</tbody>
    </table>
  );
}

export default AccountManagement;
