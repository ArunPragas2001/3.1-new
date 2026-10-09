import { useState } from 'react';

export default function StudentCom({ name, course, age }) {
    const [studentName] = useState(name);
    const [visible, setVisible] = useState(true);

    const showName = () => {
        alert(`Student Name: ${studentName}`);
    };

    return (
        <div>
            <h2>Student Information</h2>
            <button onClick={showName}>Show Name</button>
            <button onClick={() => setVisible(!visible)}>Toggle Name</button>
            <p>Name: {name}</p>
            <p>Course: {course}</p>
            <p>Age: {age}</p>

            {visible && <h1>{studentName}</h1>}
        </div>
    );
}
