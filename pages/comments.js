import Link from "next/link";
import React, { useState } from "react";
import BreadCrumbs from "../components/Breadcrumbs";
import styles from "./../styles/earnings.module.css";

const commentsData = [
  {
    id: "1",
    comment:
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    course: "Digital Marketing",
    commentedBy: "Shawn Tyler",
    date: "2023-01-10",
  },
  {
    id: "2",
    comment:
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    course: "Content Writing",
    commentedBy: "Bob Kite",
    date: "2023-01-25",
  },
  {
    id: "3",
    comment:
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    course: "React Js Development",
    commentedBy: "Kate Harrison",
    date: "2022-12-28",
  },
  {
    id: "4",
    comment:
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    course: "Digital Marketing",
    commentedBy: "Sara Harrison",
    date: "2023-01-15",
  },
  {
    id: "5",
    comment:
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    course: "Content Writing",
    commentedBy: "Bryan Crimson",
    date: "2023-01-16",
  },
];

const Comments = () => {
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
      ? commentsData && commentsData.sort((a, b) => (a[col] > b[col] ? 1 : -1))
      : commentsData && commentsData.sort((a, b) => (a[col] < b[col] ? 1 : -1));
  };

  return (
    <div className="container">
      <div>
        <h3>Comments/Doubts</h3>
        <BreadCrumbs
          title1="Home"
          link1="/"
          title2="Comments"
          link2="/comments"
        />
      </div>
      <div className={styles.table_outer}>
        <div className="overflow-auto">
          <table className="table table_earning">
            <thead className={styles.table_table_header}>
              <tr>
                {/* <th scope="col">#</th> */}
                <th
                  scope="col"
                  onClick={() => handleSort("id")}
                  style={{
                    textDecoration:
                      currentColumn === "id" ? "underline" : "none",
                  }}
                >
                  ID <ion-icon name="code-outline"></ion-icon>
                </th>
                <th
                  scope="col"
                  onClick={() => handleSort("comment")}
                  style={{
                    textDecoration:
                      currentColumn === "comment" ? "underline" : "none",
                  }}
                >
                  Comment/doubt <ion-icon name="code-outline"></ion-icon>
                </th>
                <th
                  scope="col"
                  onClick={() => handleSort("course")}
                  style={{
                    textDecoration:
                      currentColumn === "course" ? "underline" : "none",
                  }}
                >
                  Course <ion-icon name="code-outline"></ion-icon>
                </th>
                <th
                  scope="col"
                  onClick={() => handleSort("commentedBy")}
                  style={{
                    textDecoration:
                      currentColumn === "commentedBy" ? "underline" : "none",
                  }}
                >
                  Commented By <ion-icon name="code-outline"></ion-icon>
                </th>
                <th
                  scope="col"
                  onClick={() => handleSort("date")}
                  style={{
                    textAlign: "right",
                    textDecoration:
                      currentColumn === "date" ? "underline" : "none",
                  }}
                >
                  Date <ion-icon name="code-outline"></ion-icon>
                </th>
              </tr>
            </thead>
            <tbody>
              {commentsData.map((item) => (
                <tr key={item.id} className={styles.table_table_row}>
                  <td style={{ verticalAlign: "middle" }}>{item.id}</td>
                  <td style={{ verticalAlign: "middle" }}>{item.comment}</td>
                  <td style={{ verticalAlign: "middle" }}>{item.course}</td>
                  <td style={{ verticalAlign: "middle" }}>
                    {item.commentedBy}
                  </td>
                  <td style={{ verticalAlign: "middle", textAlign: "right" }}>
                    {item.date}
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

export default Comments;