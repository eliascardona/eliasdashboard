import CourseCard from "../components/CourseCard";
import MyHeader from "../components/MyHeader";

function Home() {
  return (
    <>
      {/* Bootstrap class for container */}
      <div className="container">
        {/* 1st Row */}
        <MyHeader title="Popular Courses" />
        <div className="row mt-4 mb-5">
          <div className="col-md-6 col-lg-4 col-xl-3">
            <CourseCard
              image="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              title="React Js Full Course"
              author="Ryan Holiday"
              hours="5 hours"
            />
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <CourseCard
              image="https://images.unsplash.com/photo-1633355444132-695d5876cd00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
              title="UI/UX using Figma"
              author="Hack Hobbs"
              hours="4.5 hours"
            />
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <CourseCard
              image="https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1506&q=80"
              title="Digital Marketing Course"
              author="Sara Gilbert"
              hours="4 hours"
            />
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <CourseCard
              image="https://images.unsplash.com/photo-1562577309-2592ab84b1bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
              title="Learn SEO"
              author="Harry Wingston"
              hours="6 hours"
            />
          </div>
        </div>
        {/* 1st Row */}

        {/* 2nd Row */}
        <MyHeader title="Development Courses" />
        <div className="row mt-4 mb-5">
          <div className="col-md-6 col-lg-4 col-xl-3">
            <CourseCard
              image="https://images.unsplash.com/photo-1633355444132-695d5876cd00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
              title="UI/UX using Figma"
              author="Hack Hobbs"
              hours="4.5 hours"
            />
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <CourseCard
              image="https://images.unsplash.com/photo-1562577309-2592ab84b1bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
              title="Learn SEO"
              author="Harry Wingston"
              hours="6 hours"
            />
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <CourseCard
              image="https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1506&q=80"
              title="Digital Marketing Course"
              author="Sara Gilbert"
              hours="4 hours"
            />
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <CourseCard
              image="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              title="React Js Full Course"
              author="Ryan Holiday"
              hours="5 hours"
            />
          </div>
        </div>
        {/* 2nd Row */}
      </div>
    </>
  );
}

export default Home;
