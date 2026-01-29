const Blog = () => {
  const posts = [
    {
      image: "/blog-1.png",
      title: "Lorem ipsum dolor",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ipsum lacus. Aliquam pharetra justo a facilisis tristique. Cras vel aliquam arcu. Vestibulum eget sem quis odio hendrerit blandit. Integer auctor sodales sem vel bibendum. Maecenas feugiat, eros non rutrum elementum, lectus tortor faucibus elit, pretium ultricies orci ipsum ac tellus. Etiam maximus mollis felis, sit amet rhoncus odio porta sed. Etiam eget sem..."
    },
    {
      image: "/blog-1.png",
      title: "Lorem ipsum dolor",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ipsum lacus. Aliquam pharetra justo a facilisis tristique. Cras vel aliquam arcu. Vestibulum eget sem quis odio hendrerit blandit. Integer auctor sodales sem vel bibendum. Maecenas feugiat, eros non rutrum elementum, lectus tortor faucibus elit, pretium ultricies orci ipsum ac tellus. Etiam maximus mollis felis, sit amet rhoncus odio porta sed. Etiam eget sem..."
    },
    {
      image: "/blog-1.png",
      title: "Lorem ipsum dolor",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ipsum lacus. Aliquam pharetra justo a facilisis tristique. Cras vel aliquam arcu. Vestibulum eget sem quis odio hendrerit blandit. Integer auctor sodales sem vel bibendum. Maecenas feugiat, eros non rutrum elementum, lectus tortor faucibus elit, pretium ultricies orci ipsum ac tellus. Etiam maximus mollis felis, sit amet rhoncus odio porta sed. Etiam eget sem..."
    },
    {
      image: "/blog-1.png",
      title: "Lorem ipsum dolor",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ipsum lacus. Aliquam pharetra justo a facilisis tristique. Cras vel aliquam arcu. Vestibulum eget sem quis odio hendrerit blandit. Integer auctor sodales sem vel bibendum. Maecenas feugiat, eros non rutrum elementum, lectus tortor faucibus elit, pretium ultricies orci ipsum ac tellus. Etiam maximus mollis felis, sit amet rhoncus odio porta sed. Etiam eget sem..."
    }
  ];

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Blog Kami
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-6">
                  {post.excerpt}
                </p>
                <button className="px-4 py-2 text-sm font-semibold text-[#254D00] border-2 border-[#7CFF00] rounded-lg hover:bg-[#7CFF00] hover:text-[#254D00] transition-colors duration-300">
                  Lihat Selengkapnya
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
