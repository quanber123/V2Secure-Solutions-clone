import{u as m,r,j as e,_ as l}from"./index-50a96ab9.js";import{l as b}from"./new-logo-73cdded9.js";function j(){const{t}=m(),[x,o]=r.useState(!1),[i,c]=r.useState([{email:""}]),[d,n]=r.useState(!1);function u(a){const{value:s}=a.target;c(f=>({...f,email:s,id:new Date().getTime()}))}const h=a=>{a.preventDefault(),n(!0),setTimeout(()=>{n(!1)},1500),o(s=>!s),setTimeout(()=>{o(s=>!s)},1e3),c(()=>({email:""}))};return e.jsx("section",{className:"w-full h-1/2 pt-32 md:pt-48 lg:pt-96",children:e.jsxs("div",{className:"contact-form-home absolute lg:top-1/3 left-1/2 container m-auto py-12 flex flex-col justify-center border-2 border-darkGreen rounded-xl",children:[e.jsx("h1",{className:"xl:w-1/3 h-full mx-auto pb-8 lg:mb-14 text-center text-lg md:text-2xl lg:text-5xl font-bold",children:t("contact.content")}),d&&e.jsxs("div",{className:`thanks-form bg-white w-3/5 mx-auto mb-8 text-black text-center font-bold flex flex-col justify-between ${x?"downAlter":"hideAlter"}`,children:[e.jsx("i",{className:"h-1/2 fa fa-check text-2xl mt-2"}),e.jsx("p",{className:"h-1/2 text-lg my-2",children:"Thank You! Form Submitted Successfully."})]}),e.jsxs("form",{className:"xl:w-1/3 m-auto relative",onSubmit:h,children:[e.jsx("input",{className:"w-full py-4 pl-4 pr-32 text-xl leading-3 rounded-2xl",type:"email",placeholder:"Email Address",value:i.email,onChange:u,checked:!0,required:!0}),e.jsx("button",{type:"submit",className:"absolute top-2 right-5 py-2 px-5 rounded-2xl bg-boldBlue hover:bg-blue text-base",children:"Submit"})]})]})})}const p="/assets/IMC-50dbc1b2.png";function g(){const{t}=m();return e.jsxs("section",{className:"w-full h-1/2 flex flex-col md:flex-row border-t border-t-boldBlue px-14 py-32 Scale",children:[e.jsxs("div",{className:"md:w-1/2",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx(l,{className:"h-1/2",offset:100,once:!0,children:e.jsx("img",{className:"h-16 Scale",src:b,alt:"logoV2"})}),e.jsx("h1",{className:"text-2xl md:text-4xl mx-4 text-blue",children:"FAGONET"})]}),e.jsxs("div",{className:"md:text-lg",children:[e.jsx("p",{className:"sm:w-1/2 xl:w-1/3 my-4 py-3 px-4 text-center text-base border border-boldBlue text-blue rounded-2xl",children:t("about.contact-more")}),e.jsx("p",{className:"my-2",children:"0982720920 - Mr. Dũng"}),e.jsx("a",{href:"https://imc.org.vn/",target:"_blank",className:"my-2 hover:text-boldBlue",children:"imc.org.vn"}),e.jsx("p",{className:"my-2",children:t("about.district")})]})]}),e.jsxs("div",{className:"w-1/2 m-auto lg:m-0 flex justify-center items-center",children:[e.jsx(l,{className:"w-1/2 md:w-1/4 m-auto",offset:100,once:!0,children:e.jsx("img",{className:"Scale",src:p,alt:"qr"})}),e.jsxs("div",{className:"w-1/2 md:text-lg lg:text-xl font-bold md:p-2 m-2",children:[e.jsx("h3",{className:"text-blue",children:t("about.qr")}),e.jsx("h3",{children:t("about.details")})]})]})]})}function v(){return e.jsxs("footer",{className:"relative flex flex-col",children:[e.jsx(l,{offset:0,once:!0,children:e.jsx(j,{})}),e.jsx(l,{offset:0,once:!0,children:e.jsx(g,{})})]})}export{v as default};
