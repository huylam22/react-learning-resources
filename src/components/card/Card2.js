import React from "react";
import styled, { css } from "styled-components";

/**

const StyledCard = styled.tag (properties la nhung cai the su dung trong html eg: h1, g2, span, strong) ``
CSS-in-JS 
 */

const StyledCard = styled.div`
  position: relative;
  .card-image {
    height: 400px;
    width: 100%;
    border-radius: 8px;
    img {
      display: block;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      object-fit: cover;
    }
  }

  .card-content {
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    width: calc(100% - 36px);
    /* width: 100%; */
    height: 127px;
    transform: translate(-50%, 50%);
    background-color: white;
    border-radius: 20px;
    border: 1px solid #eee;
    z-index: 10;
    padding: 20px;
    bottom: 0;
  }

  .card-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .card-user {
    display: flex;
    align-items: center;
    column-gap: 12px;
  }

  .user-avatar {
    width: 30px;
    height: 30px;
    border-radius: 100rem;
    flex-shrink: 0;
    object-fit: cover;
  }

  .user-name {
    font-weight: 300;
    font-size: 16px;
    color: ${(props) => props.theme.orange};
  }

  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .card-title {
    font-size: 18px;
    font-weight: 500;
    color: ${(props) => props.theme.colors.blue};
  }
  .card-amount {
    font-size: ${(props) => props.fontSize || "18px"};
    font-weight: bold;

    ${(props) =>
      props.secondary &&
      css`
        background: linear-gradient(86.88deg, #20e3b2 1.38%, #2cccff 64.35%);
      `};

    ${(props) =>
      !props.secondary &&
      css`
        background: linear-gradient(
          86.88deg,
          #7d6aff 1.38%,
          #ffb86c 64.35%,
          #fc2872 119.91%
        );
      `};
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }
`;

const CardMeta = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 12px;
  align-items: center;
`;
const Card2 = (props) => {
  return (
    <StyledCard secondary={props.secondary}>
      <div className="card-image">
        <img
          src="https://cdn.dribbble.com/users/2400293/screenshots/20320748/media/0ce30d2aa1222c487426145c6d46b821.png?compress=1&resize=1600x1200&vertical=top"
          alt=""
        ></img>
      </div>

      <div className="card-content">
        <div className="card-top">
          <div className="card-user">
            <img
              className="user-avatar"
              src="https://cdn.dribbble.com/users/2400293/screenshots/20320748/media/0ce30d2aa1222c487426145c6d46b821.png?compress=1&resize=1600x1200&vertical=top"
              alt=""
            />
            <span className="user-name">@zndrson</span>
          </div>
          <CardMeta>
            <img src="/heart.svg" alt="" />
            <span>256</span>
          </CardMeta>
        </div>
        <div className="card-footer">
          <h3 className="card-title">Cosmic Perspective</h3>
          <span className="card-amount" fontSize="22px">
            12,000 PSL
          </span>
        </div>
      </div>
    </StyledCard>
  );
};

export default Card2;
