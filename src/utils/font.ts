import {
  // Montserrat,
  // Space_Grotesk,
  // Rubik,
  ZCOOL_QingKe_HuangYou,
} from "next/font/google";
import localFont from "next/font/local";

// export const montserrat = Montserrat({
//   weight: ["400"],
//   subsets: ["latin"],
//   display: "swap",
//   preload: true,
// });

// export const spaceGrotesk = Space_Grotesk({
//   weight: ["400"],
//   subsets: ["latin"],
//   display: "swap",
//   preload: true,
// });

// export const rubik = Rubik({
//   weight: ["400"],
//   subsets: ["latin"],
//   display: "swap",
//   preload: true,
// });

export const zcool = ZCOOL_QingKe_HuangYou({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const misaki = localFont({
  src: "../fonts/Misaki-Regular.ttf",
  weight: "400",
  display: "swap",
  preload: true,
});

export const eras = localFont({
  src: "../fonts/Eras-Bold.ttf",
  weight: "400",
  display: "swap",
  preload: true,
});

export const marlon = localFont({
  src: "../fonts/marlon-pro-heavy.ttf",
  weight: "400",
  display: "swap",
  preload: true,
});

export const lava = localFont({
  src: "../fonts/Lava-Arabic.ttf",
  weight: "400",
  display: "swap",
  preload: true,
});

export const galaxy = localFont({
  src: "../fonts/Luar-Galaxy.ttf",
  weight: "400",
  display: "swap",
  preload: true,
});
