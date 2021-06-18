import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Blog from './Blog'

describe('Blog component tests', () => {
  let blog = {
    title: 'React patterns',
    author: 'Michael Chan',
    url: 'https://reactpatterns.com/',
    likes: 7
  }

  let mupdate = jest.fn()
  let mdelete = jest.fn()

  test('renders title and author', () => {
    const component = render(
      <Blog
        blog={blog}
        updateBlog={mupdate}
        deleteBlog={mdelete}
      />
    )
    expect(component.container).toHaveTextContent(
      'React patterns - Michael Chan'
    )
  })

  test('clicking the view button displays url and number of likes', () => {
    const component = render(
      <Blog
        blog={blog}
        updateBlog={mupdate}
        deleteBlog={mdelete}
      />
    )

    const button = component.getByText('view')
    fireEvent.click(button)

    expect(component.container).toHaveTextContent('https://reactpatterns.com/')

    expect(component.container).toHaveTextContent('7')
  })
})
