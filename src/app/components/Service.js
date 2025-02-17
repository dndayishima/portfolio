"use client";

import React from "react";
import { servicesData } from "../Data/data";

export default function Services() {
  return (
    <section
      className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800"
      id="service"
    >
      <div className="container">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">
            Mes services
          </h3>

          <p className="text-slate-400 max-w-xl mx-auto text-[15px]">
            Découvrez comment je peux vous aider à atteindre vos objectifs et à
            donner vie à vos projets web et mobiles.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
          {servicesData.map((item, index) => {
            const Icon = item.Icon;
            return (
              <div
                className="px-6 py-10 shadow shadow-gray-200 hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900"
                key={index}
              >
                <Icon className="h-10 w-10 stroke-1 text-amber-500" />

                <div className="content mt-7">
                  <div className="title h5 text-[17px] font-medium hover:text-amber-500">
                    {item.title}
                  </div>
                  {/*<Link
                    href=""
                    className="title h5 text-[17px] font-medium hover:text-amber-500"
                  >
                    {item.title}
                  </Link>*/}
                  <p className="text-slate-400 mt-3 text-[15px]">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
