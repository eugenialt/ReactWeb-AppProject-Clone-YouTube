import React, { useState, useEffect } from 'react';
import './Feed.css';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { value_converter } from '../../../../data';
import searchVideos from '../../hooks/searchVideo';
import { Input } from '@mantine/core';
import { Video } from '../../interfaces/yt.interfaces';


const Feed = ({ category }: { category: string }) => {
  const [data, setData] = useState<Video[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const fetchData = async (query: string = '') => {
    const videos = await searchVideos(query, category);
    setData(videos);
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    fetchData(searchQuery);
  };

  return (
    <div className="feed">
       
      <form className="search-form">
      <Input variant="unstyled" radius="md"
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </form>
      {data.map((item) => (
        <Link to={`video/${item.snippet.categoryId}/${item.id}`} className="card" key={item.id}>
          <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
          <h2>{item.snippet.title}</h2>
          <h3>{item.snippet.channelTitle}</h3>
          <p>
            {value_converter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default Feed;