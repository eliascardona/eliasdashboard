import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import styles from "../../styles/videos.module.css";
import BreadCrumbs from "../../components/Breadcrumbs";

const Form = () => {
  const inputRef = useRef();
  const videoRef = useRef();
  const router = useRouter();

  //initial state
  const [courseDetails, setCourseDetails] = useState({
    courseTitle: "",
    courseDescription: "",
    authorName: "",
    hours: "",
    image: "",
    video: "",
    videoFile: "",
  });
  const [id, setID] = useState("");
  const [lessons, setLessons] = useState({
    title: [""],
    desc: [""],
    video: [""],
    videoFile: [""],
  });

  useEffect(() => {
    if (location.query) {
      setCourseDetails({
        ...courseDetails,
        courseTitle: router.query.title,
        authorName: router.query.author,
        courseDescription: router.query.description,
        hours: router.query.hours,
        image: router.query.image,
      });
    }
  }, [router.query]);

  //input text fields code
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseDetails({
      ...courseDetails,
      [name]: value,
    });
  };
  //input text fields code

  //video javascript code
  const handleChoose = (event) => {
    event.preventDefault();
    console.log("click ref", inputRef);
    inputRef.current.click();
  };

  const handleFileChange = (event) => {
    console.log("e >>>", event.target.files);
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setCourseDetails({
      ...courseDetails,
      video: url,
      videoFile: file,
    });
  };

  const handleReset = (e) => {
    e.preventDefault();
    setCourseDetails({
      ...courseDetails,
      video: "",
      videoFile: "",
    });
    inputRef.current.value = "";
  };
  //video javascript code

  //image js code
  const handleChangeImage = (e) => {
    const file = e.target.files[0];
    setCourseDetails({
      ...courseDetails,
      image: file,
    });
  };

  const handleResetImage = (e) => {
    e.preventDefault();
    setCourseDetails({
      ...courseDetails,
      image: "",
    });
  };
  //image js code

  //Lessons multiple array code

  //Onchange inside lesson title
  const handleChangeLessonTitle = (e, index) => {
    lessons.title[index] = e.target.value;

    setLessons({
      ...lessons,
      title: lessons.title,
    });
  };

  const handleChangeLessonDesc = (e, index) => {
    lessons.desc[index] = e.target.value;

    setLessons({
      ...lessons,
      desc: lessons.desc,
    });
  };

  //add more lesson
  const handleAddMore = () => {
    setLessons({
      ...lessons,
      title: [...lessons.title, ""],
      desc: [...lessons.desc, ""],
      video: [...lessons.video, ""],
      videoFile: [...lessons.videoFile, ""],
    });
  };

  const handleCancel = (e, index) => {
    var array = lessons.title;
    var cancel = array.splice(index, 1);

    var array1 = lessons.desc;
    var cancel1 = array1.splice(index, 1);

    var array2 = lessons.video;
    var cancel2 = array2.splice(index, 1);

    var array3 = lessons.videoFile;
    var cancel3 = array3.splice(index, 1);

    setLessons({
      ...lessons,
      title: array,
      desc: array1,
      video: array2,
      videoFile: array3,
    });
  };

  //Lessons video js code
  //video javascript code
  const handleChooseLessonVideo = (e, index) => {
    e.preventDefault();
    console.log("clickkkkkk ref", videoRef);
    videoRef.current.click();
  };

  const handleFileChangeLesson = (e, index) => {
    // console.log("e >>>", e.target.files);
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    lessons.videoFile[index] = file;
    lessons.video[index] = url;
    setLessons({
      ...lessons,
      video: lessons.video,
      videoFile: lessons.videoFile,
    });
  };

  const handleResetVideoLesson = (e, index) => {
    e.preventDefault();
    lessons.video[index] = "";
    lessons.videoFile[index] = "";
    setLessons({
      ...lessons,
      video: lessons.video,
      videoFile: lessons.videoFile,
    });
    videoRef.current.value = "";
  };
  //video javascript code

  //submit here
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  // console.log("details", courseDetails);
  console.log("lessonss", lessons);

  return (
    <div className="container">
      <h4 className="">Edit course</h4>
      <BreadCrumbs
        title1="Home"
        link1="/"
        title2="Courses"
        link2="/videos"
        title3="Edit Course"
        link3="/videos/form"
      />

      <form onSubmit={handleSubmit} className={styles.form_card}>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Course Title</label>
              <input
                type="text"
                className="form-control"
                value={courseDetails.courseTitle}
                onChange={handleChange}
                name="courseTitle"
                aria-describedby="emailHelp"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Author</label>
              <input
                type="text"
                className="form-control"
                value={courseDetails.authorName}
                name="authorName"
                onChange={handleChange}
                aria-describedby="emailHelp"
              />
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Hours</label>
          <input
            type="text"
            className="form-control"
            value={courseDetails.hours}
            onChange={handleChange}
            name="hours"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Short Description</label>
          <textarea
            rows="3"
            type="text"
            className="form-control"
            value={courseDetails.courseDescription}
            onChange={handleChange}
            name="courseDescription"
            aria-describedby="emailHelp"
          />
        </div>

        {/* Image */}
        <div className="mb-5">
          <label className="form-label">Image</label>
          {courseDetails.image ? (
            <div>
              {courseDetails.image.name ? (
                <img
                  alt="course_image"
                  width={"250px"}
                  src={URL.createObjectURL(courseDetails.image)}
                />
              ) : (
                <img
                  alt="course_image"
                  width={"250px"}
                  src={courseDetails.image}
                />
              )}

              <br />
              <button
                className="btn btn-outline-secondary mt-2"
                onClick={handleResetImage}
              >
                Remove
              </button>
            </div>
          ) : (
            <input
              type="file"
              name="image"
              className="form-control form-control-file"
              onChange={handleChangeImage}
            />
          )}
        </div>

        {/* Image */}

        {/*Video */}
        <div className="mb-5">
          <input
            ref={inputRef}
            name="videoFile"
            className={styles.video_input_input}
            type="file"
            onChange={handleFileChange}
            accept=".mov,.mp4"
          />
          {!courseDetails.video && (
            <button
              className="btn btn-outline-secondary"
              onClick={handleChoose}
            >
              Choose Video
            </button>
          )}

          {courseDetails.video && (
            <video
              className={styles.video_input_video}
              width="100%"
              height={400}
              controls
              src={courseDetails.video}
            />
          )}
          <div className="">
            <small>
              {courseDetails.videoFile.name || "Please select a video!"}
            </small>
          </div>
          {courseDetails.video && (
            <button
              className="btn btn-outline-secondary mt-3"
              onClick={handleReset}
            >
              Reset Video
            </button>
          )}
        </div>
        {/*Video */}

        {/* Add/Edit and Delete Lessons */}
        <div className={styles.table_header}>
          <div>
            <h3 className="">Lessons</h3>
          </div>
          <div>
            <button className="btn_grey" onClick={handleAddMore}>
              <ion-icon name="add-outline"></ion-icon> Add Lesson
            </button>
          </div>
        </div>

        <div className="accordion accordion-flush " id="accordionFlushExample">
          {lessons.title.map((les, index) => (
            <div className="accordion-item">
              <div className="accordion-header" id={`flush-heading${index}`}>
                <button
                  className="accordion-button collapsed shadow-2"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#flush-collapse${index}`}
                  aria-expanded="false"
                  aria-controls={`flush-collapse${index}`}
                >
                  Lesson #{index + 1}
                  <span
                    className={styles.close_button}
                    onClick={(e) => handleCancel(e, index)}
                  >
                    <ion-icon name="close-outline"></ion-icon> Remove
                  </span>
                </button>
              </div>
              <div
                id={`flush-collapse${index}`}
                className="accordion-collapse collapse"
                aria-labelledby={`flush-heading${index}`}
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  {/* Lesson Name */}
                  <div className="mb-3">
                    <label className="form-label">Lesson Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={lessons.title[index]}
                      onChange={(e) => handleChangeLessonTitle(e, index)}
                      name="title"
                    />
                  </div>

                  {/* Lesson Description */}
                  <div className="mb-3">
                    <label className="form-label">Short Description</label>
                    <textarea
                      rows="3"
                      type="text"
                      className="form-control"
                      value={lessons.desc[index]}
                      onChange={(e) => handleChangeLessonDesc(e, index)}
                      name="desc"
                    />
                  </div>

                  {/*Lesson Video */}
                  <div className="mb-5">
                    <input
                      ref={videoRef}
                      name="videoFile"
                      className={styles.video_input_input}
                      type="file"
                      onChange={(e) => handleFileChangeLesson(e, index)}
                      accept=".mov,.mp4"
                    />
                    {!lessons.video[index] && (
                      <button
                        className="btn btn-outline-secondary"
                        onClick={(e) => handleChooseLessonVideo(e, index)}
                      >
                        Choose Video
                      </button>
                    )}

                    {lessons.video[index] && (
                      <video
                        className={styles.video_input_video}
                        width="100%"
                        height={400}
                        controls
                        src={lessons.video[index]}
                      />
                    )}
                    <div className="">
                      <small>
                        {lessons.videoFile[index].name ||
                          "Please select a video!"}
                      </small>
                    </div>
                    {lessons.video[index] && (
                      <button
                        className="btn btn-outline-secondary mt-3"
                        onClick={(e) => handleResetVideoLesson(e, index)}
                      >
                        Reset Video
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button type="submit" className="btn_dark right mt-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;