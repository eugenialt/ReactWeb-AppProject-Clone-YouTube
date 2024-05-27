import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { Video, getFavorites, toggleFavorite, isFavorite } from '../../utils/favorites';
import more_icon from '../../assets/more.png';
import { value_converter } from '../../../../data';

const Favorites = () => {
  const [favorites, setFavorites] = useState<Video[]>([]);

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  const handleToggleFavorite = (video: Video) => {
    const updatedFavorites = toggleFavorite(video);
    setFavorites(updatedFavorites);
  };

  return (
    <div className="feed">
      {favorites.length > 0 ? (
        favorites.map((item) => (
          <div key={item.id} className="video-card">
            <Link
              to={`video/${item.snippet.categoryId}/${item.id}`}
              className="card"
            >
              <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
              <h2>{item.snippet.title}</h2>
              <h3>{item.snippet.channelTitle}</h3>
              <p>
                {item.statistics.viewCount ? value_converter(item.statistics.viewCount) : '0'} views &bull;{" "}
                {moment(item.snippet.publishedAt).fromNow()}
              </p>
            </Link>
            <img
              src={more_icon}
              alt="more"
              className={`favorite-icon ${isFavorite(item) ? 'favorited' : ''}`}
              onClick={() => handleToggleFavorite(item)}
            />
          </div>
        ))
      ) : (
        <p>No favorite videos yet.</p>
      )}
    </div>
  );
};

export default Favorites;
