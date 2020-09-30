import React from 'react';

import './UserCardAvatar.scss';

interface UserCardAvatarProps {
  alt: string;
  src: string;
}

export const UserCardAvatar: React.FunctionComponent<UserCardAvatarProps> = props => {
  return (
    <div className="UserCardAvatar-container">
      <img src={props.src} alt={props.alt}></img>
    </div>
  );
}
