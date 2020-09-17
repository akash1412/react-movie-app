import React, { useState } from 'react';

import styled from 'styled-components';

import { useHistory } from 'react-router-dom';

const SearchForm = styled.form`
  border: 2px solid #fff;
  display: flex;
  align-items: center;
  border-radius: 50px;
  height: 4rem;
  width: 4rem;
  padding: 3px;
  background-color:#071e3d;
  position: relative;
  overflow: hidden;
  transition: width 300ms ease-in-out;

  &:focus-within {
    width: 230px;

    & > :nth-child(1) {
      opacity: 1;
      cursor: initial;
      
    }

    & > :nth-child(2) {
       
      color: #fff;
    }
  }
`;

const Input = styled.input`
  flex-grow: 1;
  font-size: 1.5rem;
  padding: 0 0.5em;
  background: transparent;
  border: 0;
  position: absolute;
  color:#fff;
  top: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;

  &:focus {
    outline: 0;
  }
`;

const Button = styled.button`
  display: inline-block;
  font-size: 1.5rem;
  cursor: pointer;
  border: 0;
  background: transparent;
  border-radius: 50%;
  width: calc(4rem - 1rem);
  height: calc(4rem - 1rem);
  margin-left: auto;
  color:#fff;
  transition: background 150ms ease-in-out;

  &:focus,
  &:hover {
    outline: 0;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  }
`;

const Searchbar = () => {
  let history = useHistory();

  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const pushTo = value.split(' ').join('%20');
    console.log(pushTo);
    history.push(`/search?q=${pushTo}`);
    setValue('');
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <Input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="enter your search"
        aria-label="search"
        required
      />
      <Button aria-label="submit search">
        <i className="fa fa-search"></i>
      </Button>
    </SearchForm>
  );
};

export default Searchbar;
