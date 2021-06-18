import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { like, deleteBlog } from '../reducers/blogReducer'
import { setNotification } from '../reducers/notificationReducer'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

const Blog = ({ blog }) => {
  const dispatch = useDispatch()

  const [visible, setVisible] = useState(false)
  const show = { display: visible ? '' : 'none' }
  const bLabel = visible ? 'hide' : 'view'

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  const incLikes = () => {
    dispatch(like(blog))
    dispatch(
      setNotification(`Blog ${blog.title} successfully updated`, 'success', 5)
    )
  }

  const rmv = () => {
    dispatch(deleteBlog(blog.id))
    dispatch(
      setNotification(`Blog ${blog.title} successfully deleted`, 'success', 5)
    )
  }

  return (
    <tr>
      <td>
        <div className="blog">
          <div>
            <p>
            <Link to={`/blogs/${blog.id}`}>{blog.title} - {blog.author}</Link>{' '}
              <Button variant="primary" onClick={toggleVisibility}>{bLabel}</Button>
            </p>
          </div>
          <div style={show}>
            <p>{blog.url}</p>
            <p>
              {blog.likes}{' '}
              <Button variant="primary" id="like-button" onClick={incLikes}>
                like
              </Button>
            </p>
            <Button variant="danger" id="remove" onClick={rmv}>
              remove
            </Button>
          </div>
        </div>
      </td>
    </tr>
  )
}

Blog.propTypes = {
  blog: PropTypes.object.isRequired
}

export default Blog
