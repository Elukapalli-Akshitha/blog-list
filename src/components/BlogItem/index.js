// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogItemDetails} = props
  const {title, description, publishedDate} = blogItemDetails

  return (
    <div className="blog-item-container">
      <div className="blog-item-top-container">
        <h1 className="title">{title}</h1>
        <p className="published-date">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
    </div>
  )
}

export default BlogItem