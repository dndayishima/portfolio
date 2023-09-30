import "../app/assets/css/tailwind.css";
import "../app/assets/css/materialdesignicons.min.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title:
    "Divin - Développeur React | React Native | Next.js | Node.js | Nest.js",
  description:
    "Je suis un développeur expérimenté dans le domaine des technologies web et mobile, avec une expertise particulière en React, React Native, Next.js et Nest.js. Explorez mes projets et découvrez mes réalisations dans la création d'applications innovantes et hautement performantes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${poppins.variable} font-poppins text-base text-black dark:text-white dark:bg-slate-900 `}
      >
        {children}
      </body>
    </html>
  );
}
