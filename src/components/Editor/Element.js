import { Image } from "./Image";
import YouTubeVideo from "./YoutubeEmbed";

export const Element = ({ attributes, children, element }) => {
  const style = { textAlign: element.align };
  const text = element.children[0]?.text;
  if (text?.includes("www.youtube.com")) {
    const urlObj = new URL(text);
    const queryParams = new URLSearchParams(urlObj.search);
    const videoId = queryParams.get("v");

    return (
      <YouTubeVideo youtubeId={videoId} {...attributes}>
        {children}
      </YouTubeVideo>
    );
  }
  switch (element.type) {
    case "block-quote":
      return (
        <blockquote
          style={{ ...style, backgroundColor: "lightgray" }}
          {...attributes}
        >
          {children}
        </blockquote>
      );
    case "bulleted-list":
      return (
        <ul style={style} {...attributes}>
          {children}
        </ul>
      );
    case "heading-one":
      return (
        <h1 style={style} {...attributes}>
          {children}
        </h1>
      );
    case "heading-two":
      return (
        <h2 style={style} {...attributes}>
          {children}
        </h2>
      );
    case "list-item":
      return (
        <li style={style} {...attributes}>
          {children}
        </li>
      );
    case "numbered-list":
      return (
        <ol style={style} {...attributes}>
          {children}
        </ol>
      );
    case "image":
      return (
        <Image attributes={attributes} children={children} element={element}>
          {children}
        </Image>
      );
    default:
      return (
        <p style={style} {...attributes}>
          {children}
        </p>
      );
  }
};
