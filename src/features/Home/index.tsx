"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@chakra-ui/react";
// import { Button, ListItem, UnorderedList } from "@chakra-ui/react";
// import { ArrowRightOutlined } from "@ant-design/icons";

import YinLoader from "@/components/Loader/Custom";

import { useIsMounted } from "@/hooks/useIsMounted";
import { useCopyText } from "@/hooks/useCopyText";

// import { contractAddress, findUsLink, socialsLink } from "@/constants/links";
// import { rubik, satoshi } from "@/utils/font";
// import { ecosystemList } from "./constants/ecosystem";
// import { roadmapList } from "./constants/roadmap";

// import { FeatureArrow } from "@/utils/Icon/arrow";

import BannerApp from "@/assets/angry-cat-header.png";
import HeroApp from "@/assets/angry-cat-hero.png";
import HeroFlipApp from "@/assets/angry-cat-hero-flip.png";

// import HeroApp from "@/assets/hero-app.png";
// import MapApp from "@/assets/map-app.png";
// import DextoolsLogo from "@/assets/logo-dextools.png";
// import EtherscanLogo from "@/assets/logo-etherscan.png";
// import TwitterLogo from "@/assets/logo-twitter.png";
// import TelegramLogo from "@/assets/logo-telegram.png";
// import Dexscreener from "@/assets/dexscreener.png";
// import Uniswap from "@/assets/uniswap.png";
// import Solidproof from "@/assets/solidproof.png";
// import Coingecko from "@/assets/coingecko.png";

import "./style.css";
import { contractAddress, findUsLink, socialsLink } from "@/constants/links";
import { TelegramIcon } from "@/utils/Icon/Socials/Telegram";
import { TwitterIcon } from "@/utils/Icon/Socials/Twitter";
import { RaydiumIcon } from "@/utils/Icon/Socials/Raydium";
import Anchor from "@/components/Anchor";

interface Props {}

// const introVidUrl =
//   "https://res.cloudinary.com/dwppcshmi/video/upload/f_auto:video,q_auto/v1/rabbit_images/cqf6n5ikkmjsod1jpfxl";

// const contentStyle: React.CSSProperties = {
//   height: "160px",
//   color: "#fff",
//   lineHeight: "160px",
//   textAlign: "center",
//   background: "transparent",
// };

