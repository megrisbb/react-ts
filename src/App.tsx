import React, {useState} from 'react';

import './App.css';
import styles from './App.module.css'

import {getUsersPost} from "./services/axiosService";

import {IPosts} from "./interfaces/IPosts";

import {Users} from "./components/Users/Users";
import {Posts} from "./components/Posts/Posts";

function App() {

    const [posts, setPosts] = useState<IPosts[]>([])

    const lift = (userId:number) => {
        getUsersPost(userId).then(({data:{posts}}) => {
            setPosts(posts)
        })
    };

  return (
    <div className={styles.bodyBlock}>
       <div className={styles.users} ><Users lift={lift}/></div>
        <div className={styles.posts}><Posts posts={posts}/></div>
    </div>
  );
}

export default App;
