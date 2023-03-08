import React from "react";
import Card from "./Card";
import styled from "styled-components";
import CardTaillwind from "./CardTaillwind";
import Card2 from "./Card2";

const CardListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 10px;
  gap: 90px 30px;
  padding: 30px;
  height: 900px;
  overflow-y: auto;
  /* grid-auto-flow: column; */
  /* grid-auto-columns: 300px;
  /* list-style: none;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  height: 100%; */
`;
const CardList = () => {
  const cards = [
    { amount: 200, secondary: true },
    { amount: 500, secondary: false },
    { amount: 1000, secondary: true },
    { amount: 250, secondary: false },
    { amount: 750, secondary: true },
    { amount: 1200, secondary: false },
    { amount: 350, secondary: true },
    { amount: 900, secondary: false },
    { amount: 600, secondary: true },
    { amount: 150, secondary: false },
  ];
  return (
    <CardListWrapper>
      {cards.map((item, index) => {
        return (
          <div key={index}>
            <Card
              amount={item.amount}
              secondary={item.amount > 700 ? true : false}
              style={{ maxWidth: "200px" }}
            ></Card>
            <Card2 secondary={true}></Card2>
            <CardTaillwind
              primary={item.amount > 300}
              // fontSize="text-2xl" -- doi font size tu props tailwind
            ></CardTaillwind>
          </div>
        );
      })}
    </CardListWrapper>
  );
};

export default CardList;
