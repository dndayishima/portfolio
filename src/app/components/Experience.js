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
            mes réalisations et mon engagement pour l&apos;excellence dans le
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
                    Chez ZOL, j&apos;interviens en tant qu&apos;expert React Native pour
                    maintenir et faire évoluer l&apos;application myR.A.S appartenant
                    à R.A.S, un grand groupe d&apos;intérim en France et au Maroc.
                  </p>
                  <p className="mt-3 mb-0 text-slate-400 text-[15px]">
                    myR.A.S est une application qui est utilisée par les
                    intérimaires pour effectuer un certain nombre d’opérations
                    notamment :
                  </p>
                  <p className="mt-3 mb-0 text-slate-400 text-[15px]">
                    - la mise à jour du profil d&apos;un intérimaire
                    <br />
                    - le renseignement des absences / disponibilités
                    <br />
                    - la visualisation et téléchargement des bulletins de
                    salaire <br />
                    - la recherche et candidatures à des missions <br />
                    - la signature des contrats <br />
                  </p>
                  <p className="mt-3 mb-0 text-slate-400 text-[15px]">
                    L’objectif principal de ma mission était de contribuer à
                    l’intégration d’un maximum de services ce qui permettrait
                    aux intérimaires d’être totalement autonomes sans ce rendre
                    dans leurs agences pour y effectuer des opérations.
                  </p>
                  <p className="mt-3 mb-0 text-slate-400 text-[15px]">
                    💼 Missions :
                  </p>
                  <p className="mt-3 mb-0 text-slate-400 text-[15px]">
                    ✅ Développement mobile et évolution de l’application
                    myR.A.S
                    <br />✅ Architecture, conception des APIs et microservices
                    pour les nouvelles fonctionnalités
                    <br />✅ Mise en place des tests unitaires et end-to-end
                    <br />✅ Mise en place du déploiement automatisé de
                    l’application avec Microsoft AppCenter
                  </p>
                  <p className="mt-3 mb-0 text-slate-400 text-[15px]">
                    👨‍💻 TypeScript, React Native, Redux, Nest.js, MongoDB, Jest,
                    Detox
                    <br />
                    ⚙️ Gitlab CI/CD, Docker, Microsoft AppCenter, Amazon Web
                    Services
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
                    Développeur React.js / Gatsby
                  </h5>
                  <p className="mt-3 mb-0 text-slate-400 text-[15px]">
                    HomeServe est un groupe spécialisé dans les services pour la
                    maison, notamment l’installation, l’assistance et le
                    dépannage, ainsi que les réparations dans les domaines de la
                    plomberie, de l&apos;électricité, du chauffage, du gaz, de
                    l’électroménager et des objets connectés.
                  </p>
                  <p className="mt-3 mb-0 text-slate-400 text-[15px]">
                    Je suis intervenu chez HomeServe en tant que Développeur
                    React.js / Gatsby pour une mise place d’une nouvelle
                    application web, un nouveau tunnel d’achat et de signature
                    de contrats.
                    <br />
                    Ce tunnel permettait aux clients d’effectuer des paiements
                    et signatures de contrats suite aux démarchages
                    téléphoniques des agents HomeServe.
                  </p>
                  <p className="mt-3 mb-0 text-slate-400 text-[15px]">
                    💼 Missions :
                  </p>
                  <p className="mt-3 mb-0 text-slate-400 text-[15px]">
                    ✅ Développement d’un tunnel de souscription aux contrats de
                    prestations
                    <br />✅ Gestion des signatures de documents avec YouSign
                    <br />✅ Mise en place des tests fonctionnels
                    <br />✅ Mise en place d’un déploiement continu de la
                    nouvelle application
                  </p>
                  <p className="mt-3 mb-0 text-slate-400 text-[15px]">
                    👨‍💻 React.js, Gatsby, GraphQL, CMS Prismic, Ava, Puppeteer
                    <br />
                    ⚙️ Gitlab CI/CD, Docker, YouSign, Google Cloud Platform
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
                    Développeur React.js / React Native / Next.js / Java Spring
                    Boot
                  </h5>
                  <p className="mt-3 mb-0 text-slate-400 text-[15px]">
                    Plebicom est un éditeur de portails spécialisés dans les
                    bons plans shopping (CashBack, Flash Ticket et Bons d’achat
                    en ligne et en magasin).
                  </p>
                  <p className="mt-3 mb-0 text-slate-400 text-[15px]">
                    Chez Plebicom, je suis intervenu en tant que Développeur
                    fullstack sur l’application eBuyClub qui est une plateforme
                    qui propose de multiples catégories pour profiter des offres
                    de cashback : voyage, alimentation, maison, beauté, mode,
                    etc.
                    <br />
                    J’intervenais également sur les applications marques
                    blanches de Plebicom comme Hubside Reward Club, pour des
                    évolutions et mises à jour.
                  </p>
                  <p className="mt-3 mb-0 text-slate-400 text-[15px]">
                    💼 Missions :
                  </p>
                  <p className="mt-3 mb-0 text-slate-400 text-[15px]">
                    ✅ Développement web et mobile de nouvelles fonctionnalités
                    sur eBuyClub et Hubside Reward Club
                    <br />✅ Développement orienté performances
                    <br />✅ Architecture, conception des APIs et microservices
                    <br />✅ Mise en place d’un déploiement continu de
                    l’application web d’eBuyClub
                  </p>
                  <p className="mt-3 mb-0 text-slate-400 text-[15px]">
                    👨‍💻 JavaScript, React.js, React Native, Redux, Next.js, Java
                    Spring Boot, Microsoft SQL Server
                    <br />
                    ⚙️ Git, Gitlab CI/CD, Apple Store, Huawei AppGallery, Google
                    Play Store
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
                    Développeur React.js / Node.js
                  </h5>
                  <p className="mt-3 mb-0 text-slate-400 text-[15px]">
                    Lambdasoft est un éditeur de logiciels spécialisé dans les
                    services de la santé. Cette société développe et maintient
                    RHAPI une API Rest capable de gérer un cabinet médical, de
                    la prise de rendez-vous d’un patient jusqu’à la
                    télétransmission de feuilles de soin électroniques à la
                    sécurité sociale.
                  </p>
                  <p className="mt-3 mb-0 text-slate-400 text-[15px]">
                    💼 Missions :
                  </p>
                  <p className="mt-3 mb-0 text-slate-400 text-[15px]">
                    ✅ Développement d’une application de prise de rendez-vous
                    en ligne
                    <br />✅ Évolutions d’une application de gestion de cabinets
                    médicaux
                    <br />✅ Développement d’un service d’envoi de mails et SMS
                    <br />✅ Édition et visualisation d’une feuille de soin
                    électronique
                    <br />✅ Développement d’un service de télétransmission
                    d’une feuille de soins électronique à la sécurité sociale
                  </p>
                  <p className="mt-3 mb-0 text-slate-400 text-[15px]">
                    👨‍💻 JavaScript, React.js, Node.js, Express.js, Bash
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
