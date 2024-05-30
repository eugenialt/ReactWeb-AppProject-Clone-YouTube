import { Video } from "../interfaces/yt.interfaces";
  
  export const getFavorites = (): Video[] => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  };
  
  export const saveFavorites = (favorites: Video[]) => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };
  
  export const toggleFavorite = (video: Video): Video[] => {
    let favorites = getFavorites();
    const isFavorite = favorites.some((fav) => fav.id === video.id);
    if (isFavorite) {
      favorites = favorites.filter((fav) => fav.id !== video.id);
    } else {
      favorites = [...favorites, video];
    }
    saveFavorites(favorites);
    return favorites;
  };
  
  export const isFavorite = (video: Video): boolean => {
    const favorites = getFavorites();
    return favorites.some((fav) => fav.id === video.id);
  };
  