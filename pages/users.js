import Link from "next/link";
import React, { useState } from "react";
import BreadCrumbs from "../components/Breadcrumbs";
import styles from "./../styles/earnings.module.css";

const usersData = [
  {
    uId: "1",
    name: "Edward Genesis",
    email: "edward@gmail.com",
    stripe: "https://stripe.com/payments/12312asdj21io",
  },
  {
    uId: "2",
    name: "Harry Tyler",
    email: "harry@gmail.com",
    stripe: "https://stripe.com/payments/12312asdj21io",
  },
  {
    uId: "3",
    name: "Kellie Silverson",
    email: "kellie@gmail.com",
    stripe: "https://stripe.com/payments/12312asdj21io",
  },
  {
    uId: "4",
    name: "Edward Genesis",
    email: "edward@gmail.com",
    stripe: "https://stripe.com/payments/12312asdj21io",
  },
  {
    uId: "5",
    name: "Bryan Smith",
    email: "bryan@gmail.com",
    stripe: "https://stripe.com/payments/12312asdj21io",
  },
  {
    uId: "6",
    name: "Sara Mellos",
    email: "sara@gmail.com",
    stripe: "https://stripe.com/payments/12312asdj21io",
  },
];

const Users = () => {
  const [page, setPage] = useState(1);
  const [currentColumn, setCurrentColumn] = useState("");
  const [direction, setDirection] = useState("asc" || "desc");

  //Page change
  const handlePrev = () => {
    if (page !== 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page !== 3) {
      setPage(page + 1);
    }
  };

  const handlePageClick = (num) => {
    setPage(num);
  };
  //Page change

  const handleSort = (col) => {
    setDirection((prev) => (prev === "asc" ? "desc" : "asc"));
    setCurrentColumn(col);

    direction === "asc"
      ? usersData && usersData.sort((a, b) => (a[col] > b[col] ? 1 : -1))
      : usersData && usersData.sort((a, b) => (a[col] < b[col] ? 1 : -1));
  };

  return (
    <div className="container">
      <div>
        <h3>Users</h3>
        <BreadCrumbs title1="Home" link1="/" title2="Users" link2="/users" />
      </div>
      <div className={styles.table_outer}>
        <div className="overflow-auto">
          <table className="table table_earning">
            <thead className={styles.table_table_header}>
              <tr>
                {/* <th scope="col">#</th> */}
                <th
                  scope="col"
                  onClick={() => handleSort("uId")}
                  style={{
                    textDecoration:
                      currentColumn === "uId" ? "underline" : "none",
                  }}
                >
                  UID <ion-icon name="code-outline"></ion-icon>
                </th>
                <th
                  scope="col"
                  onClick={() => handleSort("name")}
                  style={{
                    textDecoration:
                      currentColumn === "name" ? "underline" : "none",
                  }}
                >
                  Name <ion-icon name="code-outline"></ion-icon>
                </th>
                <th
                  scope="col"
                  onClick={() => handleSort("email")}
                  style={{
                    textDecoration:
                      currentColumn === "email" ? "underline" : "none",
                  }}
                >
                  Email <ion-icon name="code-outline"></ion-icon>
                </th>
                <th
                  scope="col"
                  onClick={() => handleSort("stripe")}
                  style={{
                    textAlign: "right",
                    textDecoration:
                      currentColumn === "stripe" ? "underline" : "none",
                  }}
                >
                  Stripe Link <ion-icon name="code-outline"></ion-icon>
                </th>
              </tr>
            </thead>
            <tbody>
              {usersData.map((item) => (
                <tr key={item.id} className={styles.table_table_row}>
                  <td style={{ verticalAlign: "middle" }}>{item.uId}</td>
                  <td style={{ verticalAlign: "middle" }}>{item.name}</td>
                  <td style={{ verticalAlign: "middle" }}>{item.email}</td>
                  <td style={{ verticalAlign: "middle", textAlign: "right" }}>
                    <Link href={item.stripe}>
                      <a target="_blank" rel="noopener noreferrer">
                        {item.stripe}
                      </a>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={styles.footer2}>
            <div className={styles.table_pagination}>
              <ul>
                <li className="page_items" onClick={handlePrev}>
                  <ion-icon name="chevron-back-outline"></ion-icon>
                  Prev
                </li>
                <li
                  className="page_items"
                  style={{ color: page === 1 ? "#000" : "#999" }}
                  onClick={() => handlePageClick(1)}
                >
                  1
                </li>
                <li
                  className="page_items"
                  style={{ color: page === 2 ? "#000" : "#999" }}
                  onClick={() => handlePageClick(2)}
                >
                  2
                </li>
                <li
                  className="page_items"
                  style={{ color: page === 3 ? "#000" : "#999" }}
                  onClick={() => handlePageClick(3)}
                >
                  3
                </li>
                <li className="page_items" onClick={handleNext}>
                  Next
                  <ion-icon name="chevron-forward-outline"></ion-icon>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;