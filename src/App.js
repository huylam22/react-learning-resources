// import { useEffect, useRef, useState } from "react";
// import { useState } from "react";
import "./App.css";
// import SignUpForm from "./components/form/SignUpForm";
// import SignUpFormFinal from "./components/form/SignUpFormFinal";
import SignUpFormHook from "./components/form/SignUpFormHook";
// import SignUpFormV2 from "./components/form/SignUpFormV2";
// import MovieSearchApp from "./components/MovieSearchApp";
// import Form from "./components/form/Form";
// import Blog from "./components/Blog";
// import DropDown from "./components/DropDown";
// import SideBarMenu from "./components/SideBarMenu";
// import useClickOutside from "./hooks/useClickOutside";
// import TextareaAutoResize from "./components/TextareaAutoResize";
// import Input from "./components/Input";
// import HackerNews from "./components/news/HackerNews";
// import HackerNewsEvon from "./components/news/HackerNewsEvon";
// import HackerNewsRemake from "./components/news/HackerNewsRemake";
// import HackerNewsWithHook from "./components/news/HackerNewsWithHook";
// import HackNewsWithUseReducer from "./components/news/HackNewsWithUseReducer";
// import Ref from "./components/Ref";
// import Header from "./components/Header";
// import Timer from "./components/Timer";

// import Button from "./components/button/Button";
// import Card from "./components/card/Card";
// import CardList from "./components/card/CardList";
// import { GlobalStyles } from "./GlobalStyles";
// import { ThemeProvider } from "styled-components";
// import Card2 from "./components/card/Card2";
// import Toggle from "./components/toggle/Toggle";
// import YouTubeList from "./components/youtube/YouTubeList";
// import Counter from "./components/counter/Counter";
// import Game from "./components/tictactoe/Game";
// import GameWithReducer from "./components/tictactoe/GameWithReducer";
// import Photos from "./components/photo/Photos";

function App() {
  // const theme = {
  //   colors: {
  //     blue: "#2979ff",
  //   },
  //   orange: "#ffa400",
  // };
  // const [show, setShow] = useState(false);
  // const { show, setShow, nodeRef } = useClickOutside("span");

  return (
    <div>
      {/* children: html, var */}
      {/* <YouTubeList>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
          asperiores iusto quas at fugit, dolorum consequatur cupiditate omnis,
          voluptates repellat laborum ullam dignissimos, saepe ipsa nisi sunt
          qui cumque facere.
          {name}
        </h2>
      </YouTubeList> */}
      {/* <Toggle></Toggle> */}
      {/* <Counter></Counter> */}
      {/* <Game></Game> */}
      {/* <GameWithReducer></GameWithReducer> */}
      {/* <Button>Primary</Button> */}
      {/* <Button className="button--secondary">Secondary</Button>
      <Button secondary>Secondary</Button>{" "} */}
      {/* styled-components (css module) */}
      {/* <Card></Card> */}
      {/* <ThemeProvider theme={theme}>
      <CardList></CardList>
      </ThemeProvider> */}
      {/* <GlobalStyles></GlobalStyles> */}
      {/* <Photos></Photos> */}
      {/* <Timer></Timer> */}
      {/* <Header></Header> */}
      {/* <HackerNews></HackerNews> */}
      {/* <HackNewsWithUseReducer></HackNewsWithUseReducer> */}
      {/* <Ref></Ref> */}
      {/* <Input></Input> */}
      {/* <TextareaAutoResize></TextareaAutoResize> */}

      {/* <DropDown></DropDown>
      <span
        onClick={() => setShow(true)}
        className="inline-block m-3 p-3 rounded-lg text-white bg-green-400"
      >
        {" "}
        Show Menu
      </span>
      <SideBarMenu show={show} ref={nodeRef}></SideBarMenu> */}
      {/* <Blog></Blog> */}
      {/* <HackerNewsRemake></HackerNewsRemake> */}
      {/* <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {" "}
        Toggle{" "}
      </button>

      {show && <HackerNewsEvon></HackerNewsEvon>} */}
      {/* <HackerNewsWithHook></HackerNewsWithHook> */}
      {/* <Form></Form> */}
      {/* <MovieSearchApp></MovieSearchApp> */}
      {/* <SignUpForm></SignUpForm> */}
      {/* <SignUpFormV2></SignUpFormV2> */}
      {/* <SignUpFormFinal></SignUpFormFinal> */}
      <SignUpFormHook></SignUpFormHook>
    </div>
  );
}

export default App;
