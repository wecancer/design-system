import React from 'react'

import Avatar from '.'
import {render} from '../../testing'

describe('<Avatar />', () => {
  it('should render snapshot correctly', () => {
    const {container} = render(
      <>
        <Avatar src="https://randomuser.me/api/portraits/women/42.jpg" />
        <Avatar initials="ANA" />
        <Avatar initials="ANA" size={100} />
        <Avatar initials="ANA" status="away" />
        <Avatar initials="ANA" status="busy" />
        <Avatar initials="ANA" status="online" />
        <Avatar initials="ANA" src="https://randomuser.me/api/portraits/women/42.jpg" />
        <Avatar src="https://randomuser.me/api/portraits/women/42.jpg" status="away" />
        <Avatar src="https://randomuser.me/api/portraits/women/42.jpg" status="busy" />
        <Avatar src="https://randomuser.me/api/portraits/women/42.jpg" status="online" />
      </>,
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should have the image tag with src property', () => {
    const {container} = render(<Avatar src="https://randomuser.me/api/portraits/women/42.jpg" />)
    expect(container.querySelector('img')).toHaveProperty('src')
  })

  it('must not have an image tag when src is not defined', () => {
    const {container} = render(<Avatar initials="AB" />)
    expect(container.querySelector('img')).toBeNull()
  })
})
