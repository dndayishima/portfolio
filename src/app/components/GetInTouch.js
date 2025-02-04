"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function GetInTouch() {
  const [formStatus, setFormStatus] = useState(null);

  async function handleOnSubmit(e) {
    e.preventDefault();
    const formData = {};

    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) {
        return;
      }
      formData[field.name] = field.value;
    });

    await fetch("/api/send-email", {
      method: "post",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.ok) {
        setFormStatus("EMAIL_SENT");
      } else {
        console.log(response);
        setFormStatus("ERROR_OCCURED");
      }
    });
  }

  return (
    <section className="relative md:py-24 py-16" id="contact">
      <div className="container">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">
            Rentrons en contact
          </h3>

          <p className="text-slate-400 max-w-xl mx-auto text-[15px]">
            N&apos;hésitez pas à me contacter pour discuter de votre projet ou pour
            toute autre question. Je suis toujours prêt à échanger et à
            collaborer.
          </p>
        </div>

        <div className="container mt-8">
          <div className="lg:col-span-8">
            <div className="p-6 rounded-md shadow bg-white dark:bg-slate-900">
              <form method="post" onSubmit={handleOnSubmit}>
                <div className="grid lg:grid-cols-12 lg:gap-5">
                  <div className="lg:col-span-6 mb-5">
                    <input
                      name="name"
                      id="name"
                      type="text"
                      className="form-input w-full py-2 px-3 border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded h-10 outline-none bg-transparent focus:border-amber-500/50 dark:focus:border-amber-500/50 focus:shadow-none focus:ring-0 text-[15px]"
                      placeholder="Nom :"
                    />
                  </div>

                  <div className="lg:col-span-6 mb-5">
                    <input
                      name="email"
                      id="email"
                      type="email"
                      className="form-input w-full py-2 px-3 border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded h-10 outline-none bg-transparent focus:border-amber-500/50 dark:focus:border-amber-500/50 focus:shadow-none focus:ring-0 text-[15px]"
                      placeholder="Email :"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1">
                  <div className="mb-5">
                    <input
                      name="subject"
                      id="subject"
                      className="form-input w-full py-2 px-3 border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded h-10 outline-none bg-transparent focus:border-amber-500/50 dark:focus:border-amber-500/50 focus:shadow-none focus:ring-0 text-[15px]"
                      placeholder="Objet :"
                    />
                  </div>

                  <div className="mb-5">
                    <textarea
                      name="message"
                      id="message"
                      className="form-input w-full py-2 px-3 border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded h-28 outline-none bg-transparent focus:border-amber-500/50 dark:focus:border-amber-500/50 focus:shadow-none focus:ring-0 text-[15px]"
                      placeholder="Message :"
                    ></textarea>
                  </div>
                </div>

                {formStatus && (
                  <div className="grid grid-cols-1">
                    <span
                      style={{
                        paddingBottom: 20,
                        color: formStatus === "EMAIL_SENT" ? "green" : "red",
                      }}
                    >
                      {formStatus === "EMAIL_SENT"
                        ? "Votre mail a été envoyé !"
                        : "Une erreur est survenu, veuillez réessayer plus tard !"}
                    </span>
                  </div>
                )}

                <button
                  type="submit"
                  id="submit"
                  className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white rounded-md h-11 justify-center flex items-center"
                >
                  Envoyer
                </button>
              </form>
            </div>
          </div>
          
          <div className="container mt-8 text-center">
            <div className="mt-4">
              <div className="ms-6">
                <h5 className="text-[17px] dark:text-white mb-2 font-medium">
                  Email
                </h5>
                <Link
                  href="mailto:divin.ndayishima@outlook.com"
                  className="text-slate-400 text-[15px]"
                >
                  divin.ndayishima@outlook.com
                </Link>
              </div>
            </div>
            
            <div className="mt-4">
              <div className="ms-6">
                <h5 className="text-[17px] dark:text-white mb-2 font-medium">
                  Localisation
                </h5>
                <p className="text-slate-400 text-[15px] mb-2">
                  Paris, FRANCE
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
