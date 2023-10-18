"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { expertiseTechno } from "../Data/data";
import CountUp from "react-countup";

export default function AboutUs() {
  return (
    <section className="relative md:py-24 py-16" id="about">
      <div className="container">
        <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
          <div className="lg:col-span-5 lg:px-8">
            <div className="relative">
              <div className="absolute inset-0 border dark:border-gray-800 rounded-full -mt-[10px] -ms-3 h-[100%] w-[100%] -z-1"></div>
              <Image
                src="/images/hero/hero-image-3.png"
                alt=""
                height={0}
                width={0}
                sizes="100vw"
                style={{ height: "auto", width: "100%" }}
                className="rounded-full shadow-md shadow-gray-200 dark:shadow-gray-800"
              />

              <div className="absolute lg:bottom-20 md:bottom-10 bottom-6 ltr:lg:-right-16 rtl:lg:-left-16 ltr:md:-right-8 rtl:md:-left-8 ltr:right-0 rtl:left-0 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 m-3 w-44 text-center">
                <h6 className="font-semibold">Dév React</h6>
                <span className="text-2xl font-medium text-amber-500 mb-0">
                  +
                  <span className="counter-value font-bold" data-target="7">
                    <CountUp
                      start={1}
                      className="counter-value"
                      end={5}
                      duration={3}
                    />
                  </span>
                </span>
                <span className="text-sm text-slate-400">
                  &nbsp; ans <br /> d'expérience
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="lg:ms-5">
              <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">
                Je concrètise vos projets
              </h3>

              <p className="text-slate-400 max-w-xl text-[15px]">
                Je suis un développeur JavaScript / TypeScript doté d'une
                expertise robuste en React.js, React Native et Next.js.
                <br />
                Ma maîtrise de ces technologies me permet de créer des
                applications avec des interfaces graphiques d’un niveau avancé.{" "}
                <br />
                De plus, je possède des compétences avancées en Node.js et
                Nest.js qui me donnent la possibilité de concevoir des APIs
                hautement performantes.
              </p>
              <p className="text-slate-400 max-w-xl text-[15px] mt-6">
                Mon parcours de plusieurs années dans le développement se
                traduit par une capacité éprouvée à produire des résultats plus
                que satisfaisants.
                <br />
                Chaque projet est pour moi l'occasion de déployer des solutions
                techniques pointues pour répondre aux besoins spécifiques.
              </p>

              <div className="mt-6">
                <Link
                  href="#project"
                  className="btn bg-amber-500/10 hover:bg-amber-500 border-amber-500/10 hover:border-amber-500 text-amber-500 hover:text-white rounded-md me-2 mt-2"
                >
                  Mes réalisations
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container md:mt-24 mt-16">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">
            Expértise technique
          </h3>

          <p className="text-slate-400 max-w-xl mx-auto text-[15px]">
            Explorez mon expertise dans un éventail de technologies qui
            alimentent la création de solutions web et mobiles de haute qualité.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
          {expertiseTechno.map((item, index) => {
            const iconSrc = `/images${item.icon}`;
            return (
              <div
                className="flex group shadow shadow-gray-200 dark:shadow-gray-800 dark:hover:shadow-gray-700 items-center p-3 rounded-lg bg-white dark:bg-slate-900"
                key={index}
              >
                <div
                  className="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-amber-500/10 text-amber-500 text-center rounded-xl me-5 transition-all duration-500" /*group-hover:bg-amber-500 group-hover:text-white*/
                >
                  <div className="rotate-45">
                    <Image
                      width={30}
                      height={30}
                      src={iconSrc}
                      alt={`icon-${item.title}`}
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="mb-0 text-[17px] font-medium">{item.title}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
