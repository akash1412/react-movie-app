import React from 'react';

import styled from 'styled-components';

import Heading from '../heading/heading.component';

import CollectionOverview from '../collection-overview/collection-overview.component';

const ProfileImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30rem;
  margin: 0 auto;
  border-radius: 0.8rem;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.8rem;
  box-shadow: 0px 20px 40px rgba(0, 38, 81, 0.3);
`;

const Profile = ({ profileData }) => {
  const { name, profile_path, known_for } = profileData;

  if (!profileData) {
    return;
  }

  return (
    <div>
      Profile
      <ProfileImageWrapper>
        <Img
          src={`${process.env.REACT_APP_IMAGE_URL}${profile_path}`}
          alt={name}
        />
        <Heading title={name} size={1.8} padding=".8rem 0 0 0" />
      </ProfileImageWrapper>
      <Heading title="known for" />
      <CollectionOverview collection={known_for || []} />
    </div>
  );
};

export default Profile;
