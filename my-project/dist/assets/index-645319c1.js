import{u as m,j as e,_ as s}from"./index-50a96ab9.js";function f({filePath:c,fileName:l}){const{t:i}=m(),x=async()=>{try{const a=await fetch(c);if(a.ok){const g=await a.blob(),p=window.URL.createObjectURL(g),t=document.createElement("a");t.href=p,t.setAttribute("download",l),document.body.appendChild(t),t.click()}else throw new Error("Failed to fetch the PDF file.")}catch(a){console.log(a)}};return e.jsx("section",{className:"flex justify-center items-center my-16 Scale",children:e.jsx("button",{className:"px-2 py-2 md:px-4 rounded-3xl text-lg font-bold border-2 border-darkBlue bg-boldBlue hover:bg-darkGreen hover:text-blue",style:{backgroundImage:`url(
                'https://cyberciti.1onestrong.com/wp-content/uploads/2023/05/asset-06.png'
              )`},onClick:x,children:i("download")})})}const o="/assets/header-1.e29951c6bf7cdf15c303-8c5d3449.png",n="/assets/header-2.15fda7c06337e76eaeb0-e512eecf.png",r="/assets/header-6.987988888e628d2df2fd-92a03e8d.png",d="/assets/header-7.c4c8a78b8f66aa9524dd-46a78e6b.png";function h(){const{t:c}=m(),l={offset:100,once:!0};return e.jsxs("section",{className:"container m-auto rounded-2xl Up",children:[e.jsx("h1",{className:"text-2xl md:text-4xl xl:text-6xl text-center text-blue font-bold my-12",children:c("gallery")}),e.jsxs("div",{className:"flex-col lg:flex-row flex flex-wrap items-center p-8",children:[e.jsx(s,{className:"gallery w-4/5 m-auto lg:w-1/2 lg:m-0 px-4 py-8 lg:p-8",...l,children:e.jsx("img",{className:"Scale",src:o,alt:o})}),e.jsx(s,{className:"gallery  w-4/5 m-auto lg:w-1/2 lg:m-0 px-4 py-8 lg:p-8",...l,children:e.jsx("img",{className:"Scale",src:n,alt:n})}),e.jsx(s,{className:"gallery  w-4/5 m-auto lg:w-1/2 lg:m-0 px-4 py-8 lg:p-8",...l,children:e.jsx("img",{className:"Scale",src:r,alt:r})}),e.jsx(s,{className:"gallery  w-4/5 m-auto lg:w-1/2 lg:m-0 px-4 py-8 lg:p-8",...l,children:e.jsx("img",{className:"Scale",src:d,alt:d})})]})]})}export{f as D,h as G};
