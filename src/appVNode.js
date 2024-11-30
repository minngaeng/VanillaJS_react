export const appVNode = {
  tagName: "div",
  attrs: { className: "container" },
  children: [
    { tagName: "h1", children: ["Hello World"], attrs: { className: "title" } },
    {
      tagName: "p",
      children: [
        "react parsing",
        { tagName: "br" },
        {
          tagName: "strong",
          children: ["bold text"],
        },
      ],
    },
  ],
};
