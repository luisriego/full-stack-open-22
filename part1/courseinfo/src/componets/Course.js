const Course = ({course}) => {
    return (
      <div>
        <Header course={course} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    )
  }
  
  const Header = ({course}) => {
    return <h2>{course.name}</h2>
  }
  
  const Content = ({parts}) => {
    return (
      <div>
        {parts.map(part => (
            <Part key={part.id} part={part} />
        ))}
      </div>
    )
  }
  
  const Part = ({part}) => {
    return (
      <p>
        {part.name} {part.exercises}
      </p>
    )
  }
  
  const Total = ({parts}) => {
    const sum = parts.reduce((partial, part) => partial + part.exercises, 0)
    return (
      <b>
        total of {sum} exercises
      </b>
    )
  }

  export default Course