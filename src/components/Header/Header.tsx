import styles from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={styles.headerBlock}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="users">All users</NavLink>
            <NavLink to="posts">All posts</NavLink>
            <NavLink to="comments">All comments</NavLink>
        </div>
    );
};

export {Header};