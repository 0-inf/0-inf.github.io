import { Suspense } from 'react';
import axios from 'axios';
import { YouTubeVideoListClient } from './YouTubeVideoListClient';

interface Video {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
  };
}

interface YouTubeVideoListServerProps {
  channelId: string;
}

export default async function YouTubeVideoListServer({ channelId }: YouTubeVideoListServerProps) {
  let videos: Video[] = [];

  try {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY,
        channelId,
        part: 'snippet',
        maxResults: 10,
        order: 'date',
      },
    });
    videos = response.data.items;
  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
  }

  return (
    <Suspense fallback={<div>Loading videos...</div>}>
      <YouTubeVideoListClient videos={videos} />
    </Suspense>
  );
}
