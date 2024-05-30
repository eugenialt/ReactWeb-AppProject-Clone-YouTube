"use client"
import { useEffect } from 'react'
import './PlayVideo.css'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import { useState } from 'react'
import { API_KEY } from '../../../../data'
import { useNavigate } from 'react-router-dom';
import { Video } from '../../interfaces/yt.interfaces';

const PlayVideo = ({videoId}: {videoId: string | undefined }) => {

const [apiData, setData] = useState<Video[]>([]);
const [isSaved, setIsSaved] = useState<boolean>(false);

const fetchData = async () => {
  const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${videoId}&key=${API_KEY}`;
  await fetch(videoList_url)
    .then((response) => response.json())
    .then((data) => setData(data.items));
};

useEffect(() => {
  fetchData();
}, []);

const navigate = useNavigate();
const handleSave = () => {
  setIsSaved(!isSaved);
  const savedVideos = [...apiData]; 
  const isVideoSaved = savedVideos.some((video) => video.id === videoId);
  if (isVideoSaved) {
    const updatedSavedVideos = savedVideos.filter((video) => video.id !== videoId);
    setData(updatedSavedVideos);
  } else {
    const savedVideo = apiData.find((video) => video.id === videoId);
    if (savedVideo) {
      savedVideos.push(savedVideo);
      setData(savedVideos);
    }
  }
  navigate('/favorites');

};

  return (
    <div className='play-video'>
      <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}  frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      <h3></h3>
      <div className="play-video-info">
        <p>1525 Views &bull; 2 days ago</p>
       <div>
        <span><img src={like} alt=''/>125</span>
        <span><img src={dislike} alt=''/>2</span>
        <span><img src={share} alt=''/>Share</span>
        <span onClick={handleSave}><img src={save} alt='' />{isSaved ? 'Saved' : 'Save'}</span>
        </div>
      </div>
    
    <div>
      <hr />
      <div className="publisher">
        <img src={jack} alt=''/>
      <div>
      <p>GreateStack</p>
      <span>1M Subscribers</span>
      </div>
        <button >Subscribe</button>
      </div>
      <div className="vid-description">
        <p>Channel that mekes learning Easy</p>
        <p>Subscribe GreateStack to whatch this channel</p>
        <hr />
        <h4>130 Comments</h4>
        <div className="comment">
          <img src={user_profile} alt='' />
          <div>
            <h3>Jack Nikolson <span>1 day ago</span></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, velit autem! Ipsum consequuntur soluta deleniti, nobis quisquam rerum vitae quo ea culpa, dolores perspiciatis error voluptatum eos vel. Dolorum, cupiditate!</p>
            <div className="comment-action">
              <img src={like} alt='' />
              <span>244</span>
              <img src={dislike} alt='' />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt='' />
          <div>
            <h3>Jack Nikolson <span>1 day ago</span></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, velit autem! Ipsum consequuntur soluta deleniti, nobis quisquam rerum vitae quo ea culpa, dolores perspiciatis error voluptatum eos vel. Dolorum, cupiditate!</p>
            <div className="comment-action">
              <img src={like} alt='' />
              <span>244</span>
              <img src={dislike} alt='' />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt='' />
          <div>
            <h3>Jack Nikolson <span>1 day ago</span></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, velit autem! Ipsum consequuntur soluta deleniti, nobis quisquam rerum vitae quo ea culpa, dolores perspiciatis error voluptatum eos vel. Dolorum, cupiditate!</p>
            <div className="comment-action">
              <img src={like} alt='' />
              <span>244</span>
              <img src={dislike} alt='' />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt='' />
          <div>
            <h3>Jack Nikolson <span>1 day ago</span></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, velit autem! Ipsum consequuntur soluta deleniti, nobis quisquam rerum vitae quo ea culpa, dolores perspiciatis error voluptatum eos vel. Dolorum, cupiditate!</p>
            <div className="comment-action">
              <img src={like} alt='' />
              <span>244</span>
              <img src={dislike} alt='' />
            </div>
          </div>
        </div>

      </div>
    </div>
    </div>
    
  )
}

export default PlayVideo