import { useMemo, useRef } from "react";
import Link from "next/link";
// import Image from "next/image";
import { usePathname } from "next/navigation";
// import { ConnectWallet } from "@thirdweb-dev/react";
import {
  Button,
  // Button,
  // Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  // DrawerFooter,
  // DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  List,
  ListItem,
} from "@chakra-ui/react";
// import { DollarOutlined, LineChartOutlined } from "@ant-design/icons";
import clsx from "clsx";

import Anchor from "@/components/Anchor";

import { useIsMounted } from "@/hooks/useIsMounted";
import { getHash } from "@/utils/hash";
import useHash from "@/hooks/useHashname";

import { galaxy } from "@/utils/font";

// import AppTitle from "@/assets/title-app.png";
import { findUsLink, socialsLink } from "@/constants/links";

import "../style.css";
import "./style.css";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const NavbarDrawer: React.FC<Props> = ({ isOpen, onClose }) => {
  const btnRef = useRef() as any;

  const pathname = usePathname();
  const hashname = useHash();

  const isMounted = useIsMounted();

  const defaultHash = getHash();

  const tabsList = useMemo(() => {
    return [
      {
        href: "/",
        pathname: `/`,
        name: "HOME",
      },
      {
        href: "#buy",
        pathname: `#buy`,
        name: "HOW TO BUY",
      },
      {
        href: "#tokenomics",
        pathname: `#tokenomics`,
        name: "TOKENOMICS",
      },
      {
        href: findUsLink.dextools,
        pathname: findUsLink.dextools,
        name: "CHART",
      },
    ];
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Drawer
      // size={""}
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton
          className="mt-2 font-extrabold text-red-500"
          style={{ fontSize: 20 }}
        />
        <DrawerHeader className={`bg-ginnan-primary h-24 ${galaxy.className}`}>
          <Link href="/" className={`logo-container text-white h-full`}>
            <div className="font-extrabold text-3xl text-ginnan-secondary">
              $GINKUN
            </div>
          </Link>
        </DrawerHeader>

        <DrawerBody
          className={`bg-ginnan-primary text-2xl ${galaxy.className}`}
        >
          <List spacing={3}>
            {tabsList.map((item) => {
              const isActive = !!defaultHash
                ? hashname === item.pathname
                : !defaultHash && pathname === item.pathname;

              // if (item.pathname === "/whitepaper") {
              //   return (
              //     <ListItem key={item.name} onClick={onClose}>
              //       <Link
              //         key={item.name}
              //         href={item.href}
              //         target="_blank"
              //         rel="noopener noreferrer"
              //         className="nav-anchor"
              //       >
              //         {item.name}
              //       </Link>
              //     </ListItem>
              //   );
              // }

              return (
                <ListItem key={item.name} onClick={onClose}>
                  <Anchor
                    href={item.href}
                    className={clsx(
                      "font-bold",
                      // "text-white p-2 hover:text-secondary font-bold",
                      // "text-sm md:text-base text-black dark:text-white p-2 hover:bg-dark-hover font-bold",
                      // isActive ? "#bf00ff" : "text-white"
                      isActive ? "nav-anchor-active" : "nav-anchor"
                    )}
                    style={{ transition: "250" }}
                  >
                    {item.name}
                  </Anchor>
                </ListItem>
              );
            })}
          </List>
        </DrawerBody>

        <DrawerFooter
          className={`bg-ginnan-primary mb-4 flex flex-wrap justify-center text-2xl ${galaxy.className}`}
        >
          <Link
            href={findUsLink.uniswap}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full mr-2 md:mr-4"
          >
            <Button
              // className="w-full text-white bg-pelu-red hover:bg-pelu-green active:bg-pelu-green focus:bg-pelu-green lg:p-6"
              className="w-full text-xiasi-yellow hover:text-white hover:bg-xiasi-yellow hover:border-xiasi-yellow lg:p-6 rounded-3xl"
              colorScheme="black"
              variant="outline"
              // leftIcon={<DollarOutlined style={{ fontSize: "1.5em" }} />}
            >
              BUY $GINKUN
            </Button>
          </Link>

          {/* <Link
            href={socialsLink.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button
              className="w-full text-xiasi-yellow hover:text-xiasi rounded-3xl"
              colorScheme="gray"
              // leftIcon={<DollarOutlined style={{ fontSize: "1.5em" }} />}
            >
              Telegram
            </Button>
          </Link>

          <Link
            href={socialsLink.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full mt-4"
          >
            <Button
              className="w-full text-xiasi hover:text-xiasi-yellow rounded-3xl"
              colorScheme="gray"
              // leftIcon={<DollarOutlined style={{ fontSize: "1.5em" }} />}
            >
              Twitter
            </Button>
          </Link> */}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
