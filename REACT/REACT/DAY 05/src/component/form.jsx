import { useState } from "react";
import StudentCard from "./studentCard";

function Form() {
  const [name, setName] = useState("");
  const [regNo, setRegNo] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const[course, setCourse] = useState("");
  const [gender, setGender] = useState("");
  const [image, setImage] = useState("");

const [errors, setErrors] = useState({});
const [message, setMessage] = useState("");
const [students, setStudents] = useState([]);


function





  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
      
  }
}
