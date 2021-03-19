import styled from "styled-components";

// Container for card contents
const CardContainer = styled.div`
  border-radius: 0.75rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  max-width: 28rem;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

// Thumbnail image of the card
const CardImage = styled.img`
  height: 12rem;
  width: 100%;
  object-fit: cover;
`;

// Container for the card contents
const CardContent = styled.div`
  padding: 2rem;
  text-align: left;
`;

// Title of the card
const CardTitle = styled.a`
  font-size: 1.125rem;
  margin-top: 0.25rem;
  line-height: 1.25;
  font-weight: 500;

  :hover {
    text-decoration: underline;
  }
`;

// Description for the card
const CardDescription = styled.p`
  margin-top: 0.5rem;
  color: #6b7280;
  font-size: 0.95rem;
`;

const VideoCard = ({ title, description, imageURL, videoId }) => {
  return (
    <CardContainer>
      <CardImage src={imageURL} />
      <CardContent>
        <CardTitle
          href={`https://youtube.com/watch?v=${videoId}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </CardContainer>
  );
};

export default VideoCard;
