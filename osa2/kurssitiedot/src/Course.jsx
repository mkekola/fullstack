const Course = (props) => {
    const course = props.course
    return (
      <div>
        <Header course={course.name}> </Header>
        <Content parts={course.parts}> </Content>
        <Total parts={course.parts}> </Total>
      </div>
    )
  }
  
  const Header = (props) => {
    return (
      <div>
        <h1>{props.course}</h1>
      </div>
    )
  }
  
  const Part = (props) => {
    return (
      <p>
        {props.part} {props.exercises}
      </p>
    )
  }
  
  const Content = (props) => {
    return (
      <div>
        {props.parts.map((part, index) => (
          <Part key={index} part={part.name} exercises={part.exercises} />
        ))}
      </div>
    )
  }
  
  const Total = (props) => {
    const totalExercises = props.parts.reduce((sum, part) => sum + part.exercises, 0);
    return <p>Number of exercises {totalExercises}</p>
  }

  export default Course