import {NavLink} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <NavLink to="/">home page</NavLink>
            <br/>
            <NavLink to="users">users page</NavLink>
            <br/>
            <NavLink to="posts">posts page</NavLink>
            <br/>
            <NavLink to="comments">comments page</NavLink>
            <hr/>
        </div>
    );
};

export {HeaderComponent};