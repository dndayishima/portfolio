"use client";
import React from "react";
import Image from "next/image";
export default function Experience() {
  return (
    <section
      className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800"
      id="experience"
    >
      <div className="container">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">
            Expériences professionnelles
          </h3>

          <p className="text-slate-400 max-w-xl mx-auto text-[15px]">
            Mon expérience professionnelle, source de ma motivation pour le
            développement, inclut une variété de projets passionnants. Découvrez
            mes réalisations et mon engagement pour l'excellence dans le
            développement web et mobile.
          </p>
        </div>

        <div className="grid grid-cols-1 mt-8">
          <div className="relative after:content-[''] after:absolute after:top-0 ltr:md:after:right-0 ltr:md:after:left-0 rtl:md:after:left-0 rtl:md:after:right-0 after:w-px after:h-full md:after:m-auto after:border-s-2 after:border-dashed after:border-gray-200 dark:after:border-gray-700 ms-3 md:ms-0">
            <div
              className="ms-8 md:ms-0 relative after:content-[''] after:absolute after:top-[9px] after:rounded-full after:z-10 after:w-2.5 after:h-2.5 after:bg-amber-500 md:after:mx-auto ltr:md:after:right-0 ltr:md:after:left-0 rtl:md:after:left-0 rtl:md:after:right-0 ltr:after:-left-9 rtl:after:-right-9 before:content-[''] before:absolute md:before:mx-auto ltr:md:before:right-0 ltr:md:before:left-0 ltr:before:-left-11 rtl:md:before:left-0 rtl:md:before:right-0 rtl:before:-right-11 before:rounded-full before:z-10 before:border-2 before:border-dashed before:border-gray-200 dark:before:border-gray-700 before:top-0 before:w-7 before:h-7 before:bg-white dark:before:bg-slate-900"
              style={{ marginBottom: 50 }}
            >
              <div className="grid md:grid-cols-2">
                <div className="md:text-end md:me-8 relative">
                  <Image
                    src="/images/logos/experiences/zol-logo.png"
                    className="rounded-full h-9 w-9 md:ms-auto"
                    alt=""
                    height={0}
                    width={0}
                    sizes="100vw"
                    style={{ width: "200%", height: "auto" }}
                  />
                  <h5 className="my-2 font-semibold text-lg">Norsys x ZOL</h5>
                  <h6 className="text-sm mb-0">juin 2022 - sept. 2023</h6>
                </div>

                <div className="ltr:float-left rtl:float-right text-start md:ms-8 mt-6 md:mt-0">
                  <h5 className="title mb-1 font-semibold">
                    Développeur React Native / Nest.js
                  </h5>
                  <p className="mt-3 mb-0 text-slate-400 text-[15px]">
                    ZOL est une agence web et mobile indépendante, spécialisée
                    dans la conception et le développement de solutions
                    digitales sur-mesure à forte valeur ajoutée.
                  </p>
                  <p className="mt-3 mb-0 text-slate-400 text-[15px]">
                    Chez ZOL, j'interviens en tant qu'expert React Native pour
                    maintenir et faire évoluer l'application myR.A.S appartenant
                    à R.A.S, un grand groupe d'intérim en France et au Maroc.
                  </p>
                  <p className="mt-3 mb-0 text-slate-400 text-[15px]">
                    💼 Missions :
                  </p>
                  <p className="mt-3 mb-0 text-slate-400 text-[15px]">
                    ✅ Développement mobile React Native
                    <br />✅ Architecture, conception des APIs et de nouvelles
                    fonctionnalités
                    <br />✅ Réalisation des tests unitaires et end to end
                  </p>
                  <p className="mt-3 mb-0 text-slate-400 text-[15px]">
                    👨‍💻 TypeScript, React Native, NestJS, MongoDB, Jest, Detox
                    <br />
                    ⚙️ Gitlab CI/CD, Docker, AppCenter
                  </p>
                </div>
              </div>
            </div>

            <div
              className="ms-8 md:ms-0 relative after:content-[''] after:absolute after:top-[9px] after:rounded-full after:z-10 after:w-2.5 after:h-2.5 after:bg-amber-500 md:after:mx-auto ltr:md:after:right-0 ltr:md:after:left-0 rtl:md:after:left-0 rtl:md:after:right-0 ltr:after:-left-9 rtl:after:-right-9 before:content-[''] before:absolute md:before:mx-auto ltr:md:before:right-0 ltr:md:before:left-0 ltr:before:-left-11 rtl:md:before:left-0 rtl:md:before:right-0 rtl:before:-right-11 before:rounded-full before:z-10 before:border-2 before:border-dashed before:border-gray-200 dark:before:border-gray-700 before:top-0 before:w-7 before:h-7 before:bg-white dark:before:bg-slate-900"
              style={{ marginBottom: 50 }}
            >
              <div className="grid md:grid-cols-2">
                <div className="md:text-end md:me-8 relative">
                  <Image
                    src="/images/logos/experiences/homeserve-logo.png"
                    className="rounded-full h-9 w-9 md:ms-auto"
                    alt=""
                    height={0}
                    width={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                  />
                  <h5 className="my-2 font-semibold text-lg">
                    Norsys x HomeServe
                  </h5>
                  <h6 className="text-sm mb-0">nov. 2021 - juin 2022</h6>
                </div>

                <div className="ltr:float-left rtl:float-right text-start md:ms-8 mt-6 md:mt-0">
                  <h5 className="title mb-1 font-semibold">
                    Développeur React / Gatsby
                  </h5>
                  <p className="mt-3 mb-0 text-slate-400 text-[15px]">
                    HomeServe est un groupe spécialisé dans les services pour la
                    maison, notamment l’installation, l’assistance et le
                    dépannage, ainsi que les réparations dans les domaines de la
                    plomberie, de l’électricité, du chauffage, du gaz, de
                    l’électroménager et des objets connectés
                  </p>
                  <p className="mt-3 mb-0 text-slate-400 text-[15px]">
                    Je suis intervenu chez HomeServe en tant que Développeur
                    React pour une mise en place d'une nouvelle application web,
                    un nouveau tunnel d'achat.
                  </p>
                  <p className="mt-3 mb-0 text-slate-400 text-[15px]">
                    💼 Missions :
                  </p>
                  <p className="mt-3 mb-0 text-slate-400 text-[15px]">
                    ✅ Développement front des tunnels de souscription aux
                    contrats de prestations
                    <br />✅ Maintien des espaces client existants
                    <br />✅ Développement de nouveaux tunnels de vente suite à
                    des évolutions législatives <br />✅ Réalisation des tests
                    fonctionnels
                  </p>
                  <p className="mt-3 mb-0 text-slate-400 text-[15px]">
                    👨‍💻 React JS, Gatsby, GraphQL, Prismic, Ava, Puppeteer
                    <br />
                    ⚙️ Jira, Git, Gitlab CI/CD, Docker
                  </p>
                </div>
              </div>
            </div>

            <div
              className="ms-8 md:ms-0 relative after:content-[''] after:absolute after:top-[9px] after:rounded-full after:z-10 after:w-2.5 after:h-2.5 after:bg-amber-500 md:after:mx-auto ltr:md:after:right-0 ltr:md:after:left-0 rtl:md:after:left-0 rtl:md:after:right-0 ltr:after:-left-9 rtl:after:-right-9 before:content-[''] before:absolute md:before:mx-auto ltr:md:before:right-0 ltr:md:before:left-0 ltr:before:-left-11 rtl:md:before:left-0 rtl:md:before:right-0 rtl:before:-right-11 before:rounded-full before:z-10 before:border-2 before:border-dashed before:border-gray-200 dark:before:border-gray-700 before:top-0 before:w-7 before:h-7 before:bg-white dark:before:bg-slate-900"
              style={{ marginBottom: 50 }}
            >
              <div className="grid md:grid-cols-2">
                <div className="md:text-end md:me-8 relative">
                  <Image
                    src="/images/logos/experiences/plebicom-logo.jpeg"
                    className="rounded-full h-9 w-9 md:ms-auto"
                    alt=""
                    height={0}
                    width={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                  />
                  <h5 className="my-2 font-semibold text-lg">Plebicom</h5>
                  <h6 className="text-sm mb-0">sept. 2020 - oct. 2021</h6>
                </div>

                <div className="ltr:float-left rtl:float-right text-start md:ms-8 mt-6 md:mt-0">
                  <h5 className="title mb-1 font-semibold">
                    Développeur React / React Native / Next.js / Java Spring
                    Boot
                  </h5>
                  <p className="mt-3 mb-0 text-slate-400 text-[15px]">
                    Un éditeur de portails spécialisés dans les bons plans
                    shopping (CashBack, Flash Ticket, Bons d’achat en ligne et
                    en magasin...).
                  </p>
                  <p className="mt-3 mb-0 text-slate-400 text-[15px]">
                    Chez Plebicom je suis intervenu en tant que Développeur
                    fullstack sur l'application eBuyClub qui est une plateforme
                    qui propose de multiples catégories pour profiter des offres
                    de cashback : voyage, alimentation, maison, beauté, mode,
                    etc. <br />
                    J'intervenait egalement sur les applications marques
                    blanches de Pleciom.
                  </p>
                  <p className="mt-3 mb-0 text-slate-400 text-[15px]">
                    💼 Missions :
                  </p>
                  <p className="mt-3 mb-0 text-slate-400 text-[15px]">
                    ✅ Développement Front-End et Mobile de la plateforme
                    eBuyClub
                    <br />✅ Développement Back-End des APIs de la plateforme
                    eBuyClub
                    <br />✅ Développement Mobile des applications marques
                    blanches de Plebicom
                  </p>
                  <p className="mt-3 mb-0 text-slate-400 text-[15px]">
                    👨‍💻 JavaScript, React JS, React Native, Next JS, Java Spring
                    Boot
                    <br />
                    ⚙️ Agilité, Scrum, Jira, Git, Gitlab CI/CD, Apple Store,
                    Huawei AppGallery, Google Play Store
                  </p>
                </div>
              </div>
            </div>

            <div
              className="ms-8 md:ms-0 relative after:content-[''] after:absolute after:top-[9px] after:rounded-full after:z-10 after:w-2.5 after:h-2.5 after:bg-amber-500 md:after:mx-auto ltr:md:after:right-0 ltr:md:after:left-0 rtl:md:after:left-0 rtl:md:after:right-0 ltr:after:-left-9 rtl:after:-right-9 before:content-[''] before:absolute md:before:mx-auto ltr:md:before:right-0 ltr:md:before:left-0 ltr:before:-left-11 rtl:md:before:left-0 rtl:md:before:right-0 rtl:before:-right-11 before:rounded-full before:z-10 before:border-2 before:border-dashed before:border-gray-200 dark:before:border-gray-700 before:top-0 before:w-7 before:h-7 before:bg-white dark:before:bg-slate-900"
              style={{ marginBottom: 50 }}
            >
              <div className="grid md:grid-cols-2">
                <div className="md:text-end md:me-8 relative">
                  <Image
                    src="/images/logos/experiences/lambdasoft-logo.png"
                    className="rounded-full h-9 w-9 md:ms-auto"
                    alt=""
                    height={0}
                    width={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                  />
                  <h5 className="my-2 font-semibold text-lg">Lambdasoft</h5>
                  <h6 className="text-sm mb-0">avr. 2018 - août 2020</h6>
                </div>

                <div className="ltr:float-left rtl:float-right text-start md:ms-8 mt-6 md:mt-0">
                  <h5 className="title mb-1 font-semibold">
                    Développeur React / Node.js
                  </h5>
                  <p className="mt-3 mb-0 text-slate-400 text-[15px]">
                    Lambdasoft développe RHAPI depuis 2016, une API capable de
                    gérer la prise de rendez-vous et de coter les actes
                    médicaux.
                  </p>
                  <p className="mt-3 mb-0 text-slate-400 text-[15px]">
                    💼 Missions :
                  </p>
                  <p className="mt-3 mb-0 text-slate-400 text-[15px]">
                    ✅ Développement de services associés à des applications de
                    santé
                    <br />✅ Développement d'un outil de gestion d'agendas et de
                    cabinets médicaux
                  </p>
                  <p className="mt-3 mb-0 text-slate-400 text-[15px]">
                    👨‍💻 JavaScript, Node JS, React JS, Bash
                    <br />
                    ⚙️ Git, OVHCloud
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
