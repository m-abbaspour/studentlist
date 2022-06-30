import React from 'react'
import StudentCard from './StudentCard'
import s1 from './s1.png'
import s2 from './s2.png'
import s3 from './s3.png'
import s4 from './s4.png'

function StudentList() {
    const students = [
        {
            id:1,
        image: s1,
        name: "Mike",
        gpa: 3.8
      },
      {
        id:2,
        image: s2,
          name: "Manal",
          gpa: 3.6
      },
      {
        id:3,
        image: s3,
          name: "Moe",
          gpa: 3.2
      },
      {
        id:4,
        image: s4,
          name: "Mary",
          gpa: 2.6
      }
    ]

    const studentList = students.map(a => <StudentCard key={a.id} student = {a}/>
        )
  return (
    <>
        <h1>Student List</h1>
        <div className='cardList'>
            {studentList}
        </div>
    </>
  )
}

export default StudentList