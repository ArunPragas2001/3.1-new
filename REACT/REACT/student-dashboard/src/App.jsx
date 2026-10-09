import React, { useState } from 'react';
import StudentForm from './components/StudentForm.jsx';
import StudentList from './components/StudentList.jsx';
import './App.css';

function App() {
    const [students, setStudents] = useState([
        { id: 'IT001', name: 'Kamal Perera', course: 'Information Technology', status: 'ACTIVE' },
        { id: 'IT002', name: 'Nimal Fernando', course: 'Computer Science', status: 'ACTIVE' },
        { id: 'IT003', name: 'Saman Silva', course: 'Information Technology', status: 'INACTIVE' },
    ]);

    const handleAddStudent = (newStudent) => {
        setStudents([...students, newStudent]);
    };

    return (
        <div className="app-container">
            <header className="app-header">
                <h1>STUDENT MANAGEMENT SYSTEM</h1>
                <p>React Practical Assessment</p>
            </header>

            <main className="app-main">
                <StudentForm onAddStudent={handleAddStudent} />
                <StudentList students={students} />
            </main>

            <footer className="app-footer">
                <p>2026 Student Dashboard</p>
            </footer>
        </div>
    );
}

export default App;