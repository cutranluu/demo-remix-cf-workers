import { useLoaderData, Link } from "@remix-run/react";

export async function loader() {
    const res = await (await fetch("https://jsonplaceholder.typicode.com/posts")).json();
    const data = {
        posts: res,
    }
    return data
}

function PostsList() {
    const { posts } = useLoaderData()
    return (
        <>
            <div className='page-header'>
                <h1>Posts</h1>
            </div>
            <ul className='posts-list'>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link to={`/posts/${post.id}`}>
                            <h3>{post.title}</h3>
                        </Link>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default PostsList
