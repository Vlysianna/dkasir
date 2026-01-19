const Blog = () => {
  const posts = [
    {
      image: "/blog-1.png",
      title: "Lorem ipsum dolor",
      excerpt: "Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    },
    {
      image: "/blog-2.png",
      title: "Lorem ipsum dolor",
      excerpt: "Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    },
    {
      image: "/blog-3.png",
      title: "Lorem ipsum dolor",
      excerpt: "Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    }
  ];

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Blog & Artikel
          </h2>
          <p className="text-lg text-gray-600">
            Tips dan informasi terkini untuk mengembangkan bisnis Anda
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <button className="text-[#254D00] font-semibold hover:text-[#7CFF00] transition-colors duration-300 flex items-center">
                  Read more
                  <i className="fas fa-arrow-right ml-2"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
