import{u as a,r as n,S as c,j as e,L as d}from"./index-cc2f4921.js";function m(){const{t:s}=a(),{dataServices:l}=n.useContext(c),r=()=>{window.scroll(0,0)};return e.jsxs("section",{className:"container m-auto py-8 Up",children:[e.jsx("h1",{className:"text-center text-2xl md:text-4xl text-blue font-bold",children:s("our-services")}),l.map((t,o)=>e.jsxs("article",{className:"prev-services my-8 py-8 border-b border-b-gray",children:[e.jsx("img",{className:"w-1/2 m-auto md:w-1/3 lg:w-1/4 Scale",src:t.imgUrl,alt:t.intro}),e.jsxs("div",{className:"w-full md:w-2/3 lg:w-3/4 my-4 md:my-0 text-center md:text-start",children:[e.jsx("h2",{className:"text-lg md:text-2xl text-blue font-bold",children:t.intro}),e.jsx("p",{className:"font-bold my-6",children:t.firstWord}),e.jsx(d,{className:"px-2 py-2 md:px-4 rounded-3xl text-lg font-bold border text-black border-blue bg-boldBlue hover:bg-blue ",to:`${t.link}`,onClick:r,children:s("view-more")})]})]},o))]})}export{m as default};
