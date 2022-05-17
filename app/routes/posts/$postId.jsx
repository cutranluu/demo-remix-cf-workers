import { useLoaderData } from "@remix-run/react";

export async function loader({ params }) {
    const { postId } = params
    const res = await (await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)).json();
    const data = {
        post: res,
    }
    return data
}

export default function PostDetail() {
    const { post } = useLoaderData()
    return (
        <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
            <h1>Post Detail</h1>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
}
