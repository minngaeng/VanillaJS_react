export const appVNode = {
  tagName: "div",
  children: [
    { tagName: "h1", children: ["Hello World"] },
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
