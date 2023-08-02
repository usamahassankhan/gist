import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Octicon from "react-octicon";
import Search from "./Search";
import { getGistForUser } from "../services/gistService";
import { useDispatch } from "react-redux";
import { notFound, setSearch } from "../redux/gistSlice";

function Header() {
  const dispatch = useDispatch();
  const [searchString, setSearchString] = useState("");

  const getSearchData = async (value) => {
    try {
      if (value.trim().length > 0) {
        const res = await getGistForUser(value);
        dispatch(setSearch(res.data));
        dispatch(notFound(res.data.length === 0));
      } else {
        dispatch(setSearch([]));
        dispatch(notFound(false));
      }
    } catch (error) {
      dispatch(setSearch([]));
      dispatch(notFound(false));
    }
  };

  useEffect(() => {
    const getData = setTimeout(() => {
      getSearchData(searchString);
    }, 500);

    return () => clearTimeout(getData);
  }, [searchString]);
  return (
    <Wrapper>
      <Octicon name="mark-github" mega />
      <Search
        onChange={(value) => {
          setSearchString(value);
        }}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #24292e;
  color: #ffffff;
  z-index: 32;
  padding: 16px;
  font-size: 14px;
  line-height: 1.5;
  display: flex;
  align-items: center;
`;

export default Header;
