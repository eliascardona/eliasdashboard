import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const CourseCard = ({ image, title, author, hours }) => {
  const [favourite, setFavourite] = useState(false);
  const [toggle, setToggle] = useState(false);
  const ref = useRef(null);


  //Code when we click outside the Course Card
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [ref, toggle, setToggle]);
  //Code when we click outside the Course Card


  const handleFavourite = () => {
    setFavourite((prev) => !prev);
  };

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  const handlePreview = () => {
    console.log("preview");
  };

  return (
    <div className="course_card" ref={ref}>
      <div
        className="course_image"
        onClick={handleToggle}
        style={{
          background: `url(${image})`,
        }}
      >
        {toggle && (
          <div className="course_image_bg" onClick={handlePreview}>
            <i className="bi bi-play-circle"></i>
            <span>Preview</span>
          </div>
        )}
      </div>
      <div className="course_content" onClick={handleToggle}>
        <div className="course_flex">
          <div className="course_text">
            <Link href="/">
              <h5>{title}</h5>
            </Link>
          </div>
          <div
            className="course_icon"
            onClick={handleFavourite}
            title={!favourite ? "Add Favourite" : "Remove Favourite"}
          >
            {favourite ? (
              <i className="bi bi-heart-fill"></i>
            ) : (
              <i className="bi bi-heart"></i>
            )}
          </div>
        </div>

        <div
          className="collapse_content"
          style={{ height: toggle ? "50px" : "0px" }}
        >
          <small>{author}</small>
          <div className={"course_flex"}>
            <div className="stars_div">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"> </i>
              <i className="bi bi-star"></i>
            </div>
            <div className="course_time">
              <small>{hours}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
