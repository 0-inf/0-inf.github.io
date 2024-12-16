import { Suspense } from 'react';
import axios from 'axios';
import { YouTubeVideoListClient } from './YouTubeVideoListClient';

interface VideoSnippet {
  resourceId: {
    videoId: string;
  };
  title: string;
  thumbnails: {
    medium: {
      url: string;
    };
  };
  publishedAt: string;
}

interface VideoDetails {
  id: string;
  snippet: {
    title: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
    publishedAt: string;
  };
  contentDetails: {
    duration: string;
  };
}

interface YouTubeVideoListServerProps {
  channelId: string;
}

export default async function YouTubeVideoListServer({ channelId }: YouTubeVideoListServerProps) {
  const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  const base = 'https://www.googleapis.com/youtube/v3';
  let videos: VideoDetails[] = [];

  try {
    // First, get the uploads playlist ID (convert channel ID)
    const uploadsPlaylistId = `UU${channelId.slice(2)}`;

    // Fetch playlist items (recent videos)
    const playlistResponse = await axios.get(`${base}/playlistItems`, {
      params: {
        part: 'snippet',
        playlistId: uploadsPlaylistId,
        maxResults: 10,
        key: apiKey,
      },
    });

    // Extract video IDs
    const videoIds = playlistResponse.data.items
      .map((item: { snippet: VideoSnippet }) => item.snippet.resourceId.videoId)
      .join(',');

    // Fetch detailed video information
    const videoDetailsResponse = await axios.get(`${base}/videos`, {
      params: {
        part: 'snippet,contentDetails',
        id: videoIds,
        key: apiKey,
      },
    });

    videos = videoDetailsResponse.data.items;
  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
  }

  return (
    <Suspense fallback={<div>Loading videos...</div>}>
      <YouTubeVideoListClient videos={videos} />
    </Suspense>
  );
}
