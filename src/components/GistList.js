import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPublicGists } from "../services/gistService";
import { setGist, setSearch } from "../redux/gistSlice";
import styled, { keyframes } from "styled-components";
import Gist from "./Gist";
import { BiLoaderCircle } from "react-icons/bi";

const GistList = () => {
  const { value, searchValue, notFound } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      const res = await getPublicGists();
      dispatch(setGist(res.data));
      setLoading(true);
    } catch (error) {
      dispatch(setSearch([]));
      dispatch(notFound(false));
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  //fetching  data
  useEffect(() => {
    getData();
  }, []);

  // If No Data is available
  if (notFound) {
    return <Container>Not found</Container>;
  }

  //  Conditionally rendering data if any value in search otherwise show old data
  return (
    <Container>
      {!loading ? (
        <GistListWrapper>
          {searchValue.length > 0
            ? searchValue.map((gist) => <Gist key={gist.id} gist={gist} />)
            : value.map((gist) => <Gist key={gist.id} gist={gist} />)}
        </GistListWrapper>
      ) : (
        <GistListLoader>
          <LoaderAnimation>
            <BiLoaderCircle size={40} />
          </LoaderAnimation>
        </GistListLoader>
      )}
    </Container>
  );
};

const Container = styled.div`
  height: calc(100vh - 68px);
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;
const GistListWrapper = styled.div`
  padding: 10px;
`;
const GistListLoader = styled.div`
  padding: 200px;
`;
const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoaderAnimation = styled.div`
  animation: ${rotateAnimation} 1s linear infinite;
`;
export default GistList;
