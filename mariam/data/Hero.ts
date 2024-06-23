import React from "react";
import { BsPersonCircle } from "react-icons/bs";

export const bannerData={
    imageBg:"/assets/images/bg/bg.png",
    subtitle:"👋 Hi There,",
    title:"We Are ",
    words:["Lunity","Webdevelopers","in de war"],
    desc:"<strong>Illuminating the Future of Web Development</strong> - At Lunity, we pride ourselves on delivering cutting-edge web solutions that transform your digital presence.",
    button:{
      text:'More About Me',
      href:'#about',
      icon:React.createElement(BsPersonCircle)
    }
}

export const InfoData=[
    {
      label:"Email:",
      value:"contact@mariam.com"
    },
    {
      label:"Phone:",
      value:"+113-804-9098"
    },
    {
      label:"Location:",
      value:"California ,USA"
    },
]

import { BsFacebook ,BsTwitterX,BsInstagram,BsDribbble,BsGithub} from "react-icons/bs";
export const SocialIcons=[
  {
    href:"#",
    icon:React.createElement(BsFacebook)
  },
  {
    href:"#",
    icon:React.createElement(BsTwitterX)
  },
  {
    href:"#",
    icon:React.createElement(BsInstagram)
  }
  ,
  {
    href:"#",
    icon:React.createElement(BsDribbble)
  }
  ,
  {
    href:"#",
    icon:React.createElement(BsGithub)
  }

]
 
 
