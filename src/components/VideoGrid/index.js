import React from "react";

import VideoCard from "../VideoCard";
import data from "../../mock/youtube-videos-mock";

const VideoGrid = () => {
  // Only render items that are videos, not channels
  const filteredVideosList = data.items.filter(({ id }) => {
    return id.kind === "youtube#video";
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-6">
      {filteredVideosList.map(
        ({ id, snippet: { title, description, thumbnails } }) => (
          <VideoCard
            key={id.videoId}
            title={title}
            description={description}
            imageURL={thumbnails.high.url}
            videoId={id.videoId}
          />
        )
      )}
    </div>
  );
};

export default VideoGrid;
