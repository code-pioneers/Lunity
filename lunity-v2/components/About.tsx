"use client";
import React from "react";
import Heading from "./elements/Heading";
import Timeline from "./elements/Timeline";
import Feature from "./elements/Feature";
import Profile from "./elements/Profile";
import { useSectionInView } from "./lib/hooks/UseSectionInView";
import { motion} from "framer-motion";
import {fadeInAnimationVariants} from './lib/utils'
import { useTranslation } from "next-export-i18n";

const About = () => {
  const { ref } = useSectionInView("About");
  const { t } = useTranslation();

  const features = t('about.features');
  
  return (
    <section className="about section section--white" id="about" ref={ref} >
      <div className="container">
        <Heading title={t('about.title')} subtitle={t('about.subtitle')} />
        {/* <Profile {...profile} /> */}
        <motion.div 
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{once:true}}
          custom={2}
          className="row">
            {typeof features === "object" && features?.map((feature: any, index: number) => {
              return <Feature {...feature} key={index} />;
            })}
        </motion.div>

        {/* <motion.div 
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{once:true}}
          custom={3}
          className="row">
          {timeline?.map((timelineSingle, index) => {
            return (
              <div className="col-lg-6" key={index}>
                <div className="timeline card card--light ">
                  <div className="timeline__single">
                    <h4 className="timeline__single__title">{timelineSingle?.heading}</h4>
                    {timelineSingle?.data?.map((item, i) => {
                      return (
                        <Timeline
                          image={timelineSingle?.image}
                          {...item}
                          key={i}/>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div> */}
      </div>
    </section>
  );
};

export default About;
