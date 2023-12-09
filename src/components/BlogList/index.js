// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

//

const BlogList = props => {
  const {blogsList} = props
  // console.log(blogsList)

  return (
    <div className="blog-list-container">
      {blogsList.map(eachBlogItem => (
        <BlogItem key={eachBlogItem.id} blogItemDetails={eachBlogItem} />
      ))}
    </div>
  )
}

export default BlogList