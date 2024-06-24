"use client";
import React from "react";
import Heading from "./elements/Heading";
import Service from "./elements/Service";
import { useSectionInView } from "./lib/hooks/UseSectionInView";
import { useTranslation } from "next-export-i18n";

const Services = () => {
  const { ref } = useSectionInView("Services");
  const { t } = useTranslation();

  const services = t('services.items');

  return (
    <section className="services section section--light" id="services" ref={ref} >
      <div className="container">
        <Heading title={t('services.title')} subtitle={t('services.subtitle')} />
        <div className="row">
          {typeof services === "object" && services?.map((service: any, index: number) => {
            return <Service {...service} key={index} index={index}/>;
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
