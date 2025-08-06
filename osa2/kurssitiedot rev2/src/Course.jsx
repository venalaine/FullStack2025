const Header = ({ name }) => {
  return (
    <>
      <h1>{name}</h1>
    </>
  )
}

const Part = ({ part }) => {
  return (
    <>
      <p key={part.id}>
        {part.name}
        {' '}
        {part.exercises}
      </p>
    </>
  )
}

const Content = ({ parts }) => {
  return (
    <>
      {parts.map(part =>
        <Part key={part.id} part={part} />
      )}
    </>
  )
}

const Total = ({ parts }) => {

  const total = parts.reduce((sum, part) => sum + part.exercises, 0)

  return (
    <>
      <b>Total of {total} exercises</b>
    </>
  )
}

const Course = ({ course }) => {
  return (
    <>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )

}

export default Course