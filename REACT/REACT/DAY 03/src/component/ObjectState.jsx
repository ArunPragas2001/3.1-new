import { useState } from "react";

export default function ObjectState() {
  const [student, setStudent] = useState({ name: "Alice", age: 30, course: "IT" });
    return (
        <div>
            <h2>{student.name}</h2>
            <h2>{student.age}</h2>
            <h3>{student.course}</h3>
            <button onClick={() => setStudent({ ...student, age: student.age + 1 })}>
                Increase Age
            </button>
            <button onClick={() => setStudent({ ...student, course: "AMC" })}>
                Change Course
            </button>
            <button onClick={() => setStudent({ ...student, name: "Bob" })}>
                Change Name
            </button>
        </div>
    );
}