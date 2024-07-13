"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
// import { Divider } from "@chakra-ui/react";
import { CopyrightOutlined } from "@ant-design/icons";

import { useIsMounted } from "@/hooks/useIsMounted";

import { socialsLink } from "@/constants/links";
import { marlon } from "@/utils/font";

// import AppLogo from "@/assets/logo-app.png";
// import AppBannerNav from "@/assets/banner-nav.png";

// import AppLogoTransparent from "@/assets/logo-transparent.png";
// import TwitterLogo from "@/assets/logo-twitter.png";
// import TelegramLogo from "@/assets/logo-telegram.png";
// import MediumLogo from "@/assets/logo-medium.png";
// import WebLogo from "@/assets/logo-web.png";
// import GitbookLogo from "@/assets/logo-gitbook.png";
// import EmailLogo from "@/assets/logo-email.png";

import "./style.css";
import { TelegramIcon } from "@/utils/Icon/Socials/Telegram";
import { TwitterIcon } from "@/utils/Icon/Socials/Twitter";

interface Props {}

const AppFooter: React.FC<Props> = () => {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return null;
  }

  return (
    <footer className={clsx("app-footer", marlon.className)}>
      {/* <div id="socials" className="h-32 sm:h-40 relative z-30" /> */}
      <div id="socials" className="relative z-30" />
      <div className="app-footer-container">
        <div className="app-footer-wrapper z-30">
          {/* <div className="text-3xl text-center mb-6 z-50 relative">
          <Link
            href={socialsLink.email}
            className="w-auto text-white hover:!text-pelu-red mb-2"
          >
            team@pepelubu.meme
          </Link>
        </div> */}

          {/* <div className="w-full md:w-3/5 flex flex-wrap justify-center items-center text-white m-auto gap-4 z-50 relative">
            <Link
              href={socialsLink.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 hover:!text-primary"
            >
              <Image
                src={TelegramLogo}
                alt="telegram"
                className="w-full h-full cursor-pointer"
              />
            </Link>
            <Link
              href={socialsLink.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 hover:text-secondary"
            >
              <Image
                src={TwitterLogo}
                alt="twitter"
                className="w-full h-full cursor-pointer"
              />
            </Link>
          </div> */}
          <div className="homepage-body">
            {/* <div className="text-5xl font-bold text-center text-fatcat-primary">
              JOIN $FATCAT COMMUNITY
            </div> */}

            {/* <div className="w-4/5 m-auto text-3xl text-center font-bold my-3">
              Join the <span className="text-black">$FATCAT</span> journey and
              dive into an avant-garde digital playground on SOLANA. Be part of
              a community where the whimsical world of memes meets immersive
              innovation
            </div> */}

            {/* <div className="w-full lg:w-2/3 flex flex-wrap justify-center items-center text-white mx-auto mt-6 gap-4">
              <Link
                href={socialsLink.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 hover:!text-primary rounded-full p-3 bg-fatcat-primary"
              >
                <TelegramIcon className="w-full h-full fill-white hover:fill-fatcat-secondary" />
              </Link>
              <Link
                href={socialsLink.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 hover:!text-secondary rounded-full p-4 bg-fatcat-primary"
              >
                <TwitterIcon className="w-full h-full fill-white hover:fill-fatcat-secondary" />
              </Link>
            </div> */}
          </div>
          {/* <div className="h-6 sm:h-12" /> */}

          <div className="w-full flex flex-wrap justify-between items-center px-2 py-3 md:pt-10 md:pb-2 text-white z-30">
            {/* <div className="w-full text-base text-center z-50 relative">
              <Link
                href={socialsLink.email}
                className="w-auto text-white hover:!text-pelu-red mb-2"
              >
                dev@xiasithedog.fun
              </Link>
            </div> */}

            {/* <div className="w-full text-base text-center font-semibold"> */}
            <div className="w-full text-base font-semibold">
              <CopyrightOutlined className="mx-1" style={{ fontSize: "1em" }} />
              {/* Copyright 2024 | All Rights Reserved */}Copyright 2024 | All
              Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
