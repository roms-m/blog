import './home.css';

import Header from './../../header/header';
import Posts from './../../posts/posts';
import Sidebar from './../../sidebar/sidebar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function Home() {
    const [posts, setPosts] = useState([]);
    const {search} = useLocation();

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get(`/posts${search}`);
            setPosts(res.data);
        };
        fetchPosts();
    }, [search]);
    
    useEffect(() => {
        const fetchPosts = async ()=>{
            const res = await axios.get("/posts")
            setPosts(res.data)
        }
        fetchPosts();
    }, []);
    return (
        <>
            <Header />
            <div className="home">
                <Posts posts={posts} />
                <Sidebar />
            </div>
        </>
    )
}

export default Home;