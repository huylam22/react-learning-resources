import { createContext, useContext, useState } from "react";
import { photoData } from "../data/photoData";
import useLocalStorage from "../hooks/useLocalStorage";
const GalleryContext = createContext();

// LAZY INITIALIZATION REACT CHO LOCAL STORAGE
function GalleryProvider(props) {
  const { storedValue: storedPhotoValue, setValue } = useLocalStorage(
    "photos",
    photoData
  );
  console.log(storedPhotoValue);
  const { storedValue: storedCartValue, setValue: setStoredCart } =
    useLocalStorage("carts", []);
  const [photos, setPhotos] = useState(storedPhotoValue);
  const [cartItems, setCardItems] = useState(storedCartValue);
  const [favoriteList, setFavoriteList] = useState([]);

  function toggleFavorite(photoId) {
    const updatedArray = photos.map((photo) => {
      if (photo.id === photoId) {
        return { ...photo, isFavorite: !photo.isFavorite };
      }
      return photo;
    });
    setPhotos(updatedArray);
    setValue(updatedArray);
  }

  // 1. Viet function addToCart
  // 2. Truyen addToCard param la newItem (or photo)
  function addToCart(newItem) {
    // 3. Cap nhat lai state gio hang (cartItems)
    setCardItems((prevItems) => {
      // 4. Kiem tra xem newItem da co trong gio hang chua
      // Cach1:
      // const isExited = prevItems.some((item) => item.id === newItem.id);
      // Cach2:
      const isExited = prevItems.find((item) => item.id === newItem.id);
      // 5. Neu da co thi return prevItems (danh sach truoc do)
      if (isExited) {
        setStoredCart([...prevItems]);
        return [...prevItems];
      }
      // 6. Neu chua co thi them vao gio hang
      setStoredCart([...prevItems, newItem]);

      return [...prevItems, newItem];
    });
  }

  function removeFromCart(itemId) {
    // Tai sao !== --> filter ra nhung san pham co id khong phai id chung ta truyen vao (current button item)
    setCardItems((prevItem) => {
      const result = prevItem.filter((item) => item.id !== itemId);
      setStoredCart(result);
      return result;
    });
  }
  const value = {
    photos,
    cartItems,
    favoriteList,
    setPhotos,
    setCardItems,
    setFavoriteList,
    toggleFavorite,
    addToCart,
    removeFromCart,
  };

  return (
    <GalleryContext.Provider value={value} {...props}></GalleryContext.Provider>
  );
}

function useGallery() {
  const context = useContext(GalleryContext);
  if (typeof context === "undefined")
    throw new Error("useGallery must be used within a GalleryProvider");
  return context;
}

export { GalleryProvider, useGallery };
