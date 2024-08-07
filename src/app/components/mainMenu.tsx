"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PanelMenu } from "primereact/panelmenu";

const MainMenu = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => {
      const newState = !prevState;
      if (newState) {
        document.body.classList.add("openMenu");
      } else {
        document.body.classList.remove("openMenu");
      }
      return newState;
    });
  };

  const closeMenu = () => {
    document.body.classList.remove("openMenu");
    setIsMenuOpen(false);
    console.log('Close Menu')
  };


  // Scrollspy Script Start
  const [activeSection, setActiveSection] = useState<string | null>('home');
  const setOffset = 54;
  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let currentSection: string | null = null;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - setOffset;
      const sectionBottom = sectionTop + section.clientHeight;
      const scrollPosition = window.pageYOffset;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        currentSection = section.getAttribute("id");
      }
    });
    setActiveSection(currentSection);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleMainMenuClick = (event: any) => {
    closeMenu();
    const href = event.currentTarget.getAttribute("href");
    if (href && href.startsWith("/#")) {
      const id = href.substring(2);
      scrollToSection(id);
      event.preventDefault();
      
    }
  };
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const sectionTop = section.offsetTop - setOffset;
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }
  };
  const [rootUrl, setRootUrl] = useState("");
  useEffect(() => {
    setRootUrl(window.location.origin);
  }, []);

  const navLinkRenderer = (item: any) => {
    let href = "";
    let id = "";
    if (item.url) {
      href = item.url;
      id = href.split("#")[1];
    }
    const handleClick = (event: React.MouseEvent) => {
      if (!href) {
        event.preventDefault();
      } else {
        handleMainMenuClick(event);
      }
    };
    return (
      <Link
        href={`${href}`}
        onClick={handleClick}
        className={activeSection === id ? "active" : ""}
      >
        <span>{item.label}</span>
      </Link>
    );
  };

  const items = [
    {
      label: "Home",
      url: `${rootUrl}/#home`,
      template: navLinkRenderer,
    },
    {
      label: "We",
      template: navLinkRenderer,
      items: [
        {
          label: "Overview",
          url: `${rootUrl}/#we`,
          template: navLinkRenderer,
        },
        {
          label: "Culture",
          url: `${rootUrl}/#culture`,
          template: navLinkRenderer,
        },
        {
          label: "Offering",
          url: `${rootUrl}/#offering`,
          template: navLinkRenderer,
        },
        {
          label: "Squad",
          url: `${rootUrl}/#squad`,
          template: navLinkRenderer,
        },
        {
          label: "Accolades",
          url: `${rootUrl}/#accolades`,
          template: navLinkRenderer,
        },
      ],
    },
    {
      label: "Clients",
      url: `${rootUrl}/#clients`,
      template: navLinkRenderer,
    },
    {
      label: "Work",
      template: navLinkRenderer,
      items: [
        {
          label: "Overview",
          url: `${rootUrl}/#work`,
          template: navLinkRenderer,
        },
        {
          label: "Showreel",
          url: `${rootUrl}/#showreel`,
          template: navLinkRenderer,
        },
      ],
    },
    {
      label: "Experiential",
      template: navLinkRenderer,
      items: [
        {
          label: "Overview",
          url: `${rootUrl}/#experiential`,
          template: navLinkRenderer,
        },
        {
          label: "AR/MR",
          url: `${rootUrl}/#experiential`,
          template: navLinkRenderer,
        },
        {
          label: "Voice",
          url: `${rootUrl}/#experiential`,
          template: navLinkRenderer,
        },
        {
          label: "XMS",
          url: `${rootUrl}/#experiential`,
          template: navLinkRenderer,
        },
      ],
    },
    {
      label: "Sparkt Live",
      url: `${rootUrl}/#sparktLive`,
      template: navLinkRenderer,
    },
    {
      label: "Get In Touch",
      url: `${rootUrl}/#getInTouch`,
      template: navLinkRenderer,
    },
  ];

  // Scrollspy Script End

  return (
    <>
    <div className="position-relative">
      <div
        className={`menu_button ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span className="text">MENU</span>
        <div className="hamburger ms-2">
          <span></span>
        </div>
      </div>

      <div className={`main_menu_wrap ${isMenuOpen ? "active" : ""}`}>
        <nav className="main_menu">
          <PanelMenu model={items} className="w-full md:w-20rem" />
        </nav>
      </div>
    </div>
    <div className="menu_overlay" onClick={closeMenu} ></div>
    </>

  );
};

export default MainMenu;
