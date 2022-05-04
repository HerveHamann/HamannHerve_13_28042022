import React from "react";

const Account = ({ title, amount, amountDescription }) => {
  return (
    <section className="account">
      <div className="content-wrapper">
        <h3 className="title">{title}</h3>
        <p className="amount">{amount}</p>
        <p className="amount-description">{amountDescription}</p>
      </div>
      <div className="cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  );
};

export default Account;
