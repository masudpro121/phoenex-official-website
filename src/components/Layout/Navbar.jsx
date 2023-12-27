import React, { useEffect, useState } from "react";
import DropdownImg from "@/images/dropdown.svg";
import MenuImg from "@/images/menu.svg";
import Image from "next/image";
import Logo from "@/images/layout/logo.svg";
import Link from "next/link";
import { useRouter } from "next/router";
const Navbar = () => {
  const [dropdown, setDropdown] = useState("");
  const [isMenuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleDropdown = (item) => {
    if (dropdown == item) {
      setDropdown("");
    } else {
      setDropdown(item);
    }
  };

  const categories = [
    {
      title: "Product & Services",
      link: "/product-and-services",
      sub: [
        {
          title: "Infographic",
          link: "/infographic",
        },
      ],
    },
    {
      title: "Venture Portfolio",
      link: "/venture-portfolio",
      sub: [
        {
          title: "Individual Portfolio",
          link: "/individual-portfolio",
        },
      ],
    },
    {
      title: "Research & Development",
      link: "/research-and-development",
      sub: [
        {
          title: "Research & Devleopment Economics",
          link: "/research-and-development-economics",
        },
      ],
    },
    {
      title: "Workshop",
      link: "/workshop",
      sub: [
        {
          title: "Incubation Program",
          link: "/incubation-program",
        },
        {
          title: "Product Management",
          link: "/product-management",
        },
      ],
    },
    {
      title: "Community",
      link: "/community",
      sub: [
        {
          title: "Project Specific Community",
          link: "/project-specific-community",
        },
      ],
    },
  ];

  console.log(dropdown, "dropdown");
  return (
    <div className="max-w-[1920px] m-auto">
      <div className="flex 2xl:items-center justify-between gap-4 mx-4 lg:mx-10 py-1">
        <Link href="/">
          <div className="flex items-center">
            <Image className="h-16" src={Logo} />
            <h3 className="hidden lg:block text-2xl font-bold text-cwhite">PhoenEx</h3>
          </div>
        </Link>

        {/* Desktop Navbar  */}
        <div className="hidden 2xl:flex gap-7 items-center">
          {categories.map((category, i) => {
            return (
              <div key={i} className="relative ">
                <div className="flex gap-2 cursor-pointer">
                  <Link href={category.link}>{category.title}</Link>
                  {category?.sub?.length > 0 && (
                    <Image
                      onClick={() => {
                        handleDropdown(category.link);
                      }}
                      className={dropdown == category.link ? "rotate-180" : ""}
                      src={DropdownImg}
                    />
                  )}
                </div>
                <div
                  className={`absolute  w-64 px-4  rounded-sm bg-stone-950 cursor-pointer top-10 space-y-4 py-2  ${
                    dropdown != category.link && "hidden"
                  }`}
                >
                  {category?.sub &&
                    category.sub.map((sub, j) => {
                      return (
                        <div key={i + j} onClick={() => setDropdown("")}>
                          <Link href={sub.link}>{sub.title}</Link>
                        </div>
                      );
                    })}
                </div>
              </div>
            );
          })}
          <div>
            <Link href="/contact-us">
              <button className="blue-btn">Contact Us</button>
            </Link>
          </div>
        </div>

        {/* Small Device Navbar  */}
        <div className="2xl:hidden text-right pt-3">
          {
            isMenuOpen ? (
              <div>
                <div className="flex justify-end" onClick={toggleMenu}>
                  <Image src={MenuImg} /> 
                </div>
                <div className="space-y-4 pt-6">
                {
                  categories.map((category, i)=>{
                    return(
                      <div key={i}>
                      <div className="flex justify-end gap-5">
                        <Link href={category.link}>{category.title}</Link>
                        {category?.sub?.length > 0 && (
                          <Image
                            onClick={() => {
                              handleDropdown(category.link);
                            }}
                            className={dropdown == category.link ? "rotate-180" : ""}
                            src={DropdownImg}
                          />
                        )}
                      </div>

                       <div
                          className={`border-t-2 border-stone-800 cursor-pointer  space-y-4 py-2  ${
                            dropdown != category.link && "hidden"
                          }`}
                        >
                          {category?.sub &&
                            category.sub.map((sub, j) => {
                              return (
                                <div key={i + j} onClick={() => setDropdown("")}>
                                  <Link href={sub.link}>{sub.title}</Link>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                      
                    )
                  })
                }
                
                </div>
              </div>
            )
            : (
              <div onClick={toggleMenu}>
               <Image src={MenuImg} /> 
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
