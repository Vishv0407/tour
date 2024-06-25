"use client";

import React from "react";
import styles from "./NavBar.module.css";
import JSONSchemaIcon from "@/public/icons/json-schema-blue.png";
import JSONSchemaIconDark from "@/public/icons/json-schema-white.png";
import Image from "next/image";
import cx from "classnames";
import { outfitFont } from "@/app/styles/fonts";
import LeftArrow from "@/app/styles/icons/LeftArrow";
import FiChevronRight from "@/app/styles/icons/FiChevronRight";
import { Flex, useColorMode } from "@chakra-ui/react";
import GithubIcon from "@/app/styles/icons/GithubIcon";
import MoonIcon from "@/app/styles/icons/MoonIcon";
import SettingsIcon from "@/app/styles/icons/SettingsIcon";
import OutlineMenuIcon from "@/app/styles/icons/OutlineMenuIcon";
import SunIcon from "@/app/styles/icons/BiSun";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NavBar({
  chapterTitle,
  lessonTitle,
  backLink,
  chapterIndex,
  stepIndex,
}: {
  chapterTitle: string;
  lessonTitle: string;
  backLink?: string;
  chapterIndex: number;
  stepIndex: number;
}) {
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();
  return (
    <div className={styles.navBar}>
      <div className={styles.leftContentWrapper}>
        <div className={styles.logoTitle}>
          <Link href="/">
            <Image
              src={colorMode == "light" ? JSONSchemaIcon : JSONSchemaIconDark}
              alt="JSON Schema Logo"
              width={40}
              height={40}
            />
          </Link>
          <div className={cx(styles.title, outfitFont.className)}>
            A Tour of JSON Schema
          </div>
        </div>
        <div className={styles.contentNavigation}>
          <button
            className={styles.backBtn}
            onClick={() => {
              if (backLink) {
                router.push("/" + backLink);
              }
            }}
          >
            <LeftArrow />
          </button>
          <Flex dir="row" align="center" gap={"8px"}>
            <div className={styles.chapterTitle}>
              Chapter {chapterIndex + 1}: {chapterTitle}
            </div>
            <div className={styles.breadcrumbIcon}>
              <FiChevronRight />
            </div>
            <div className={styles.lessonTitle}>
              Lesson {stepIndex + 1}: {lessonTitle}
            </div>
          </Flex>
        </div>
      </div>
      <div className={styles.rightContentWrapper}>
        <Link href="https://github.com/json-schema-org/tour" target="_blank">
          <button className={styles.menuButton}>
            <GithubIcon />
          </button>
        </Link>
        <button className={styles.menuButton} onClick={toggleColorMode}>
          {colorMode === "light" ? <SunIcon /> : <MoonIcon />}
        </button>
        <button className={styles.menuButton}>
          <SettingsIcon />
        </button>
        <button className={styles.menuButton}>
          <OutlineMenuIcon />
        </button>
      </div>
    </div>
  );
}
