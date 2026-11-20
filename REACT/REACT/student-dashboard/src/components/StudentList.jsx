import React from 'react';
import StudentCard from './StudentCard.jsx';

export default class StudentList extends React.Component {
    render() {
        const { students } = this.props;

        return (
            <div className="student-list-section">
                <h2 className="section-title">STUDENTS</h2>

                {students.length === 0 ? (
                    <p className="empty-message">No students added yet.</p>
                ) : (
                    <div className="student-grid">
                        {students.map((student) => (
                            <StudentCard
                                key={student.id}
                                id={student.id}
                                name={student.name}
                                course={student.course}
                                status={student.status}
                            />
                        ))}
                    </div>
                )}
            </div>
        );
    }
}
