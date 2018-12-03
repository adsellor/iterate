import React from 'react'
import BlogPostCard from '../../components/blogCard'

describe('BlogPostCard renders', () => {
  test('BlogPostCard renders', () => {
    const blogPostCard = shallow(<BlogPostCard />)
    expect(blogPostCard.find('p').length).toBe(1)
    expect(blogPostCard.find('img').length).toBe(1)
  })
  test('BlogPostCard renders with correct props', () => {
    const src = 'src/images/logo.png'
    const title = 'Test title'
    const excerpt = 'This is the test article preview'
    const blogPostCard = shallow(
      <BlogPostCard src={src} title={title} excerpt={excerpt} />
    )
    expect(blogPostCard.find('img').props().src).toEqual(`${src}`)
    // no need for this further, gatsby gives ready excerpt
    expect(blogPostCard.find('div.blog-posts-card-content').text()).toBe(
      `${title + 'by ' + excerpt + '...'}`
    )
  })
})
