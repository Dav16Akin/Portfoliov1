import { Archivo_Black, Montserrat, Inter } from "next/font/google";

export const archivoBlack = Archivo_Black({
  weight: "400",
  variable: "--font-archivo-black",
  display: "swap",
  subsets: ["latin"],
});




export const inter = Inter({
    weight: ["100", "200", "300", "400", "900"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
})