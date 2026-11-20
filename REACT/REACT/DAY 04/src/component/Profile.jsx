import { useContext } from "react";
import { UserContext } from "./UserContext";

function Profile() {
    const user = useContext(UserContext);
    return <h3>Hello {user}</h3>;
}

export default Profile;