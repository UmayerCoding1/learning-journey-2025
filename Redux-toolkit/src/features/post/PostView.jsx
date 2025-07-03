import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost } from './PostSlice';

const PostView = () => {
    const {isLoading,post,error} = useSelector((state) => state.post);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPost());
    }, [])
    return (
        <div style={{marginTop: '20px'}}> 
            {isLoading && <h3>Loding .. </h3>}
            {error && <h3> {error}</h3>}
            <section>
                {post && post?.map((post) => {
                return (
                    <article className='article'>
                        <h5>{post.title}</h5>
                        <p>{post.body}</p>
                    </article>
                )
            })}
            </section>
        </div>
    );
};

export default PostView;