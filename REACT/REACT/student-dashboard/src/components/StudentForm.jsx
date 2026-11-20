import React, { useState } from 'react';

export default function StudentForm(props) {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [course, setCourse] = useState('');
    const [status, setStatus] = useState('ACTIVE');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!id.trim() || !name.trim() || !course.trim()) {
            alert('Please fill in Student ID, Name, and Course.');
            return;
        }

        const newStudent = {
            id: id.trim(),
            name: name.trim(),
            course: course.trim(),
            status: status,
        };

        props.onAddStudent(newStudent);

        setId('');
        setName('');
        setCourse('');
        setStatus('ACTIVE');
    };

    return (
        <div className="form-section">
            <h2 className="section-title">ADD NEW STUDENT</h2>
            <form className="student-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Student ID"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Student Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Course"
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                />
                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="ACTIVE">ACTIVE</option>
                    <option value="INACTIVE">INACTIVE</option>
                </select>
                <button type="submit" className="add-btn">+ ADD STUDENT</button>
            </form>
        </div>
    );
}
