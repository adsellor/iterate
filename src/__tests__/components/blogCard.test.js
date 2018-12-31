import React from 'react'
import Card from 'components/blogCard'

describe('Card renders', () => {
  test('Card renders', () => {
    const Card = shallow(<Card />)
    expect(Card.find('p').length).toBe(1)
    expect(Card.find('img').length).toBe(1)
  })
  test('Card renders with correct props', () => {
    const src = 'src/images/logo.png'
    const title = 'Test title'
    const excerpt = 'This is the test article preview'
    const Card = shallow(
      <Card src={src} title={title} excerpt={excerpt} />
    )
    expect(Card.find('img').props().src).toEqual(`${src}`)
    //! no need for this further, gatsby gives ready excerpt
    // TODO: delete
    expect(Card.find('div.blog-posts-card-content').text()).toBe(
      `${title + 'by ' + excerpt + '...'}`
    )
  })
})
