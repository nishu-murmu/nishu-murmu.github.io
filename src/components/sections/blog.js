import { Box, Heading } from "@chakra-ui/react";
import BlogItem from "./blogItem";
import "../../styles/sections/blog.css";

const Blog = () => {
  return (
    <Box>
      <Heading className="blog-heading">
        <strong>Blog</strong>
      </Heading>
      <Box className="blog_content">
        <BlogItem />
      </Box>
    </Box>
  );
};

export default Blog;
