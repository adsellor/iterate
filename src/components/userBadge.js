import React from 'react'

import 'styles/components/avatar.scss'

type UserBadgeProps = {
  avatar: string,
}

const UserBadge = (props: UserBadgeProps) => (
  <img className="avatar" src={props.avatar} alt="avatar" />
)

export default UserBadge
