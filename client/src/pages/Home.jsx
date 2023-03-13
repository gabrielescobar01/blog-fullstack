import React from "react";
import { Link } from "react-router-dom";



const posts = [
  {
    id: 1,
    title: "Post 1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate nisl. Sed vulputate nisl. Donec vulputate nisl. Sed vulputate nisl. Donec vulputate nisl. Sed vulputate nisl.",
    img: "https://media.timeout.com/images/105795964/image.jpg",
  },
  {
    id: 2,
    title: "Post 2",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate nisl. Sed vulputate nisl. Donec vulputate nisl. Sed vulputate nisl. Donec vulputate nisl. Sed vulputate nisl.",
    img: "https://lh3.googleusercontent.com/ci/AEwo86cTH7FO43B5nGMBhwzeV3F9K06AERF5nZiEJ4itGPCH6U9qAluqhdd-v1zl6skMBDvVxtqN=s1200",
  },
  {
    id: 3,
    title: "Post 3",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate nisl. Sed vulputate nisl. Donec vulputate nisl. Sed vulputate nisl. Donec vulputate nisl. Sed vulputate nisl.",
    img: "https://greensoncouncil.wp.greens.org.au/wp-content/uploads/sites/72/2021/11/art-auction-10e3hqz.jpg",
  },
  {
    id: 4,
    title: "Post 4",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate nisl. Sed vulputate nisl. Donec vulputate nisl. Sed vulputate nisl. Donec vulputate nisl. Sed vulputate nisl.",
    img: "https://cdn.sanity.io/images/f23a1pgq/pma_production/aa9a2941676b9d324369ea801bbc23d2171cefeb-2500x1800.jpg?rect=207,98,2090,1568&bg=f2f2f2&w=640&h=480&q=80&fit=clip",
  },
];

const Home = () => {
  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>

            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
              <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
