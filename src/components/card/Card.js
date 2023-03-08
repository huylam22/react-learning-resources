import React from "react";
import styled, { css } from "styled-components";

/**

const StyledCard = styled.tag (properties la nhung cai the su dung trong html eg: h1, g2, span, strong) ``
CSS-in-JS 
 */

const StyledCard = styled.div`
  position: relative;
`;

const CardImage = styled.div`
  height: 400px;
  width: 100%;
  border-radius: 8px;
`;

const CardImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  object-fit: cover;
`;

const CardContent = styled.div`
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
`;

const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const CardUser = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
`;

const UserAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100rem;
  flex-shrink: 0;
  object-fit: cover;
`;
const UserName = styled.span`
  font-weight: 300;
  font-size: 16px;
  color: #333;
`;
const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: black;
`;

const CardAmount = styled.span`
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
  /* Format the amount with commas */
`;

const CardMeta = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 12px;
  align-items: center;
`;
const Card = (props) => {
  // console.log("🚀 ~ file: Card.js:108 ~ Card ~ props:", props);
  return (
    <StyledCard>
      <CardImage>
        <CardImg
          src="https://cdn.dribbble.com/users/2400293/screenshots/20320748/media/0ce30d2aa1222c487426145c6d46b821.png?compress=1&resize=1600x1200&vertical=top"
          alt=""
        ></CardImg>
      </CardImage>

      <CardContent>
        <CardTop>
          <CardUser>
            <UserAvatar
              src="https://cdn.dribbble.com/users/2400293/screenshots/20320748/media/0ce30d2aa1222c487426145c6d46b821.png?compress=1&resize=1600x1200&vertical=top"
              alt=""
            />
            <UserName>@zndrson</UserName>
          </CardUser>
          <CardMeta>
            <img src="/heart.svg" alt="" />
            <span>256</span>
          </CardMeta>
        </CardTop>
        <CardFooter>
          <CardTitle>Cosmic Perspective</CardTitle>
          <CardAmount secondary={props.secondary} fontSize="22px">
            {props.amount} PSL
          </CardAmount>
        </CardFooter>
      </CardContent>
    </StyledCard>
  );
};

export default Card;
