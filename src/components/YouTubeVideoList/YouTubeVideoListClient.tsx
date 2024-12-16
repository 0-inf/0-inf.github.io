'use client';

import Link from 'next/link';
import Image from 'next/image';

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

interface YouTubeVideoListClientProps {
  videos: VideoDetails[];
}

export const YouTubeVideoListClient: React.FC<YouTubeVideoListClientProps> = ({ videos }) => {
  const formatDuration = (duration: string) => {
    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
    if (!match) return '';

    const hours = match[1] ? parseInt(match[1]) : 0;
    const minutes = match[2] ? parseInt(match[2]) : 0;
    const seconds = match[3] ? parseInt(match[3]) : 0;

    const formattedParts = [];
    if (hours > 0) formattedParts.push(`${hours}`);
    formattedParts.push(`${minutes.toString().padStart(2, '0')}`);
    formattedParts.push(`${seconds.toString().padStart(2, '0')}`);

    return formattedParts.join(':');
  };

  const truncateTitle = (title: string, maxLength: number = 40) => {
    return title.length > maxLength ? `${title.substring(0, maxLength)}...` : title;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="flex overflow-x-scroll">
      {videos.map((video) => (
        <div key={video.id} className="flex-shrink-0 m-2 relative w-64">
          <Link href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank">
            <div className="relative">
              <Image
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                width={320}
                height={180}
                className="rounded-md"
              />
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-1 rounded">
                {formatDuration(video.contentDetails.duration)}
              </div>
            </div>
            <h3 className="text-sm mt-2 -mb-1 font-semibold">{truncateTitle(video.snippet.title)}</h3>
            <p className="text-xs text-gray-500">{formatDate(video.snippet.publishedAt)}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};
