import { createContext, useState } from "react";
export const FavoritesContext = createContext({
  ids: [],
  addFabourites: (id) => {},
  removeFaoritues: (id) => {},
});

const FavoritesContextProvider = ({ children }) => {
  const [fabouritesIds, setFabouritesIds] = useState([]);

  const addFabouritesHandler = (id) => {
    setFabouritesIds((prev) => [...prev,id]);
  };
  const removeFabouritesHandler = (id) => {
    setFabouritesIds((item) => item.filter((mealId) => mealId !== id));
  };

  const Values = {
    ids: fabouritesIds,
    addFabourites: addFabouritesHandler,
    removeFaoritues: removeFabouritesHandler,
  };

  return (
    <FavoritesContext.Provider value={Values}>
      {children}
    </FavoritesContext.Provider>
  );
};
export default FavoritesContextProvider;
