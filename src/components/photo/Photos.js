import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

//********** PRACTICE */ FIRST STEP: CALL API AND GET THE TO DOM AND LOAD MORE (BASIC USESTATE)
// const getPhotos = (page) => {
//   return axios
//     .get(`https://picsum.photos/v2/list?page=${page}&limit=8`)
//     .then((res) => {
//       console.log(res);
//       return res.data;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
// const Photos = () => {
//   const [photos, setPhotos] = useState([]);
//   const [nextPage, setnextPage] = useState(1);
//   const handleClick = () => {
//     getPhotos(nextPage).then((images) => {
//       console.log(images);
//       setPhotos(images);
//     });
//     console.log(nextPage);
//     setnextPage(nextPage + 1);
//   };

//   useEffect(() => {
//     handleClick();
//   }, []);
//   return (
//     <div>
//       <div className="grid grid-cols-4 gap-5">
//         {photos.map((item, index) => (
//           <div key={index}>
//             <img
//               src={item.download_url}
//               alt=""
//               className="w-full h-full object-cover rounded-lg"
//             />
//           </div>
//         ))}
//       </div>
//       <div className="text-center">
//         {" "}
//         <button
//           className="inline-block bg-slate-400 rounded-lg px-8 py-4 mt-5"
//           onClick={handleClick}
//         >
//           Load More
//         </button>
//       </div>
//     </div>
//   );
// };

// **** RENDER -- COMPLETE SAMPLE
const getRandomPhotos = async (page) => {
  try {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=8`
    ); // api: https://picsum.photos/v2/list?page=2&limit=100
    // handle success
    console.log(response);
    return response.data;
  } catch (error) {
    // handle error
    console.log(error);
  }
};
const Photos = () => {
  // useEffect((callback, [dependencies]))
  //   useEffect(function callback() {
  //     // side-effects (e.g: setTimeout, setInterval, DOM)
  //   }, []);
  const [randomPhotos, setRandomPhotos] = useState([]);
  const [nextPage, setNextPage] = useState(1);
  const handleLoadMorePhoto = useRef({});

  handleLoadMorePhoto.current = async () => {
    const images = await getRandomPhotos(nextPage);
    const newPhoto = [...randomPhotos, ...images];
    setRandomPhotos(newPhoto);
    console.log(newPhoto);
    // setRandomPhotos(images);
    setNextPage(nextPage + 1);
    console.log(nextPage);
  };

  // Toi uu dung useCallback
  // const handleLoadMorePhoto = React.useCallback(async () => {
  //   const images = await getRandomPhotos(nextPage);
  //   const newPhoto = [...randomPhotos, ...images];
  //   setRandomPhotos(newPhoto);
  //   console.log(newPhoto);
  //   // setRandomPhotos(images);
  //   setNextPage(nextPage + 1);
  //   console.log(nextPage);
  // }, []);

  useEffect(() => {
    handleLoadMorePhoto.current();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-4 gap-5 p-5">
        {randomPhotos.length > 0 &&
          randomPhotos.map((item, index) => (
            <div
              key={item.id}
              className="p-3 bg-white shadow-md rounded-lg h-[200px]"
            >
              <img
                src={item.download_url}
                alt={item.author}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
      </div>

      <div className="text-center">
        <button
          className="inline-block px-8 py-4 bg-purple-600 text-white"
          onClick={handleLoadMorePhoto.current}
        >
          Load more
        </button>
      </div>
    </div>
  );
};

export default Photos;
