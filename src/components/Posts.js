import React from 'react'

export const Posts = ({posts}) => {
    return (
        <ul>
            
            {posts.map((post,i) => <li key={i}>{post}</li>)}
        </ul>
    )
}