const Home: React.FC<Props> = () => {
  // const [isWelcomeVisible, setIsWelcomeVisible] = useState(false);
  // const [isAboutVisible, setIsAboutVisible] = useState(false);
  // const [isTokensVisible, setIsTokensVisible] = useState(false);
  // const [isSliderVisible, setIsSliderVisible] = useState(false);

  const welcomeRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const tokensRef = useRef<HTMLDivElement | null>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const isMounted = useIsMounted();
  const [copyContent] = useCopyText();

  // useEffect(() => {
  //   if (isMounted) {
  //     const observer = new IntersectionObserver((entries) => {
  //       const entry = entries[0];
  //       setIsSliderVisible(entry.isIntersecting);
  //     });

  //     observer.observe(sliderRef.current as HTMLDivElement);
  //   }
  // }, [isMounted]);

  // useEffect(() => {
  //   if (isMounted) {
  //     const observer = new IntersectionObserver((entries) => {
  //       const entry = entries[0];
  //       setIsWelcomeVisible(entry.isIntersecting);
  //     });

  //     observer.observe(welcomeRef.current as HTMLDivElement);
  //   }
  // }, [isMounted]);

  // useEffect(() => {
  //   if (isMounted) {
  //     const observer = new IntersectionObserver((entries) => {
  //       const entry = entries[0];
  //       setIsAboutVisible(entry.isIntersecting);
  //     });

  //     observer.observe(aboutRef.current as HTMLDivElement);
  //   }
  // }, [isMounted]);

  // useEffect(() => {
  //   if (isMounted) {
  //     const observer = new IntersectionObserver((entries) => {
  //       const entry = entries[0];
  //       setIsTokensVisible(entry.isIntersecting);
  //     });

  //     observer.observe(tokensRef.current as HTMLDivElement);
  //   }
  // }, [isMounted]);

  if (!isMounted) {
    return (
      <div className="homepage-container bg-angry-cat-primary">
        <YinLoader />
      </div>
    );
  }

  return (
    <div className="homepage-container">
      <div id="welcome" className="relative z-30" />
      <div
        ref={welcomeRef}
        className="w-full h-full m-auto flex flex-wrap justify-center items-center relative"
      >
        <div className="w-full h-[400px] sm:h-[100vw] lg:h-[50vw] xl:h-[40vw] m-auto relative">
          {/* <div className="w-full h-full m-auto relative"> */}
          {/* <div className="w-full h-full absolute pt-6 px-4">
            <div className="w-full h-full flex flex-col sm:flex-row items-baseline sm:justify-center mb-10">
              <div className="flex flex-wrap justify-evenly gap-3 order-1 sm:order-2 items-center w-full sm:w-3/4 lg:w-3/5 xl:w-1/2 2xl:w-2/5 h-auto bg-blue-500 rounded-2xl p-3">
                <Anchor
                  href="/"
                  rel="noopener noreferrer"
                  // className="w-auto mr-2 md:mr-4 absolute right-0 top-4"
                  className="w-auto"
                >
                  <div
                    className="w-auto text-white hover:text-yellow-500"
                    // leftIcon={<DollarOutlined style={{ fontSize: "1.5em" }} />}
                  >
                    HOME
                  </div>
                </Anchor>

                <Anchor
                  href="#about"
                  rel="noopener noreferrer"
                  // className="w-auto mr-2 md:mr-4 absolute right-0 top-4"
                  className="w-auto"
                >
                  <div
                    className="w-auto text-white hover:text-yellow-500"
                    // leftIcon={<DollarOutlined style={{ fontSize: "1.5em" }} />}
                  >
                    ABOUT
                  </div>
                </Anchor>

                <Anchor
                  href="#tokenomics"
                  rel="noopener noreferrer"
                  // className="w-auto mr-2 md:mr-4 absolute right-0 top-4"
                  className="w-auto"
                >
                  <div
                    className="w-auto text-white hover:text-yellow-500"
                    // leftIcon={<DollarOutlined style={{ fontSize: "1.5em" }} />}
                  >
                    TOKENOMICS
                  </div>
                </Anchor>

                <Anchor
                  href="#tokenomics"
                  rel="noopener noreferrer"
                  // className="w-auto mr-2 md:mr-4 absolute right-0 top-4"
                  className="w-auto"
                >
                  <div
                    className="w-auto text-white hover:text-yellow-500"
                    // leftIcon={<DollarOutlined style={{ fontSize: "1.5em" }} />}
                  >
                    BUY $
                  </div>
                </Anchor>

                <Anchor
                  href="#tokenomics"
                  rel="noopener noreferrer"
                  // className="w-auto mr-2 md:mr-4 absolute right-0 top-4"
                  className="w-auto"
                >
                  <div
                    className="w-auto text-white hover:text-yellow-500"
                    // leftIcon={<DollarOutlined style={{ fontSize: "1.5em" }} />}
                  >
                    CHART
                  </div>
                </Anchor>
              </div>
            </div>
          </div> */}
          <Image src={BannerApp} alt="header" className="w-full h-full" />
          <div className="w-full h-auto text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl flex justify-center absolute bottom-2 z-30">
            <div
              className="text-angry-cat-secondary hover:text-angry-cat-secondary active:text-angry-cat-secondary cursor-pointer italic"
              onClick={() => copyContent(contractAddress)}
            >
              {contractAddress}
            </div>
            {/* <div
              className="text-5xl hover:text-blue-500 active:text-blue-500 cursor-pointer italic"
              onClick={() => copyContent(contractAddress)}
            >
              {contractAddress}
            </div> */}
          </div>
        </div>
      </div>

      <div className="w-full h-full bg-angry-cat-primary relative">
        {/* <div id="about" className="h-24 sm:h-36 relative z-30" /> */}
        <div id="about" className="h-24 sm:h-36 relative z-30" />
        <div ref={aboutRef} className="w-full h-full relative">
          <div className="homepage-body flex flex-wrap justify-evenly px-2 lg:px-0">
            <div className="w-full lg:w-[47.5%] m-auto text-center">
              <Image
                src={HeroApp}
                alt="angrycat-hero"
                className="w-full h-auto md:h-[75vw] lg:h-full rounded-3xl"
              />
            </div>

            <div className="w-full lg:w-[47.5%]">
              {/* <div className="w-full m-auto text-4xl font-bold text-fatcat-primary mt-4 lg:mt-0">
                $FATCAT
              </div> */}
              <div className="w-full m-auto text-3xl mt-14">
                $ANGRYCAT is the first wave of fierce feline characters to storm
                SOLANA, Join us on a bold and fiery journey, where intensity and
                humor collide for an unforgettable adventure.
              </div>

              <br />
              <div className="w-full flex flex-wrap justify-center lg:justify-start items-center text-white m-auto gap-4">
                <Link
                  href={socialsLink.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-auto flex items-center gap-2 hover:!text-angry-cat-secondary rounded-full p-2"
                >
                  <TelegramIcon className="w-12 h-full fill-white" />
                  <div className="text-3xl">Telegram</div>
                </Link>

                <Link
                  href={socialsLink.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-auto flex items-center gap-2 hover:!text-angry-cat-secondary rounded-full p-2"
                >
                  <TwitterIcon className="w-8 h-full fill-white" />
                  <div className="text-3xl">Twitter</div>
                </Link>

                {/* <Link
                  href={findUsLink.raydium}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-auto flex items-center gap-2 hover:!text-primary rounded-full p-2"
                >
                  <RaydiumIcon className="w-10 h-full fill-white" />
                  <div className="text-3xl">Raydium</div>
                </Link> */}
              </div>
            </div>
          </div>
        </div>

        <div id="buy" className="h-24 sm:h-36 relative z-30" />
        <div className="homepage-body">
          <div className="text-5xl font-bold text-center text-fatcat-primary">
            HOW TO BUY
          </div>

          <div className="w-full md:w-11/12 xl:w-4/5 flex flex-wrap justify-evenly items-center gap-y-8 mx-auto mt-12">
            <div className="w-full h-auto lg:w-[47.5%] p-4 mb-7 border-2 border-white rounded-2xl m-2 sm:m-0 order-2 lg:order-1">
              {/* <div className="text-3xl font-bold mb-4">1. make wallet</div> */}
              <div className="text-2xl lg:text-3xl">
                There are several ways to purchase $ANGRYCAT. We recommend
                starting by downloading the Phantom Wallet.
              </div>

              <div className="text-2xl lg:text-3xl my-4">
                First, buy some SOL and send it to your Phantom address. You can
                then swap for $ANGRYCAT using Phantom’s in-app wallet or a
                decentralized exchange like Jupiter.
              </div>

              <div className="text-2xl lg:text-3xl">
                Additionally, $ANGRYCAT is available for multichain purchase via
                our integrated Raydium swap, or you can use Jupiter if you
                already own some SOL.
              </div>
            </div>

            <div className="w-full lg:w-[47.5%] m-auto text-center order-1 lg:order-2">
              <Image
                src={HeroFlipApp}
                alt="angrycat-hero-flip"
                className="w-full h-auto md:h-[75vw] lg:h-full rounded-3xl p-2 lg:p-0"
              />
            </div>

            {/* <div className="w-full sm:w-[47.5%] h-[22rem] lg:h-72 p-4 mb-7 border-2 border-white rounded-2xl m-2 sm:m-0">
              <div className="text-3xl font-bold mb-4">2. get some sol</div>
              <div className="text-xl">
                many of these wallets offer an option to buy SOL directly with a
                credit or debit card through integrated services like MoonPay or
                Simplex. Just follow the prompts in your wallet to complete the
                purchase.
              </div>
            </div>

            <div className="w-full sm:w-[47.5%] h-[22rem] lg:h-72 p-4 mb-7 border-2 border-white rounded-2xl m-2 sm:m-0">
              <div className="text-3xl font-bold mb-4">3. go to raydium</div>
              <div className="text-xl">
                connect your wallet, Paste the $FATCAT token address and choose
                $FATCAT in the swap interface. Enter the swap amount, confirm
                the swap, and sign the transaction in your wallet.
              </div>
            </div> */}
          </div>
        </div>

        <div id="tokenomics" className="h-24 sm:h-36 relative z-30" />
        <div ref={tokensRef} className="homepage-body">
          <div className="text-5xl font-bold text-center text-fatcat-primary">
            ANGRYOMICS
          </div>

          <div className="w-full md:w-11/12 xl:w-4/5 text-center flex flex-wrap justify-center items-center gap-y-8 mx-auto mt-12">
            <div className="w-full md:w-1/3">
              <div
                className={`w-64 md:w-auto app-title text-3xl border-2 border-white rounded-2xl p-2 mx-auto`}
              >
                CONTRACT RENOUNCED
              </div>
            </div>
            <div className="w-full md:w-1/3">
              <div
                className={`w-48 app-title text-3xl border-2 border-white rounded-2xl p-2 mx-auto`}
              >
                NO TAXES
              </div>
            </div>
            <div className="w-full md:w-1/3">
              <div
                className={`w-64 md:w-auto app-title text-3xl border-2 border-white rounded-2xl p-2 mx-auto`}
              >
                LP TOKENS ARE BURNT
              </div>
            </div>
            <div className="w-full p-2 sm:p-0">
              <div
                className={`app-title text-4xl border-2 border-white rounded-2xl p-2 mb-2`}
              >
                Contract Address:{" "}
                <span
                  className="hover:text-angry-cat-secondary active:text-angry-cat-secondary cursor-pointer"
                  onClick={() => copyContent(contractAddress)}
                >
                  {contractAddress}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="h-24 sm:h-36 relative z-30" />
        {/* <div id="slider" className="relative z-30" />
        <div ref={sliderRef} className="w-full lg:w-[47.5%] m-auto text-center">
          <Image
            src={HeroApp}
            alt="fatcat-slider"
            // className={`w-1/2 h-auto m-auto rounded-xl ${
            //   isSliderVisible && "animate-slideInLeftBasic"
            // }`}
            className={`w-1/2 h-auto m-auto rounded-xl`}
          />
        </div> */}
      </div>
    </div>
  );
};

export default Home;
