import React, { useState } from "react";
import { useRouter } from "next/router";
import ModalDelete from "../../components/ModalDelete";
import BreadCrumbs from "../../components/Breadcrumbs";
import styles from "../../styles/videos.module.css"

let videoData = [
  {
    id: "1",
    title: "React js development",
    author: "Ryan Holiday",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    hours: "7 hours",
    image:
      "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: "2",
    title: "UI/UX using Figma",
    author: "Bryan CASE",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    hours: "4 hours",
    image:
      "https://images.unsplash.com/photo-1633355444132-695d5876cd00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
  },
  {
    id: "3",
    title: "Digital Marketing",
    author: "Kellie Hardy",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    hours: "5 hours",
    image:
      "https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1506&q=80",
  },
  {
    id: "4",
    image:
      "https://images.unsplash.com/photo-1562577309-2592ab84b1bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    title: "Learn SEO",
    author: "Bell Clinton",
    hours: "6 hours",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

const lessons = () => {
  const router = useRouter();
  const [showDialog, setShowDialog] = useState(false);
  const handleAdd = () => {
    router.push("/videos/form");
  };

  const handleEdit = (e, item) => {
    e.preventDefault();
    // router.push(`/lessons/form`, {query: item});
    router.push(
      {
        pathname: "/lessons/form",
        query: item,
      },
      "/lessons/form"
    );
  };

  const handleDelete = (e) => {
    e.preventDefault();
    setShowDialog(true);
  };

  //callback from delete modal
  const sendDeleteCallback = (call) => {
    if (call.open === false) {
      setShowDialog(false);
    }
    if (call.success === true) {
      console.log("deleteeee");
    }
  };
  return (
    <>
      <div className="container">
        <div className={styles.table_header}>
          <div>
            <h5>lessons/Courses</h5>
            <BreadCrumbs title1="Home" link1="/" title2="Courses" link2="/lessons" />
          </div>
          <div>
            <button type="button" className="btn_dark me-2" onClick={handleAdd}>
              {/* <i className="bi bi-plus-lg me-2"></i> */}
              <ion-icon name="add-outline"></ion-icon>
              Add Course
            </button>
          </div>
        </div>
        <div >
          <div className="overflow-auto">
            <table className="table">
              <thead className={styles.table_table_header}>
                <tr>
                  {/* <th scope="col">#</th> */}
                  <th scope="col">Image</th>
                  <th scope="col">Course Title</th>
                  <th scope="col">Course Little Description</th>
                  <th scope="col">Author</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {videoData.map((item) => (
                  <tr key={item.id} className={styles.table_table_row}>
                    {/* <th scope="row" style={{ verticalAlign: "middle" }}>
                  {item.id}
                </th> */}
                    <td style={{ verticalAlign: "middle" }}>
                      <img src={item.image} alt={item.title} />
                    </td>
                    <td style={{ verticalAlign: "middle" }}>{item.title}</td>
                    <td style={{ verticalAlign: "middle" }}>
                      {item.description}
                    </td>
                    <td style={{ verticalAlign: "middle" }}>{item.author}</td>
                    <td className="btn_group" style={{ verticalAlign: "middle" }}>
                      <button
                        type="button"
                        className="btn_dark me-2 mb-1"
                        onClick={(e) => handleEdit(e, item)}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="btn_grey mb-1"
                        onClick={handleDelete}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              
            </table>
            
          </div>
        </div>
      </div>
      {showDialog && <ModalDelete sendDeleteCallback={sendDeleteCallback} />}
    </>
  );
};

export default lessons;