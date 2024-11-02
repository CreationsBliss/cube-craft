import { Link } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-116px)] flex flex-col justify-center">
      <section className="text-gray-100">
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-5xl">
          <TypeAnimation
            sequence={[
              'Explore New Perspectives',
              2000,
              'Your Daily Inspiration',
              2000,
              'Thoughts Unfiltered',
              2000,
            ]}
            wrapper="span"
            speed={30}
            style={{ fontSize: '2.95rem', fontWeight: 700, display: 'inline-block' }}
            repeat={Infinity}
          />
          <p className="px-24 mt-8 mb-12 text-lg">
            Welcome to our blog, where stories, insights, and ideas come alive. Dive into a world of inspiration to thought-provoking reflections.</p>
          <div className="flex flex-wrap justify-center">
            <Link to="/blogs" className="px-8 py-3 m-2 text-lg border rounded text-gray-50 border-gray-700 transition duration-300 ease-out hover:ring-1 hover:ring-purple-500">Read Blogs</Link>

            <Link to="/bookmarks" className="px-8 py-3 m-2 text-lg border rounded text-gray-50 border-gray-700 transition duration-300 ease-out hover:ring-1 hover:ring-purple-500">Bookmarks</Link>
          </div>
        </div>
      </section>
      <p></p>
    </div>
  );
};

export default Home;