export default function CompleteList() {
    const students = [
        {id: 1, name:"Alice", age:30},
        {id: 2, name:"Bob", age:25},
        {id: 3, name:"Charlie", age:35},
        {id: 4, name:"David", age:28}
    ];

    return (
        <div>
            <h2>Student List</h2>
            {students.map((student) => (
                <div key={student.id}>
                    <h3>{student.name}</h3>
                    <p>Age: {student.age}</p>
                </div>
            ))}
        </div>
    );
}