import User from "../User";
import UserContext from "../../utils/UserContext";
import {useContext} from "react";

const About = () => {

    const user = useContext(UserContext);

    return (
        <div>
            <User user={user.loggedInUser} />
        </div>
    )
}
export default About;