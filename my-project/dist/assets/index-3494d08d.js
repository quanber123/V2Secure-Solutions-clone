import{r as i,j as n,N as t,_ as c,O as x}from"./index-cc2f4921.js";function h(){const[o,a]=i.useState("FAGONET-SIEM"),[m,s]=i.useState(!1),e=i.useCallback(l=>{a(l),s(!1)},[o]);return n.jsxs("section",{className:"Scale",children:[n.jsxs("nav",{className:`nav-solutions container xl:w-1/2 mx-auto my-8 lg:text-lg text-2xl font-bold justify-between items-center Right ${m?"show-nav-solutions":"hidden lg:flex"}`,children:[n.jsx("button",{className:"btn-close-nav font-extrabold lg:hidden text-xl",onClick:()=>s(!1),children:"X"}),n.jsx(t,{className:({isActive:l})=>l?"mx-5 my-4 lg:my-2 nav-link hight-light":"mx-5 my-4 lg:my-2 nav-link ",rel:"nofollow",to:"siem",onClick:()=>e("FAGONET-SIEM"),children:"FAGONET-SIEM"}),n.jsx(t,{className:({isActive:l})=>l?"mx-5 my-4 lg:my-2 nav-link hight-light":"mx-5 my-4 lg:my-2 nav-link ",rel:"nofollow",to:"waf",onClick:()=>e("FAGONET-WAF"),children:"FAGONET-WAF"}),n.jsx(t,{className:({isActive:l})=>l?"mx-5 my-4 lg:my-2 nav-link hight-light":"mx-5 my-4 lg:my-2 nav-link ",rel:"nofollow",to:"nips",onClick:()=>e("FAGONET-NIPS"),children:"FAGONET-NIPS"}),n.jsx(t,{className:({isActive:l})=>l?"mx-5 my-4 lg:my-2 nav-link hight-light":"mx-5 my-4 lg:my-2 nav-link ",rel:"nofollow",to:"edr",onClick:()=>e("FAGONET-EDR"),children:"FAGONET-EDR"}),n.jsx(t,{className:({isActive:l})=>l?"mx-5 my-4 lg:my-2 nav-link hight-light":"mx-5 my-4 lg:my-2 nav-link ",rel:"nofollow",to:"nac",onClick:()=>e("FAGONET-NAC"),children:"FAGONET-NAC"})]}),n.jsx("button",{className:"btn-nav-solutions mx-auto my-14 w-1/3 flex justify-center items-center text-xl lg:hidden",onClick:()=>s(l=>!l),children:o})]})}function N(){return n.jsxs("section",{children:[n.jsx(c,{offset:0,once:!0,children:n.jsx(h,{})}),n.jsx(x,{})]})}export{N as default};
