import React from "react";

import Card from "../Card";

const Grid = ({ data }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-6 mx-8">
      {data.items.map(({ id, snippet: { title, description, thumbnails } }) => (
        <Card
          key={id.videoId || id.channelId}
          title={title}
          description={description}
          imageURL={thumbnails.high.url}
          itemKind={id.kind}
          itemId={id.videoId || id.channelId}
        />
      ))}
    </div>
  );
};

export default Grid;
