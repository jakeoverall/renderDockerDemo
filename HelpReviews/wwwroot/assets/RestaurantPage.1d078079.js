import{_ as S,c as o,a,t as I,i as b,F as f,r as h,f as C,w as x,g as i,A as r,h as g,l,P as u,R as k,o as n,d as V,u as B,j as D,k as N,m as P,p as j,n as E,e as U,q as A}from"./index.858ce600.js";const p={setup(){const s=B(),c=D();async function _(){try{await g.getRestaurantById(s.params.restaurantId)}catch(t){l.error(t),u.error(t.message)}}async function e(){try{await N.getRestaurantReports(s.params.restaurantId)}catch(t){l.error(t),u.error(t.message)}}return C(()=>{_(),e()}),x(()=>{var t;(t=r.restaurant)!=null&&t.isShutdown&&(c.push({name:"Home"}),u.toast("That restaurant is closed, dummy","info"),r.restaurant=null)}),{restaurant:i(()=>r.restaurant),reports:i(()=>r.reports),imgUrl:i(()=>{var t;return`url(${(t=r.restaurant)==null?void 0:t.imgUrl})`}),canShutdown:i(()=>{let t=0;return r.reports.forEach(m=>{t+=m.rating}),r.restaurant.reportCount>=3&&t<r.restaurant.reportCount}),async shutItDown(){try{await g.shutItDown(s.params.restaurantId)}catch(t){l.error(t),u.error(t.message)}}}},components:{ReportCard:k}},v=()=>{P(s=>({af7fc3d0:s.imgUrl}))},y=p.setup;p.setup=y?(s,c)=>(v(),y(s,c)):v;const F=p,w=s=>(j("data-v-f59232a0"),s=s(),E(),s),q={key:0,class:"container-fluid"},H={class:"row bg-image align-items-center"},L={class:"col-12"},M={class:"ms-4"},T={class:"row mt-3"},z={class:"col-12 d-flex justify-content-between p-4"},G=w(()=>a("h2",null,"Reports:",-1)),J=w(()=>a("div",{class:"col-12 p-4"},[a("button",{class:"btn btn-success fs-5 px-4 py-2","data-bs-toggle":"modal","data-bs-target":"#report-modal"},"Submit report")],-1)),K={class:"row"},O={key:1,class:"container-fluid"},Q=A('<div class="row" data-v-f59232a0><div class="col-12 text-center" data-v-f59232a0><i class="mdi mdi-loading mdi-spin fs-1" data-v-f59232a0></i><i class="mdi mdi-loading mdi-spin mx-4 fs-1" data-v-f59232a0></i><i class="mdi mdi-loading mdi-spin fs-1" data-v-f59232a0></i></div></div>',1),W=[Q];function X(s,c,_,e,t,m){const R=U("ReportCard");return e.restaurant?(n(),o("div",q,[a("div",H,[a("div",L,[a("h1",M,I(e.restaurant.name),1),e.canShutdown?(n(),o("button",{key:0,onClick:c[0]||(c[0]=d=>e.shutItDown()),class:"btn ms-4 btn-danger text-light px-5 py-2 fs-5 mt-2"},"Shutdown")):b("",!0)])]),a("div",T,[a("div",z,[G,a("h2",null,[(n(!0),o(f,null,h(e.restaurant.reportCount,d=>(n(),o("i",{key:d,class:"mdi mdi-rodent mdi-spin"}))),128))])]),J]),a("div",K,[(n(!0),o(f,null,h(e.reports,d=>(n(),o("div",{class:"col-12 col-md-6 p-3",key:d.id},[V(R,{report:d},null,8,["report"])]))),128))])])):(n(),o("div",O,W))}const Z=S(F,[["render",X],["__scopeId","data-v-f59232a0"]]);export{Z as default};
