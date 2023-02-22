import React, { useState } from "react";
import BreadCrumbs from "../components/Breadcrumbs";
import styles from "./../styles/earnings.module.css";

var earningsData = [
  {
    id: "1",
    title: "React js development",
    fees: "$129",
    revenue: "$1800",
    sales:"25",
    image:
      "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: "2",
    title: "UI/UX using Figma",
    fees: "$165",
    revenue: "$2400",
    sales:"17",
    image:
      "https://images.unsplash.com/photo-1633355444132-695d5876cd00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
  },
  {
    id: "3",
    title: "Digital Marketing",
    fees: "$99",
    sales:"42",
    revenue: "$1769",
    image:
      "https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1506&q=80",
  },
  {
    id: "4",
    image:
      "https://images.unsplash.com/photo-1562577309-2592ab84b1bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    title: "Learn SEO",
    fees: "$89",
    sales:"31",
    revenue: "$1200",
  },
];

const Earnings = () => {
  const [page, setPage] = useState(1);
  const [currentColumn, setCurrentColumn] = useState("");
  const [direction, setDirection] = useState("asc" || "desc");

  //Page change
  const handlePrev = () => {
    if(page !== 1){
        setPage(page -1);
    }
  };

  const handleNext = () => {
    if(page !== 3){
        setPage(page + 1);
    }
  };

  const handlePageClick = (num) => {
    setPage(num)
  };
  //Page change

  const handleSort = (col) => {
    setDirection(prev => prev === "asc" ? "desc" : "asc");
    setCurrentColumn(col);

    direction === "asc" ?
    earningsData && earningsData.sort((a, b) => (a[col] > b[col] ? 1 : -1))
    :
    earningsData && earningsData.sort((a, b) => (a[col] < b[col] ? 1 : -1));
  }

  return (
    <div className="container">
      <div>
        <h3>Earnings</h3>
        <BreadCrumbs title1="Home" link1="/" title2="Earnings" link2="/earnings" />
      </div>
      <div className={styles.table_outer}>
        <div className="overflow-auto">
          <table className="table table_earning">
            <thead className={styles.table_table_header}>
              <tr>
                {/* <th scope="col">#</th> */}
                <th scope="col" onClick={() => handleSort("title")} style={{ textDecoration:currentColumn === "title" ? "underline" : "none" }}>Course <ion-icon name="code-outline"></ion-icon></th>
                <th scope="col" onClick={() => handleSort("fees")} style={{ textDecoration:currentColumn === "fees" ? "underline" : "none" }} >Fees <ion-icon name="code-outline"></ion-icon></th>
                <th scope="col" onClick={() => handleSort("revenue")} style={{ textAlign:"right", textDecoration: currentColumn === "revenue" ? "underline" : "none" }}>Revenue <ion-icon name="code-outline"></ion-icon></th>
              </tr>
            </thead>
            <tbody>
              {earningsData.map((item) => (
                <tr key={item.id} className={styles.table_table_row}>
                  <td style={{ verticalAlign: "middle" }} className={styles.course_div}>
                    <img src={item.image} alt={item.title} />
                    <div>
                        <p>{item.title}</p>
                        <small>{item.sales} Sales</small>
                    </div>
                  
                  </td>
                  <td style={{ verticalAlign: "middle" }}>{item.fees}</td>
                  <td style={{ verticalAlign: "middle", textAlign:"right"}}>{item.revenue}</td>
                </tr>
              ))}
            </tbody>

            
          </table>
          <div className={styles.footer}>
              <div className={styles.table_pagination}>
                <ul>
                  <li className="page_items" onClick={handlePrev}>
                    <ion-icon name="chevron-back-outline"></ion-icon>
                     Prev
                  </li>
                  <li className="page_items" style={{ color:page === 1 ? "#000" : "#999" }} onClick={() => handlePageClick(1)}>
                    1
                  </li>
                  <li className="page_items" style={{ color:page === 2 ? "#000" : "#999" }} onClick={() => handlePageClick(2)}>
                    2
                  </li>
                  <li className="page_items" style={{ color:page === 3 ? "#000" : "#999" }} onClick={() => handlePageClick(3)}>
                    3
                  </li>
                  <li className="page_items" onClick={handleNext}>
                     Next
                     <ion-icon name="chevron-forward-outline"></ion-icon>
                  </li>
                </ul>
              </div>
              <div className={styles.total}>Total - $5,298 USD</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Earnings;