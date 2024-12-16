import YouTubeVideoListServer from "./YouTubeVideoList.server";

export default YouTubeVideoListServer;

// 'use client';

// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import Image from 'next/image';

// interface Video {
//   id: {
//     videoId: string;
//   };
//   snippet: {
//     title: string;
//     thumbnails: {
//       medium: {
//         url: string;
//       };
//     };
//   };
// }

// const YouTubeVideoList: React.FC<{ channelId: string }> = ({ channelId }) => {
//   const [videos, setVideos] = useState<Video[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
//           params: {
//             key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY,
//             channelId,
//             part: 'snippet',
//             maxResults: 10,
//             order: 'date',
//           },
//         });
//         setVideos(response.data.items);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching YouTube videos:', error);
//         setLoading(false);
//       }
//     };

//     fetchVideos();
//   }, [channelId]);

//   if (loading) return <div>Loading...</div>;

//   return (
//     <div className="flex overflow-x-scroll">
//       {videos.map(
//         (video, index) =>
//           index !== videos.length - 1 && (
//             <div key={video.id.videoId} className="flex-shrink-0 m-2">
//               <Image
//                 src={video.snippet.thumbnails.medium.url}
//                 alt={video.snippet.title}
//                 width={320}
//                 height={180}
//                 className="rounded-md"
//               />
//               <h3 className="text-sm mt-2">{video.snippet.title}</h3>
//             </div>
//           )
//       )}
//     </div>
//   );
// };

// export default YouTubeVideoList;
