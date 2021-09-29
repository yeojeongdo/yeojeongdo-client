import styled from "@emotion/styled";

export const AlbumItemContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 24px;
  & > div {
    display: flex;
    align-items: center;
  }
  div > img {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    object-fit: cover;
  }
  div > h4 {
    margin: 0;
    text-align: start;
  }
  & > p {
    text-align: start;
    margin: 0;
  }
  & > img {
    width: 100%;
  }
`;