import React from "react"
import { BsPhoneFill,BsEnvelopeFill,BsGeoAltFill } from "react-icons/bs";
import { BsSendFill } from "react-icons/bs";

export const heading={
  title:"Contact Us",
  subtitle:"Feel Free To Contact Us Any Time"
}

export const contactInfo={
  title:"Let's talk about everything!",
  desc:"Have questions or ready to start your project? Get in touch with us today!",
  list:[
    {
      value:"+32 472 18 06 80",
      icon:React.createElement(BsPhoneFill)
    },
    {
      value:"info@lunity.be",
      icon:React.createElement(BsEnvelopeFill)
    },
    {
      value:"Emile Verhaerenstraat 42, 2890 Sint-Amands",
      icon:React.createElement(BsGeoAltFill)
    },
  ]
}
export const btnSubmitData={
    text: "Send Message",
    type:"submit",
    icon:React.createElement(BsSendFill)
  
}