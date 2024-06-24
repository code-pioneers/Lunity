"use client";
import React from "react";
import Heading from "./elements/Heading";
import Form from "./elements/Form";
import { useSectionInView } from "./lib/hooks/UseSectionInView";
import SocialMedia from "./elements/SocialMedia";
import {motion} from 'framer-motion'
import {fadeInAnimationVariants } from './lib/utils'
import { useTranslation } from "next-export-i18n";
import { BsEnvelopeFill, BsGeoAltFill, BsPhoneFill } from "react-icons/bs";

const getIcon = (name: string) => {
  switch (name) {
    case 'phone':
      return React.createElement(BsPhoneFill);
    case 'envelope':
      return React.createElement(BsEnvelopeFill);
    case 'geo':
      return React.createElement(BsGeoAltFill);
    default:
      return null;
  }
}

const Contact = () => {
  const { ref } = useSectionInView("Contact");
  const { t } = useTranslation();

  const contactItems = t('contact.info.items');

  return (
    <section ref={ref} className="contact section section--white" id="contact">
      <div className="container">
        <Heading title={t('contact.title')} subtitle={t('contact.subtitle')} />
        <motion.div 
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{once:true}}
          custom={1}
          className="row">
          <div className="col-xl-7"> <Form /></div>
          <div className="col-xl-5">
            <div className="contact__info card card--light">
              <h4 className="contact__info-title">{t('contact.info.title')}</h4>
              <p className="contact__info-desc">{t('contact.info.description')}</p>
              <div className="contact__info-items">
                {typeof contactItems === "object" && contactItems?.map((item: any,index: number)=>{
                    return(
                      <div className="contact__info-item"  key={index}>
                          <span className='contact__info-item-icon'>{getIcon(item?.icon)}</span>
                          <span className="contact__info-item-value">{item?.value}</span>
                      </div>
                    )
                  })
                }
                <div className="contact__info-item ">
                {/* <span className='contact__info-item-icon'><BsShareFill /></span> */}
                  <div className="contact__info-item-social-media">
                    <SocialMedia/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
