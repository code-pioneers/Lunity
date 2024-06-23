import React from "react";
import { BsDownload } from "react-icons/bs";

export const heading={
  title:"About Us",
  subtitle:"Main Information About Us And What We Love To Do."
}


export const profile = {
  image: "/assets/images/about/me.jpg",
  title: "Hello, I'm Mariam Wallas, Based in Canada",
  bio:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla pretium lacus, eu luctus neque ultricies a. Phasellus faucibus orci a purus mattis tincidunt ut non nulla. Donec ullamcorper sapien eget neque facilisis euismod.",
  list: [
    { label: "Phone :", value: "+ 113-804-9098" },
    { label: "Nationality :", value: "British" },
    { label: "skype :", value: "mariam.wallas" },
    { label: "Email :", value: "contact@mariam.com" },
    { label: "Address :", value: "1000 Proctor St USA" },
    { label: "Freelancer :", value: "Available" },
  ],
  button: {
    text: "Download My CV",
    href: "/assets/images/cv.pdf",
    icon:React.createElement(BsDownload)
  },
};

export const features= [
  { count: "+8", text: "Completed Projects" },
  { count: "+6", text: "Happy Customers" },
  { count: "+10", text: "Years of experience" },
  { count: "+4", text: "Certifications" },
];


export const timeline = [
  {
    heading: "My Experience",
    image: "/assets/images/about/exp.png",
    data: [
      {
        role: "Seinor UI/UX Desinger",
        place: "Spotify",
        year: "2019 - Present",
        desc: "Ludantium totam rem aperia meaque ipsa quae ab illo inven tore veritatis et quasi architecto beatae vitae.",
        
      },
      {
        role: "UI/UX Designer",
        place: "Spotify",
        year: "2017 - 2018",
        desc: "Ludantium totam rem aperia meaque ipsa quae ab illo inven tore veritatis et quasi architecto beatae vitae.",
      },
      {
        role: "Junior Visual Designer",
        place: "Spotify",
        year: "2015 - 2016",
        desc: "Ludantium totam rem aperia meaque ipsa quae ab illo inven tore veritatis et quasi architecto beatae vitae.",
      },
    ],
  },
  {
    heading: "My Education",
    image: "/assets/images/about/edu.png",
    data: [
      {
        role: "Engineering Degree",
        place: "Paris University ",
        year: "2015 - 2016",
        desc: "Ludantium totam rem aperia meaque ipsa quae ab illo inven tore veritatis et quasi architecto beatae vitae.",
      },
      {
        role: "Engineering Degree",
        place: "Paris University ",
        year: "2015 - 2016",
        desc: "Ludantium totam rem aperia meaque ipsa quae ab illo inven tore veritatis et quasi architecto beatae vitae.",
      },
      {
        role: "Engineering Degree",
        place: "Paris University ",
        year: "2015 - 2016",
        desc: "Ludantium totam rem aperia meaque ipsa quae ab illo inven tore veritatis et quasi architecto beatae vitae.",
      },
    ],
  },
];
