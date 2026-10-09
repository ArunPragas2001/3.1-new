export default function RenderingListWithKey() {
    const students = [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
        { id: 3, name: "Charlie" },
        { id: 4, name: "David" },
        { id: 5, name: "Eve" }
    ];

    return (
        <ul>
            {students.map((student) => (
                <li key={student.id}>{student.name}</li>
            ))}
        </ul>
    );
}