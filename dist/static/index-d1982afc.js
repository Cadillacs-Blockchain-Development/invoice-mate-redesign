import{u as f,r as l,aR as j,j as e,au as P,aS as h,aT as I,a0 as B,av as E,aU as H,as as k,aj as v,aV as C,o as R}from"./sanity-d7fa72ce.js";const S=f(R)`
  position: relative;
`;function T(s){const{children:o}=s,{collapsed:t}=I();return e.jsx(S,{hidden:t,height:"fill",overflow:"auto",children:o})}function U(s){const{actionHandlers:o,index:t,menuItems:n,menuItemGroups:r,title:i}=s,{features:a}=B();return!(n!=null&&n.length)&&!i?null:e.jsx(E,{actions:e.jsx(H,{menuItems:n,menuItemGroups:r,actionHandlers:o}),backButton:a.backButton&&t>0&&e.jsx(k,{as:v,"data-as":"a",icon:C,mode:"bleed",tooltipProps:{content:"Back"}}),title:i})}function V(s){const{index:o,pane:t,paneKey:n,...r}=s,{child:i,component:a,menuItems:c,menuItemGroups:d,type:b,...m}=t,[u,p]=l.useState(null),{title:x=""}=j(t);return e.jsxs(P,{id:n,minWidth:320,selected:r.isSelected,children:[e.jsx(U,{actionHandlers:u==null?void 0:u.actionHandlers,index:o,menuItems:c,menuItemGroups:d,title:x}),e.jsxs(T,{children:[h.isValidElementType(a)&&l.createElement(a,{...r,...m,ref:p,child:i,paneKey:n}),l.isValidElement(a)&&a]})]})}export{V as default};