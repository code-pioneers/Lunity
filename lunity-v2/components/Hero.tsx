"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import SocialMedia from "./elements/SocialMedia";
import Button from "./elements/Button";
import Typewriter from "typewriter-effect";
import { useTheme } from "next-themes";
import { useSectionInView } from "./lib/hooks/UseSectionInView";
import { motion } from "framer-motion";
import {fadeIn}from './lib/utils';

import {
  useTranslation, 
  LanguageSwitcher, 
  LinkWithLocale
} from "next-export-i18n";

const Hero = () => {
  const { theme, setTheme } = useTheme();
  const { ref } = useSectionInView("Home");
  const { t } = useTranslation();

  const infoData = t('hero.infoData');

  return (
    <section className="hero vh-100" ref={ref}>
      <Image
        src="/assets/images/bg/bg.png"
        alt=""
        fill
        priority
        className="hero__img"/>
        <motion.div 
        variants={fadeIn("up",0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:true}}
        className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="hero__content vh-100 ">
              <div className="hero__social-media">
                <SocialMedia />
                <LanguageSwitcher lang="nl">Nederlands</LanguageSwitcher>
                <LanguageSwitcher lang="en">English</LanguageSwitcher>
              </div>

              <div className="hero__banner">
                <div className="banner">
                  <h1 className="banner__title ">
                    {t('hero.title')}
                    <Typewriter
                      options={{
                        strings: t('hero.words'),
                        autoStart: true,
                        loop: true,
                        delay: 75,
                      }}
                    />
                  </h1>
                  <p className="banner__desc" dangerouslySetInnerHTML={{__html: t('hero.description')}}></p>
                  <Button text={t('hero.button.text')} href={t('hero.button.href')} />
                </div>
              </div>
              <div className="hero__info">
                <div className="info">
                  {typeof infoData === "object" && infoData?.map((info: any, index: number) => {
                    return (
                      <div className="info__item" key={index}>
                        <p className="info__label mb-0">{info?.label}</p>
                        <p className="info__value mb-0">{info?.value}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
