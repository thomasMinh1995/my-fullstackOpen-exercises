// import React from "react";

// const Notes = (itemLists) => {
//     const sumValue = itemLists.note.reduce((total,currentValue) => {
//         return total + currentValue.exercises
//     }, 0);

//     return (
//        <>
//          {
//             itemLists.note.map(item => (
//                 <p key={item.id}>{item.name} {item.exercises}</p>
//             ))
//          }
//          <p>Sum: {sumValue}</p>
//        </>
//     )
// }


// export default function Part02Exercies() {
//   const course = {
//     id: 1,
//     name: "Half Stack application development",
//     parts: [
//       {
//         name: "Fundamentals of React",
//         exercises: 10,
//         id: 1,
//       },
//       {
//         name: "Using props to pass data",
//         exercises: 7,
//         id: 2,
//       },
//       {
//         name: "State of a component",
//         exercises: 14,
//         id: 3,
//       },
//     ],
//   };

//   return <div>
//     <h1>{course.name}</h1>
//     {/* {
//         course.parts.map(item => (
//             <p key={item.id}>{item.name} {item.exercises}</p>
//         ))
//     } */}
//     <Notes note={course.parts}/>
//   </div>;
// }
import React from 'react'

const Part = (props) => {

  const sumValue = props.parts.reduce((total, currentValue) => {
    return total + currentValue.exercises
  }, 0)
  return (
    <>
      {
        props.parts.map((part) => (
          <div key={part.id}>
            <p>{part.name} {part.exercises}</p>
          </div>
        ))
      }
      <p>Sum is {sumValue}</p>
    </>
  )
}

export default function Part02Exercies() {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <>
     {
      courses.map((courseItem) => (
        <div key={courseItem.id}>
          <h1>{courseItem.name}</h1>
          <Part parts={courseItem.parts} />
        </div>
      ))
    }
    </>
  )
}
