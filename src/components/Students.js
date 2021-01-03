import React, { useState } from 'react'
import StudentDetail from './StudentDetail'

export default function Students() {

    const [students, setStudents] = useState([
        {id: 1, name: 'Lovro', city: 'Ljubljana'},
        {id: 2, name: 'Veronika', city: 'Koper'},
        {id: 3, name: 'Luka', city: 'Berlin'},
        {id: 4, name: 'Andreja', city: 'Ankaran'}
    ])

    const handleSort = () => {
        let cloneStudents = JSON.parse(JSON.stringify(students))
        cloneStudents.sort((a, b) => {
            if (a.name > b.name) {return 1}
            else if (a.name < b.name) {return -1}
            else {return 0}
        })
        setStudents(cloneStudents)
    }

    const handleDelete = (someId) => {
        let filteredStudents = students.filter((student) => {
            return student.id !== someId
        })
        setStudents(filteredStudents)
    }

    return (
        <div>
            <button onClick={handleSort} >Sort by Name</button>
            {
                students.map((student, i) => {
                    return <StudentDetail 
                                key={i} 
                                detail={student} 
                                deleteHandler={handleDelete}
                            />
                })
            }
        </div>
    )
}

