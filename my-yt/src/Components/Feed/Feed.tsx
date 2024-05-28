import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import './Feed.css';
import { API_KEY, value_converter } from '../../../../data';

interface Video {
  id: string;
  snippet: {
    title: string;
    channelTitle: string;
    publishedAt: string;
    categoryId: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
  };
  statistics: {
    viewCount: string;
  };
}

const Feed = ({ category }: { category: string }) => {
  const [data, setData] = useState<Video[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [timer, setTimer] = useState<Node.Timeout | null>(null);

  const fetchData = async (query: string = '') => {
    let videoList_url;
    if (query) {
      videoList_url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=50&q=${query}&key=${API_KEY}`;
    } else {
      videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
    }
    await fetch(videoList_url)
      .then((response) => response.json())
      .then((data) => {
        if (query) {
          setData(data.items.map((item: any) => ({
            id: item.id.videoId,
            snippet: item.snippet,
            statistics: { viewCount: '0' }
          })));
        } else {
          setData(data.items);
        }
      });
  };

  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
    }
    if (searchQuery) {
      const newTimer = setTimeout(() => {
        fetchData(searchQuery);
      }, 1000);
      setTimer(newTimer);
    } else {
      fetchData();
    }
  }, [searchQuery]);

  useEffect(() => {
    fetchData();
  }, [category]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    // console.log(searchQuery)
  };

  return (
    <div className="feed">
      <form className="search-form">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </form>
      {data.map((item) => (
        <Link
          to={`video/${item.snippet.categoryId}/${item.id}`}
          className="card"
          key={item.id}
        >
          <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
          <h2>{item.snippet.title}</h2>
          <h3>{item.snippet.channelTitle}</h3>
          <p>
            {value_converter(item.statistics.viewCount)} views &bull;{" "}
            {moment(item.snippet.publishedAt).fromNow()}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default Feed;