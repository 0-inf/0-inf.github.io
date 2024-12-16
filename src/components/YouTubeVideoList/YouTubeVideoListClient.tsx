'use client';

import Link from 'next/link';
import Image from 'next/image';

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

interface YouTubeVideoListClientProps {
  videos: Video[];
}

export const YouTubeVideoListClient: React.FC<YouTubeVideoListClientProps> = ({ videos }) => {
  return (
    <div className="flex overflow-x-scroll">
      {videos.map((video, index) =>
        index !== videos.length - 1 ? (
          <div key={video.id.videoId} className="flex-shrink-0 m-2">
            <Link href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank">
              <Image
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                width={320}
                height={180}
                className="rounded-md"
              />
              <h3 className="text-sm mt-2">{video.snippet.title}</h3>
            </Link>
          </div>
        ) : null
      )}
    </div>
  );
};
