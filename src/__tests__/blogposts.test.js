import React from 'react'
import BlogPostCard from '../components/blogCard'

describe('BlogPostCard renders', () => {
  test('BlogPostCard renders', () => {
    const blogPostCard = shallow(<BlogPostCard />)
    expect(blogPostCard.find('p').length).toBe(2)
    expect(blogPostCard.find('img').length).toBe(1)
  })
  test('BlogPostCard renders with correct props', () => {
    const src = 'src/images/logo.png'
    const title = 'Test title'
    const preview = 'This is the test article preview'
    const blogPostCard = shallow(
      <BlogPostCard src={src} title={title} preview={preview} />
    )
    expect(blogPostCard.find('img').props().src).toEqual(`${src}`)
    expect(blogPostCard.find('p.article-title').text()).toBe(`${title}`)
    expect(blogPostCard.find('p.article-preview').text()).toBe(`${preview}`)
  })
})
