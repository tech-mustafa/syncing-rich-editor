export const initialValue = [
  {
    type: "heading-one",
    align: "center",
    children: [{ text: "Editor by Mustafa" }],
  },
  {
    type: "heading-two",
    align: "left",
    children: [{ text: "Features of this editor:-" }],
  },
  {
    type: "numbered-list",
    children: [
      {
        type: "list-item",
        align: "left",
        children: [{ text: "Numbered list" }],
      },
      {
        type: "list-item",
        align: "left",
        children: [{ text: "like this" }],
      },
    ],
  },
  {
    type: "bulleted-list",
    children: [
      {
        type: "list-item",
        align: "left",
        children: [{ text: "Bullet list" }],
      },
      {
        type: "list-item",
        align: "left",
        children: [{ text: "Like this" }],
      },
    ],
  },
  {
    type: "paragraph",
    align: "left",
    children: [{ text: "/** You can write code snippets here */", code: true }],
  },
  {
    type: "paragraph",
    align: "left",
    children: [{ text: "Bold characters", bold: true }],
  },
  {
    type: "paragraph",
    align: "left",
    children: [{ text: "Italic characters", italic: true }],
  },
  {
    type: "paragraph",
    align: "left",
    children: [{ text: "Underlined characters", underline: true }],
  },
  {
    type: "paragraph",
    align: "left",
    children: [{ text: "You can have custom colors", color: "#d0021b" }],
  },
  {
    type: "paragraph",
    align: "left",
    children: [
      { text: "you can use ", color: "#f5a623" },
      { text: "bold and ", bold: true, color: "#417505" },
      { text: "italic ", italic: true, underline: true, color: "#417505" },
      { text: " with ", italic: true, color: "#417505" },
      { text: "colors", italic: true, color: "#bd10e0" },
    ],
  },
  {
    type: "paragraph",
    align: "left",
    children: [
      {
        text: "You can add images either from a URL or System (cpoy-paste, drag & drop also supported)",
        color: "#000000",
      },
    ],
  },

  {
    type: "image",
    url: "https://fastly.picsum.photos/id/111/4400/2656.jpg?hmac=leq8lj40D6cqFq5M_NLXkMYtV-30TtOOnzklhjPaAAQ",
    children: [{ text: "" }],
  },
  {
    type: "paragraph",
    children: [
      {
        text: "You can also embed youtube video by just pasting the video url",
      },
    ],
  },
  {
    type: "paragraph",
    children: [{ text: "" }],
  },
  {
    type: "paragraph",
    children: [{ text: "See at the bottom right of the editor" }],
  },
  {
    type: "paragraph",
    children: [{ text: "" }],
  },
  {
    type: "paragraph",
    children: [{ text: "" }],
  },
  {
    type: "paragraph",
    children: [{ text: "" }],
  },
  {
    type: "paragraph",
    children: [{ text: "" }],
  },
  {
    type: "paragraph",
    align: "right",
    children: [{ text: "you can align texts as well" }],
  },
  {
    type: "heading-two",
    align: "center",
    children: [{ text: "Thank you :)", bold: true, color: "#9b9b9b" }],
  },
];
