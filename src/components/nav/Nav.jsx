import { useEffect, useState } from "react";

const links = [
  {
    path: "home",
    name: "Home",
  },
  {
    path: "tours",
    name: "Tours",
  },
  {
    path: "discography",
    name: "Discography",
  },
  {
    path: "blog",
    name: "Blog",
  },
  {
    path: "contact",
    name: "Contact",
  },
];
export default function Nav({ containerStyles, linkStyles }) {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = document.querySelectorAll("section");

      sectionElements.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const isVisible =
          sectionCenter >= 0 && sectionCenter <= window.innerHeight;

        if (isVisible) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, i) => (
        <a
          key={i}
          href={`#${link.path}`}
          className={`${linkStyles} cursor-pointer border-b-2 border-transparent ${
            activeSection === link.path && "active"
          }`}
        >
          {link.name}
        </a>
      ))}
    </nav>
  );
}
