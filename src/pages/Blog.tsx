import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, TrendingUp } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Blog = () => {
  const featuredPost = {
    title: "The Future of Cryptocurrency investing: Trends to Watch in 2024",
    excerpt: "Explore the latest developments in cryptocurrency investing, from DeFi innovations to institutional adoption and regulatory changes.",
    author: "Sarah Johnson",
    date: "March 15, 2024",
    readTime: "8 min read",
    image: "/img-uploads/21f3edfb-62b5-4e35-9d03-7339d803b980.png",
    category: "Market Analysis"
  };

  const blogPosts = [
    {
      title: "Understanding Bitcoin's Lightning Network",
      excerpt: "A comprehensive guide to Bitcoin's second-layer solution and its impact on transaction speed and fees.",
      author: "Michael Chen",
      date: "March 12, 2024",
      readTime: "6 min read",
      image: "/img-uploads/79f2b901-8a4e-42a5-939f-fae0828e0aef.png",
      category: "Technology"
    },
    {
      title: "Risk Management in Crypto investing",
      excerpt: "Essential strategies to protect your portfolio and manage risk in the volatile cryptocurrency market.",
      author: "Emma Rodriguez",
      date: "March 10, 2024",
      readTime: "7 min read",
      image: "/img-uploads/7335619d-58a9-41ad-a233-f7826f56f3e9.png",
      category: "Education"
    },
    {
      title: "DeFi Yield Farming: Opportunities and Risks",
      excerpt: "Explore the world of decentralized finance and learn about yield farming strategies and potential pitfalls.",
      author: "David Kim",
      date: "March 8, 2024",
      readTime: "9 min read",
      image: "/img-uploads/5830bd79-3511-41dc-af6c-8db32d91fc2c.png",
      category: "DeFi"
    },
    {
      title: "Technical Analysis: Chart Patterns for Crypto",
      excerpt: "Master the art of technical analysis with key chart patterns that can help predict cryptocurrency price movements.",
      author: "Lisa Thompson",
      date: "March 5, 2024",
      readTime: "5 min read",
      image: "/img-uploads/b6436838-5c1a-419a-9cdc-1f9867df073d.png",
      category: "investing"
    },
    {
      title: "Regulatory Updates: Global Crypto Landscape",
      excerpt: "Stay updated on the latest regulatory developments affecting cryptocurrency investing worldwide.",
      author: "James Wilson",
      date: "March 3, 2024",
      readTime: "6 min read",
      image: "/img-uploads/a2c0bb3a-a47b-40bf-ba26-d79f2f9e741b.png",
      category: "Regulation"
    },
    {
      title: "Staking vs investing: Which Strategy is Right for You?",
      excerpt: "Compare passive income through staking with active investing strategies to find the best approach for your goals.",
      author: "Alex Turner",
      date: "March 1, 2024",
      readTime: "8 min read",
      image: "/img-uploads/bb50362c-6879-4868-bbc9-c6e051fd8d7d.png",
      category: "Strategy"
    }
  ];

  const categories = ["All", "Market Analysis", "Technology", "Education", "DeFi", "investing", "Regulation", "Strategy"];

  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative container px-4 pt-40 pb-20"
      >
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Investment & Wealth <span className="text-primary">Blog</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            How to Build Wealth Safely: A Beginner’s Guide to Long-Term Investing
          </p>
        </div>
      </motion.section>

      {/* Categories */}
      <section className="container px-4 mb-12">
        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                index === 0 
                  ? 'bg-primary text-primary-foreground' 
                  : 'glass hover:border-primary/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Post */}
      <section className="container px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass rounded-xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full">
                  {featuredPost.category}
                </span>
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="text-xs text-primary">Featured</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {featuredPost.title}
              </h2>
              
              <p className="text-muted-foreground mb-6">
                {featuredPost.excerpt}
              </p>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {featuredPost.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {featuredPost.date}
                </div>
                <span>{featuredPost.readTime}</span>
              </div>
              
              <button className="button-gradient px-6 py-3 rounded-lg font-medium flex items-center gap-2">
                Read Full Article
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            
            <div className="lg:p-4">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Blog Grid */}
      <section className="container px-4 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Latest Articles</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-medium bg-black/80 text-white rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="glass px-8 py-3 rounded-lg font-medium hover:border-primary/50 transition-all duration-300">
            Load More Articles
          </button>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="container px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Never miss an update
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest crypto investing insights delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-black/50 border border-white/10 focus:border-primary/50 focus:outline-none"
            />
            <button className="button-gradient px-6 py-3 rounded-lg font-medium">
              Subscribe
            </button>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;