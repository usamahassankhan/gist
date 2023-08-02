import React from "react";
import styled from "styled-components";
import { FiCode } from "react-icons/fi";
import { AiOutlineFork } from "react-icons/ai";
import { TfiComment } from "react-icons/tfi";
import { LiaStarSolid } from "react-icons/lia";
import { BsFileEarmarkText } from "react-icons/bs";
import moment from "moment";
import PropTypes from "prop-types";

// Single Gist Component

const Gist = ({ gist }) => {
  if (Object.keys(gist).length === 0) {
    return <></>;
  }

  return (
    <GistContainer>
      <GistHeader>
        <ItemGroup>
          <Avatar src={gist?.owner.avatar_url} size={20} />
          <Link href={gist?.owner.html_url} target="_blank">
            {gist?.owner.login}
          </Link>
        </ItemGroup>

        <ItemGroup>
          <FiCode size={20} />
          <Link href={gist?.url} target="_blank">
            {Object.keys(gist?.files).length} Files
          </Link>
          <AiOutlineFork size={20} />
          <Link href={gist?.forks_url} target="_blank">
            Forks
          </Link>
          <TfiComment size={20} />
          <Link href={gist?.comments_url} target="_blank">
            Comments
          </Link>
          <LiaStarSolid size={20} />
          <Link href={gist?.owner.html_url} target="_blank">
            Stars
          </Link>
        </ItemGroup>
        <GistMetaInfo>
          <ItemGroup>
            Created At: {moment(gist.created_at).format("MM/DD/YYYY")}
          </ItemGroup>
          <ItemGroup>
            Last Updated At: {moment(gist.updated_at).format("MM/DD/YYYY")}
          </ItemGroup>
        </GistMetaInfo>
      </GistHeader>
      <GistDescription>
        {gist?.description ? gist?.description : "description not available"}
      </GistDescription>
      <GistFooter>
        {Object.keys(gist?.files).map((key) => (
          <ItemGroup key={gist?.files[key].raw_url}>
            <BsFileEarmarkText size={18} />
            <Link href={gist?.files[key].raw_url} target="_blank">
              {gist?.files[key].filename}
            </Link>
          </ItemGroup>
        ))}
      </GistFooter>
    </GistContainer>
  );
};

export default Gist;
Gist.propTypes = {
  gist: PropTypes.shape({
    owner: PropTypes.shape({
      avatar_url: PropTypes.string,
      html_url: PropTypes.string,
      login: PropTypes.string,
    }),
    url: PropTypes.string,
    files: PropTypes.objectOf(
      PropTypes.shape({
        raw_url: PropTypes.string,
        filename: PropTypes.string,
      })
    ),
    forks_url: PropTypes.string,
    comments_url: PropTypes.string,
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
    description: PropTypes.string,
  }),
};

const GistContainer = styled.div`
  width: 100%;
  max-width: 670px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

const GistHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #0265d6;
  padding: 10px;
  font-weight: 500;
  font-family: sans-serif;
  flex-wrap: wrap;
`;

const GistMetaInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  color: #5e5d5d;
  padding: 10px 0px;
  flex-wrap: wrap;
  font-weight: 400;
  font-size: 13px;
`;

const GistDescription = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  color: #5e5d5d;
  padding: 5px 20px;
  flex-wrap: wrap;
  font-size: 16px;
  font-weight: 500;
  word-break: break-word;
`;

const GistFooter = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #0265d6;
  padding: 10px;
  font-weight: 500;
  font-family: sans-serif;
  flex-wrap: wrap;
  padding: 10px 10px 40px 5px;
  border-bottom: 1px solid #e7e7e7;
`;

const ItemGroup = styled.div`
  display: flex;
  align-items: center;
  margin-left: 8px;
  padding: 5px;
  font-size: 14px;
`;

const Link = styled.a`
  text-decoration: none;
  color: #0265d6;
  padding: 0px 15px 0px 5px;
`;

const Avatar = styled.img`
  border-radius: 10em;
  height: 30px;
`;
