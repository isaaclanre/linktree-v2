import { HoverEffectStyle, LinkCardStyle } from "./LinkCardStyles";
import ReactTooltip from "react-tooltip";

const LinkCard = () => {
  let links = [
    {
      name: "Twitter Link",
      link: "https://twitter.com/isaacolanre",
      id: "twitter-link",
      data_tip: "This will link to my twitter profile",
    },
    {
      name: "Zuri Team",
      link: "https://training.zuri.team/",
      id: "btn__zuri",
      data_tip: "Here you will find more information about the Zuri team",
    },
    {
      name: "Zuri Books",
      link: "https://books.zuri.team",
      id: "books",
      data_tip: "This is where you find books about design and coding",
    },
    {
      name: "Python Books",
      link: "https://books.zuri.team/python-for-beginners?ref_id=isaacolanre",
      id: "book__python",
      data_tip: "This is one of the best books ever to teach python",
    },
    {
      name: "Background Check for Coders",
      link: "https://background.zuri.team",
      id: "pitch",
      data_tip:
        "Want to start your career journey right away? Go through this background check for coders",
    },
    {
      name: "Design Books",
      link: "https://books.zuri.team/design-rules",
      id: "book__design",
      data_tip: "This is one of the best books ever to teach design",
    },
    {
      name: "Contact Me",
      link: "/contact",
      id: "contact",
      data_tip: "Please click here to drop",
    },
  ];
  return (
    <HoverEffectStyle>
      {links.map((i) => (
        <a key={i.id} href={i.link}>
          <LinkCardStyle data-tip={i.data_tip} id={i.id}>
            {i.name}
          </LinkCardStyle>
        </a>
      ))}
      <ReactTooltip />
    </HoverEffectStyle>
  );
};

export default LinkCard;
