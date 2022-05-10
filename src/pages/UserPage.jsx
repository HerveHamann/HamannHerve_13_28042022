import React from "react";
import Account from "../components/Account";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import UserHeader from "../components/UserHeader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrUpdateUser } from "../features/getUser";
import { selectToken } from "../utils/selectors";
import { selectUser } from "../utils/selectors";

const UserPage = () => {
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);
  console.log(user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOrUpdateUser(token));
  }, [dispatch, token]);
  const firstNameUser = user.data?.body.firstName;
  const surenameNameUser = user.data?.body.lastName;
  return (
    <div className="user-page">
      <Header firstNameUser={firstNameUser} />
      <div className="main">
        <UserHeader firstNameUser={firstNameUser} surenameNameUser={surenameNameUser} />
        <Account title="Argent Bank Checking (x8349)" amount="$2,082.79" amountDescription="Available Balance" />
        <Account title="Argent Bank Savings (x6712)" amount="$10,928.42" amountDescription="Available Balance" />
        <Account title="Argent Bank Credit Card (x8349)" amount="$184.30" amountDescription="Current Balance" />
      </div>
      <Footer />
    </div>
  );
};

export default UserPage;

// const state = useSelector((state) => state.token.token);
// const options = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: "Bearer" + state,
//   },
// };

// async function GetProfile() {
//   await fetch("http://localhost:3001/api/v1/user/profile", options).then((res) =>
//     res.json().then((res) => {
//       if (res.status === 200) {
//         console.log(res.body);
//       } else {
//         alert(res.message);
//       }
//     })
//   );
// }
// GetProfile();
