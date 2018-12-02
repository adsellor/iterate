import React from 'react'

import BlogPosts from '../../components/blogPosts'

describe('Blogposts list', () => {
  const blogPostsListTree = shallow(<BlogPosts />)
  it('renders correctly', () => {
    expect(blogPostsListTree).toMatchSnapshot()
  })
  it('renders children', () => {
    expect(blogPostsListTree.find('MappedPosts')).toBeTruthy
  })
})
