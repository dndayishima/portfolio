"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Link as Link1 } from "react-scroll";
import * as Unicons from "@iconscout/react-unicons";
import Image from "next/image";

export default function Navbar() {
  let [stickyNavbar, setstickyNavbar] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", windowScroll);
    }
  });

  function windowScroll() {
    setstickyNavbar(
      document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50
    );
  }
  return (
    <nav className={`${stickyNavbar ? "is-sticky" : ""} navbar`} id="navbar">
      <div className="container flex flex-wrap items-center justify-between">
        <Link
          href="/"
          className="navbar-brand md:me-8"
          style={{ marginTop: -40, marginBottom: -40 }}
        >
          <Image
            width={140}
            height={20}
            src="/images/dn-logo-black.png"
            className="inline-block dark:hidden"
            alt=""
          />
          <Image
            width={140}
            height={20}
            src="/images/dn-logo-white.png"
            className="hidden dark:inline-block"
            alt=""
          />
        </Link>

        <div className="nav-icons flex items-center lg_992:order-2 ms-auto md:ms-8">
          {/* <!-- Navbar Button --> */}
          <ul className="list-none menu-social mb-0">
            <li className="inline-flex">
              {/*<Link href="" className="ms-1">
                <span className="login-btn-primary">
                  <span className="btn btn-icon btn-sm rounded-full bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white">
                    <Unicons.UilDribbble width={16} />
                  </span>
                </span>
                <span className="login-btn-light">
                  <span className="btn btn-icon btn-sm rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700">
                    <Unicons.UilDribbble width={16} />
                  </span>
                </span>
              </Link>*/}
              {/*<Link href="" className="ms-1">
                <span className="login-btn-primary ">
                  <span className="btn btn-icon btn-sm rounded-full bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white">
                    <Unicons.UilBehance width={16} />
                  </span>
                </span>
                <span className="login-btn-light ">
                  <span className="btn btn-icon btn-sm rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700">
                    <Unicons.UilBehance width={16} />
                  </span>
                </span>
              </Link>*/}
              <Link
                href="https://www.linkedin.com/in/divinndayishima/"
                className="ms-1"
                target="_blank"
              >
                <span className="login-btn-primary">
                  <span className="btn btn-icon btn-sm rounded-full bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white">
                    <Unicons.UilLinkedin width={16} />
                  </span>
                </span>
                <span className="login-btn-light">
                  <span className="btn btn-icon btn-sm rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700">
                    <Unicons.UilLinkedin width={16} />
                  </span>
                </span>
              </Link>
            </li>
          </ul>
          {/* <!-- Navbar Collapse Manu Button --> */}
          {/*<button
            data-collapse="menu-collapse"
            type="button"
            className="collapse-btn inline-flex items-center ms-2 text-dark dark:text-white lg_992:hidden"
            aria-controls="menu-collapse"
            aria-expanded="false"
          >
            <span className="sr-only">Navigation Menu</span>
            <i className="mdi mdi-menu text-[24px]"></i>
          </button>*/}
        </div>

        {/* <!-- Navbar Manu --> */}
        <div
          className="navigation lg_992:order-1 lg_992:flex hidden ms-auto"
          id="menu-collapse"
        >
          <ul className="navbar-nav" id="navbar-navlist">
            <li className="nav-item">
              <Link1
                to="home"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link"
              >
                Accueil
              </Link1>
            </li>
            <li className="nav-item">
              <Link1
                to="about"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link"
              >
                À propos
              </Link1>
            </li>
            <li className="nav-item">
              <Link1
                to="service"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link"
              >
                Services
              </Link1>
            </li>
            <li className="nav-item">
              <Link1
                to="experience"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link"
              >
                Expériences
              </Link1>
            </li>
            {/*<li className="nav-item">
              <Link1
                to="project"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link"
              >
                Projets
              </Link1>
            </li> à remettre */}
            {/*<li className="nav-item">
              <Link1
                to="blog"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link"
              >
                Blog
              </Link1>
            </li>*/}
            <li className="nav-item">
              <Link1
                to="contact"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link"
              >
                Me contacter
              </Link1>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
