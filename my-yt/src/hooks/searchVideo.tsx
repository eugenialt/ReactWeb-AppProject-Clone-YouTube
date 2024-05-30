import { API_KEY} from '../../../data';

const searchVideos = async (query: string, category: string) => {
  let videoList_url;
  if (query) {
    videoList_url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=50&q=${query}&key=${API_KEY}`;
  } else {
    videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
  }
  const response = await fetch(videoList_url);
  const data = await response.json();
  if (query) {
    return data.items.map((item: any) => ({
      id: item.id.videoId,
      snippet: item.snippet,
      statistics: { viewCount: '0' },
    }));
  } else {
    return data.items;
  }
};

export default searchVideos