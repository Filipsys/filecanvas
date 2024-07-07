// import { PostsDBAPI } from "../data/posts"; @vercel/postgres


export default async function HomeFeed() {
  // const { rows } = await PostsDBAPI.getPosts(); @vercel/postgres

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="font-bold text-3xl">
        Hello world!
      </h1>

      <button className="px-40 py-2 bg-blue-500 text-white rounded-md">
        Click me
      </button>
    </div>
  );
}
