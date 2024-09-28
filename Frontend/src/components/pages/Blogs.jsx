import React from 'react'
import { Link } from 'react-router-dom';
import { Blog1, Blog2, Blog3, Blogimg } from '../indeximages';
function Blogs() {
 
    const blogPosts = [
      {
        id: 1,
        title: 'Why Buying a Home is Better Than Renting: A Simple Guide to Making the Right Choice',
        description: 'In the age-old debate of buying versus renting, many people find themselves pondering which option....',
        image: Blog1,
        date: 'September 25, 2024',
      },
      {
        id: 2,
        title: 'The Future of Sustainable Real Estate: Trends and Innovations',
        description: 'As the world becomes more environmentally conscious, sustainable real estate practice....',
        image: Blog2,
        date: 'September 20, 2024',
      },
      {
        id: 3,
        title: 'The Importance of Home: A Cornerstone of Our Lives',
        description: 'In today’s fast-paced world, the concept of home holds profound significance that goes far......',
        image: Blog3,
        date: 'September 28, 2024',
      },
      // Add more blog posts as needed
    ];
  
    return (
      <div className="blogs-page   py-16">
        <img 
        src={Blogimg}
        alt="Header"
        className="object-cover w-full h-full"
      />
      <div className="container mx-auto p-4 lg:mx-8 ">
        <h1 className="text-2xl lg:text-3xl font-semibold text-center text-primary mt-4 mb-4">Our Blog</h1>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
      </div>
    );
  };
  
  const BlogCard = ({ blog }) => {
    return (
      <Link to={`/blogs/${blog.id}`} className="">
      <div className="blog-card bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-all duration-700 transform md:hover:scale-105">
       
        <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
  
        
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">{blog.title}</h3>
          <p className="text-gray-600 mb-3">{blog.description}</p>
          <p className="text-gray-500 text-sm mb-4">Published on {blog.date}</p>
          
            Read More
        
        </div>
      </div>
      </Link>
    );
  };
  

export default Blogs