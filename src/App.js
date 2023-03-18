// import { useEffect, useRef, useState } from "react";
import { Fragment, useState } from "react";
import "./App.css";

// import SignUpForm from "./components/form/SignUpForm";
// import SignUpFormFinal from "./components/form/SignUpFormFinal";
// import SignUpFormHook from "./components/form/SignUpFormHook";
// import SignUpFormV2 from "./components/form/SignUpFormV2";
import Modal from "./components/modal/Modal";
// import MovieSearchApp from "./components/MovieSearchApp";
// import Form from "./components/form/Form";
// import Blog from "./components/Blog";
import DropDown from "./components/dropdown/DropDown";
import DropDownPortal from "./components/dropdown/DropDownPortal";
import ToolTip from "./components/tooltip/ToolTip";
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
import GameWithReducer from "./components/tictactoe/GameWithReducer";
// import Photos from "./components/photo/Photos";
// import { photoData } from "./data/photoData";
import { Routes, Route } from "react-router-dom";
// Chapter 8: Error Boundaries Component
import { ErrorBoundary } from "react-error-boundary";
import Portal from "./components/portal/Portal";
import ModalBase from "./components/modal/ModalBase";
import ModalAdvanced from "./components/modal/ModalAdvanced";
import ToolTipAdvance from "./components/tooltip/ToolTipAdvance";
import CounterContext from "./components/CounterContext";
import HeaderMain from "./components/HeaderMain";
import { AuthProvider } from "./context/authContext";
import { GalleryProvider } from "./context/galleryContext";
import PhotoList from "./components/gallery/PhotoList";
import CartList from "./components/gallery/CartList";
import Nav from "./components/simple-movie/Nav";
import BlogPage from "./components/simple-movie/BlogPage";
import ProfilePage from "./components/simple-movie/ProfilePage";
import BlogPageDetail from "./components/simple-movie/BlogPageDetail";
function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert" className="p-5 bg-red-300 rounded-lg">
      <p className="text-red-600">Khong the lay data do component dang loi</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function App() {
  // const theme = {
  //   colors: {
  //     blue: "#2979ff",
  //   },
  //   orange: "#ffa400",
  // };
  // const [show, setShow] = useState(false);
  // const { show, setShow, nodeRef } = useClickOutside("span");

  // CHAPTER 8
  // const firstName = "Huy";
  // const lastName = "Lam";
  // const [on, setOn] = useState(false);

  // CHAPTER 9:
  // Context: App (status: false) -> Header -> Nav -> User -> Profile lam sao de truyen status vao Profile (directly)
  // **** Han che Props Drilling ********
  // App(status:false) -> Profile: Context

  const [openModalBase, setOpenModalBase] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Fragment>
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
        className="inline-block p-3 m-3 text-white bg-green-400 rounded-lg"
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

      {/* Chapter 6: Refs
      {show && <HackerNewsEvon></HackerNewsEvon>} */}
      {/* <HackerNewsWithHook></HackerNewsWithHook> */}
      {/* <Form></Form> */}
      {/* <MovieSearchApp></MovieSearchApp> */}
      {/* Chapter 7: Form */}
      {/* <SignUpForm></SignUpForm> */}
      {/* <SignUpFormV2></SignUpFormV2> */}
      {/* <SignUpFormFinal></SignUpFormFinal> */}
      {/* <SignUpFormHook></SignUpFormHook> */}
      {/* Chapter 8: Fragments + Modal + Error Boundaries */}
      {/*  <> </> == <Fragment></Fragment> la giong nhau va de tranh dung nhieu the div
      <div className="flex">
        {!on && (
          <>
            {firstName} {lastName}
          </>
        )}
      </div> */}
      {/* <div className="relative z-10"> KHI SU DUNG MODAL NHU VAY THI Z-INDEX CUA MODAL SE BI ANH HUONG BOI COMPONENT CHA NEN TA SE DUNG PORTAL DE DUA MODAL RA CUNG CAP VS ROOT
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
          <div className="w-full max-w-[350px] mx-auto bg-white p-10 rounded-lg"></div>
        </div>
      </div>*/}
      {/* 
      <div className="relative z-30">
        <div className="relative z-0">
          <Modal
            open={showModal}
            handleClose={() => setShowModal(false)}
          ></Modal>
        </div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos incidunt
        cupiditate quas quidem magni sit quod et voluptatum rerum, asperiores
        excepturi, vel facere sunt sed? Dolorum corrupti corporis quod sit!
      </div>
      <button
        className="p-4 text-white bg-blue-500 rounded-lg"
        onClick={() => {
          setShowModal(true);
        }}
      >
        Show Modal
      </button> */}
      {/* <div className="overflow-hidden"> khi overflow-hidden se ko nhan duoc dropDown
      // fix: getBoundingClientRect
        <DropDown></DropDown>{" "}
      </div> */}
      {/* <div className="p-5 overflow-hidden">
        <DropDownPortal></DropDownPortal>
      </div> */}
      {/* <div className="p-16 mt-5 overflow-hidden">
        <ToolTip text="Hover me"> Hello 123 Hello Tooltip 1232132</ToolTip>
      </div> */}
      {/* Chapter 8.3: Error Boundaries */}
      {/* <ErrorBoundary FallbackComponent={ErrorFallback}>
        <GameWithReducer></GameWithReducer>
      </ErrorBoundary> */}
      {/* Chapter 8.4: Props Types 
      <Modal
        open={showModal}
        handleClose={() => {
          setShowModal(false);
        }}
      ></Modal>
      <button
        className="w-[200px] p-4 text-white bg-blue-500 rounded-lg"
        onClick={() => {
          setShowModal(true);
        }}
      >
        Log in
      </button>

      ********** PACKAGES **********
      // npm i prop-types
      // npm error boundaries
      // npm transition group
      */}
      {/* <Portal visible={false}> Hello 123</Portal> */}

      {/* CHAPTER 8.5: MODAL + PORTAL + TOOLTIP */}
      {/* <ModalBase
        visible={openModalBase}
        onClose={() => {
          setOpenModalBase(false);
        }}
        bodyClassName="relative z-10 rounded-lg"
      >
        <div className="p-10 w-full max-w-[320px] flex flex-col">
          <ToolTipAdvance title="Tooltip">This is a Tooltip</ToolTipAdvance>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ea
          aperiam doloribus possimus. Cupiditate soluta nisi, quibusdam officiis
          aliquam assumenda recusandae sint! Ex, at magni mollitia dolore
          veritatis sint vero.
        </div>
      </ModalBase>
      <ModalAdvanced
        visible={openModal}
        onClose={() => {
          setOpenModal(false);
        }}
        header="Welcome Back"
        bodyClassName="w-full max-w-[400px] bg-white py-[53px] px-12 rounded-lg"
      >
        <div className="flex flex-col gap-3 mb-5">
          <label htmlFor="email" className="text-sm font-thin cursor-pointer">
            Email address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full p-4 bg-[#E7ECF3] text-sm leading-normal border border-gray-300 rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-3 mb-5">
          <label
            htmlFor="password"
            className="text-sm font-thin cursor-pointer"
          >
            Password
          </label>
          <div className="flex items-center justify-between">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter your password"
              className="w-full p-4 bg-[#E7ECF3] text-sm leading-normal border border-gray-300 rounded-lg transition-all"
            />
            <svg
              width="21"
              height="17"
              viewBox="0 0 21 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`absolute -translate-x-1/2 left-[82%] `}
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            >
              <path
                d="M20.7729 7.90908C18.7536 3.21908 14.9549 0.309082 10.8563 0.309082C6.75775 0.309082 2.95908 3.21908 0.939779 7.90908C0.884735 8.03525 0.856323 8.17142 0.856323 8.30908C0.856323 8.44674 0.884735 8.58292 0.939779 8.70908C2.95908 13.3991 6.75775 16.3091 10.8563 16.3091C14.9549 16.3091 18.7536 13.3991 20.7729 8.70908C20.8279 8.58292 20.8563 8.44674 20.8563 8.30908C20.8563 8.17142 20.8279 8.03525 20.7729 7.90908ZM10.8563 14.3091C7.68743 14.3091 4.68847 12.0191 2.95908 8.30908C4.68847 4.59908 7.68743 2.30908 10.8563 2.30908C14.0252 2.30908 17.0242 4.59908 18.7536 8.30908C17.0242 12.0191 14.0252 14.3091 10.8563 14.3091ZM10.8563 4.30908C10.0655 4.30908 9.29238 4.54368 8.63482 4.9832C7.97725 5.42273 7.46474 6.04744 7.16209 6.77835C6.85945 7.50925 6.78026 8.31352 6.93455 9.08944C7.08884 9.86537 7.46967 10.5781 8.02888 11.1375C8.5881 11.6969 9.30058 12.0779 10.0762 12.2322C10.8519 12.3866 11.6559 12.3074 12.3865 12.0046C13.1172 11.7018 13.7417 11.1892 14.181 10.5314C14.6204 9.87357 14.8549 9.10021 14.8549 8.30908C14.8549 7.24822 14.4337 6.2308 13.6838 5.48065C12.9339 4.73051 11.9168 4.30908 10.8563 4.30908ZM10.8563 10.3091C10.4609 10.3091 10.0744 10.1918 9.74557 9.97202C9.41679 9.75226 9.16053 9.4399 9.00921 9.07445C8.85789 8.709 8.81829 8.30686 8.89544 7.9189C8.97258 7.53094 9.163 7.17457 9.4426 6.89487C9.72221 6.61516 10.0785 6.42468 10.4663 6.34751C10.8541 6.27034 11.2561 6.30995 11.6214 6.46132C11.9867 6.6127 12.299 6.86904 12.5187 7.19794C12.7384 7.52684 12.8556 7.91352 12.8556 8.30908C12.8556 8.83951 12.645 9.34822 12.27 9.7233C11.8951 10.0984 11.3866 10.3091 10.8563 10.3091Z"
                fill="#B1B5C4"
              />
            </svg>
          </div>
        </div>
        <button className="w-full p-4 font-semibold text-base text-white bg-[#316BFF] rounded-lg">
          Sign in
        </button>
      </ModalAdvanced>
      <button
        className="p-5 mr-5 text-center text-white bg-blue-400 rounded-lg"
        onClick={() => setOpenModalBase(true)}
      >
        Open Modal Base
      </button>
      <button
        className="p-5 text-center text-white bg-blue-400 rounded-lg"
        onClick={() => setOpenModal(true)}
      >
        Open Modal
      </button>
      <div className="inline-block">
        <ToolTipAdvance title="Tooltip">This is a Tooltip</ToolTipAdvance>
      </div> */}

      {/* CHAPTER 9: CONTEXT + AUTCONTEXT */}
      {/* <CounterContext></CounterContext> */}
      {/* <AuthProvider>
        <GalleryProvider>
          <HeaderMain></HeaderMain>
          <PhotoList></PhotoList>
          <CartList></CartList>
        </GalleryProvider>
      </AuthProvider> */}

      {/* CHAPTER 9.1: ROUTER */}
      {/* <Routes>
        <Route
          path="/"
          element={
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              adipisci sapiente dicta nulla aliquid dolorum quam neque quidem
              repellendus, alias id maxime sed! Eius explicabo iure illum,
              repellendus facere dicta?
            </div>
          }
        ></Route>
        <Route path="/about" element={<div>This is about page</div>}></Route>
        <Route
          path="/movies/:movieId"
          element={<div>This is movie details of movieId</div>}
        >
          {/* Slug or ID
        </Route>
        <Route path="/movies" element={<div>This is movies page</div>}></Route>
      </Routes> */}
      <Routes>
        {/* Nested Route de dua cac element deu co Nav */}
        <Route path="/" element={<Nav></Nav>}>
          <Route path="/" element={<>HomePage</>}></Route>
          <Route path="/blog" element={<BlogPage></BlogPage>}></Route>
          <Route
            path="/blog/:slug"
            element={<BlogPageDetail></BlogPageDetail>}
          ></Route>
          <Route path="/profile" element={<ProfilePage></ProfilePage>}></Route>
        </Route>
        <Route path="*" element={<>This is 404 Page</>}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
