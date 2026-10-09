import React from 'react';

export default function StudentCard(props) {
    const { id, name, course, status } = props;
    const isActive = status === 'ACTIVE';

    return (
        <div className="student-card">
            <div className="student-card-header">
                <span className="student-id">{id}</span>
                <span className={`status-badge ${isActive ? 'badge-active' : 'badge-inactive'}`}>
                    {status}
                </span>
            </div>
            <h3 className="student-name">{name}</h3>
            <p className="student-course">{course}</p>
        </div>
    );
}
