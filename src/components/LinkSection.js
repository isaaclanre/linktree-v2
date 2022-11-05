import React from "react";
import { HoverStyle, LinkSectionStyle } from "./LinkSectionStyles";

export const LinkSection = () => {
  const links = [
    {
      name: "Twitter Link",
      url: "https://twitter.com/isaacolanre",
      id: "twitter",
      title: "Twitter link",
    },
    {
      name: "Zuri Team",
      url: "https://training.zuri.team/",
      id: "btn__zuri",
      title: "Zuri Team",
    },
    {
      name: "Zuri Books",
      url: "http://books.zuri.team/",
      id: "books",
      title: "Zuri Books",
    },
    {
      name: "Python Books",
      url: "https://books.zuri.team/",
      id: "book__python",
      title: "Python Books",
    },
    {
      name: "Background Check for Coders",
      url: "https://background.zuri.team/",
      id: "pitch",
      title: "Background Check for Coders",
    },
    {
      name: "Design Books",
      url: "https://books.zuri.team/design-rules",
      id: "book__design",
      title: "Design Books",
    },
    {
      name: "Contact",
      url: "/contact",
      id: "contact",
      title: "Contact",
    },
  ];
  return (
    <HoverStyle>
      {links.map((i) => (
        <a href={i.url} id={i.id} title={i.title}>
          <LinkSectionStyle>{i.name}</LinkSectionStyle>
        </a>
      ))}
    </HoverStyle>
  );
};
