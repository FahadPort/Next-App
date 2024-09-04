import Link from "next/link";

async function getPostData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}
async function getUserData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
}

const Posts = async () => {
  // const posts = await getPostData();

  const [posts, users] = await Promise.all([getPostData(), getUserData()]);

  return (
    <div>
      <h1>Users S</h1>

      {users.map((user, index) => (
        <p key={index}>{user.name}</p>
      ))}

      <h1>Post</h1>

      <ul>
        {posts.map((post) => (
          <li key={post.id} className="bg-gray-100 p-5 mb-5">
            <Link href={`/post/${post.id}`}>
              <h4>{post.title}</h4>
              <p>{post.body}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
