import Course from "./componets/Course";

const App = ({courses}) => {
    return (
      <>
        <h1>Web development curriculum</h1>
        {courses.map(course => (
          <Course key={course.id} course={course} />
        ))}
      </>
      
    )
  }

  export default App