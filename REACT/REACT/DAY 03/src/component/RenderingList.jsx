export default function RenderingList() {
    const students = [
        "Alice",
        "Bob",
        "Charlie",
        "David",
        "Eve"
    ];

    return (
        <ul>
            {students.map((student, index) => (
                <li key={index}>{student}</li>
            ))}
        </ul>
    );
}