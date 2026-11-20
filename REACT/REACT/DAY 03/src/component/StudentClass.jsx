import React from 'react';

export default class StudentClass extends React.Component {
    render() {
        return (
            <div>
                <h1>Student Information</h1>
                <p>Name: {this.props.name}</p>
                <p>Course: {this.props.course}</p>
            </div>
        );
    }
}
