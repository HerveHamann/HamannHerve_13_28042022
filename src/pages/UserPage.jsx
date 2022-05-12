import React from "react";
import Account from "../components/Account";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import UserHeader from "../components/UserHeader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrUpdateUser } from "../features/getUser";
import { selectToken, selectUser } from "../utils/selectors";

const UserPage = () => {
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);

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
