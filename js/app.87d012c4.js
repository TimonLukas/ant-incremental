(function(){"use strict";var e={76:function(e,t,r){var n={};r.r(n),r.d(n,{Anthill:function(){return ae},CurrencyOverlay:function(){return ge},Prestige:function(){return Te},Upgrades:function(){return Ee}});var a=r(963),o=r(252),s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKcAAACxBAMAAABTt7BZAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAB5QTFRFAAAA/38n//IA//MA//EA+e0S/fAG/O8M/PAJ////oSYLCAAAAAp0Uk5TAP///////////36JFFYAAATzSURBVHic7ZtZcptAEIaFTxDlBgJSqbxSPkH7JjlKTh6LgaF7eh/Qm7rKliXbH38vM8zG7fY2z4Z7sR+XEy/k3rldq/IatSLynNhD5s+x2OO02KEhUm4fdZCQCNtDHRTkgc1TLWYvtTAV5NN6qB5zo17MzFOHALNQ4wGIMZNUK+/YHokADEFmocakRp1PBSDBLNRLnU8EICU0KHXIMVeqKzXl/B6Aq4VGpKaFBqR2CPWldgh1pSpCl1NShx6hnlQ9opMnNS70C0bf+SJV9V8QCqvGZXHIulSWpqfOFQqeVD1VcpoWL6BP0/0X0+QDd6k5oRHTpD7UIp19vRpUTFPYZP87W5MtVfd+MzsEMjTmvZ43yf8PLjRYTYfUQEgZ064uyf9HW/lAGWtZzRaVQz9YcwJRqBESHlQhpBTPrsGMB1UoKObrNJtx5UFlIW3hZjiLMSgLaQDCodR/KaRQXojDZlW1QZUa/tK8utYGVQjpVjwTjoN7p/Kgq+3EJdRkKZSXflG5FHVz1z1FyBPsGsFtn9Vopka/g46ki0LlDvopbx1KIO9tNgmqnqcDEomrCSUhXMVuHzlkDGXJXwnr0KTx3IksDqrR78GOC5kLXRD1MigWG5WKoVJFSSnx2ShTRg/dXifepbRQOKQl+2pb6VS/8Y9D0A/N/eJrRuzRT2nJL/1zbfmB4kfpb6B7PzKOv0bkcKhPVaEiZY7VqgldXZ3JW/zar7QYtJpPQoH9kIDSm0mcIFktVF6muHq+6qepvp9A9+xMW08NuYZqKO03G1q8z80lXGi9TzWX6YZOm8TPtFBb6WK8S0MX9NIDlqC4fvK+a0oPQ5OzBN5pUc3b8BA1VPyQioMArSHlWfn8PKO0WTLqvUdTKHyDIEeyoWAMd2KRrdDB6aW6EnVM9xb0vbVkiyL3qKWvJW2m3PiasT1cAj1nErRjku9DV4t3nhb0hqDfU1FikLsEgpImpSY/gr8r0FMmDM/NxVf8K1U0guJ2GgmifmkFWv+vLa/cbR/XFP1PiHCwxaeRxZJD/qNQyQIMoBegH6oXkKCW1cCA8UcEKhQqX+NamveCkeUOr+9P30xo37/aXypman4KlamXfjp/BP0Pm2VJa/EYCYP1Sw0pg9KgTrKgufwuCPUzRbiKNUudgzTrOawM0mZves6halB/H1ebZidPdKXbTD/pZ8MhtbZhV9tGU2DoFLYk1AWfRqJRUHydHweVJKpW0b7wrTKFbR5jDXHnJpYknaDC+O9Y8TE3T4StM7n88VzN2+2WoYL/gF/skZa4cyjtHZUuAKkzulVpj48HVQKADhV3Yw//xf90b/vivikL6jYAnKe61muBlc3o6n9dMkQBcIfDyl48kapkxOr0Xeg2TJsbgak2quS/FZjaNNVSVdTqpIBQ+RAObBXmbe+oB1F6D8yYR2ZE/+dnAJwYWCdm1IMDXly9A0PO8EcTakDFVE0nz0u1UmFE0xVr/GweQhOk+huc7nG5NqpTVayaf7CPH296es/WUlNCtQIAPaSBE4hUat3cMO7NoWOd8qnOzhrFUkM7fpUZOSrLpS761Dp6VHhIHGuNCmUBMI4MPBJnml9xTvo1J7oTZ88zJ9rvAWqWGT7Pn3tKYPCoHczXPCPxmqc5XvPcifaEzJ/7GeZrnuW5veSpIyL2OqYs9ixSwF6BXG24nPi2t6XsP4qHEp4JTbE1AAAAAElFTkSuQmCC",i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACsBAMAAAAOI7plAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABtQTFRFAAAAAAAAw8PDxMTEwsLCycnJf39/x8fHxcXFVoWgEQAAAAl0Uk5TAP//////////NwKb1AAABC9JREFUeJztm0ly2zAQRa0bWL6BQITJWkeAb6IFD5Aj5OSxOGHo3wOGSsVV6kViQ8bz/2iABIn229srXrHGdY+xtC3eO2mXK4keJMB1IRleMzEC3B6xpYfnsmgnQlyCbONRXESO47UQ1w4fHM+5WyVR49USLypvJxrno4VXRTTxdqJVoIFnJl6k+ZKHzbSdtxGHGT5MaxJrBG5EXaCdt5oWJVYZtpiuM7xLFExXC9Qk1o7gTuSB9QLdanqkQFFik0BBYptAYS5CgffzHzbY5dIokJV4oQK9Lm+XiIDNApm04JT8MAGhRODYHDAtkmN1GAGwRyD0TIHhK8mTnmIO2JHjZ1DPyHEgLV6QOHIIgWfk2Lt5WfImfkhLz3AIv3gHMWgSCyB0HJ685ZHQJvqbjig8Q+Darez4jGUBnxAg7ccA5+WMB+sZDWE4evnEbKKv+GUlEEyaKMPTVkLMZiKehRGYzJY5B0bTWVbgELq0z1Q0AokpEC9kMPKlwPTTdBDxukNZFoA3GRgwsOQlHydA7spAHSvAdyEnvx1aYcRxPogS0MGrjREoXa1DDfDK54QJEXj7p8BQNmzrzwbEOZnO5Rb27zXgmRUmyVAoBSYfGoAkWoEefunEtRyBUpLLO7sIPLJSdY8XHEvALcFh/V/0nAqUgHQPc7bwAiXgT+QWEPNPDGM4gbaZMawDAwfF+s5LLJ7X7E7wFPmg7RKwKRhg8IrAWmB7fFcgXCW2Mf2ulv9/YMh/yMe2GS03HUjj0+08uICNQHAxgVcYKzB2PmfgjC6BBqAnnUMfMArEu2EdiK7YzUDmFnDcNh51QO6e4kcDiULfBfQU2K8QdtanjQUYWoBgIuadQ/JbBB674bwznePFgREqbolz3p+duHLunHV9jx1vTckG5w5mQA7UtrDB/Uq+uzsOyD/4gHvm+dZhOidpBVAOE1C+CeSv0Ba0jHIgyYrPNplThgwsUH0APzA+38TagMIgZoYDD0zfBAnAQFq4pPCvWeSdlrcB2TRPlM8OYQTWbW/UnFS/I+ZmYfKKkwLDatXjhyl5JVvWiiEkYEh/8G48DshfmfJZiY6VfbvhtXOETfpDQPnuHg7iPX4RDMA3GWgcuiPKs4DM81MOmi2ywOKEhp3a3hmOFiAweva1ftGJT+cJjeWQqybQSWHX6kMHhYxE03jCk8fOo0xwfDv69LZDInO+zB7RB4NAeEjPFRFoeWHP6IdXEQyvc2hMi1QsMrpWpKHcRqkyaqi3UYqMRlcEja9ZwnNReMDTS8mAxJl/wtPrvpBp/hnUUpkG8sIDTeV9tLqPBRpLGkk9IzeGN2tFIyFigWbe+BrO4VWm4+tgx1fqasSNV1fmvXYRq51ry8avHPLaxjuJhe9bMy+paf8oxFXmI8blykUbb/zfBWDk4D+G6MVtMZb2ileQ+AvS847a7TssOQAAAABJRU5ErkJggg==";const u=(0,o.Wm)("div",{class:"background"},[(0,o.Wm)("div",{class:"dirt"}),(0,o.Wm)("div",{class:"grass"}),(0,o.Wm)("div",{class:"sky"},[(0,o.Wm)("div",{class:"celestial-bodies"},[(0,o.Wm)("img",{class:"sun",src:s}),(0,o.Wm)("img",{class:"moon",src:i})])])],-1);function l(e,t,r,n,a,s){const i=(0,o.up)("currency-overlay"),l=(0,o.up)("anthill"),c=(0,o.up)("upgrades"),d=(0,o.up)("prestige");return(0,o.wg)(),(0,o.j4)(o.HY,null,[(0,o.Wm)(i),(0,o.Wm)("div",{class:"world",style:[e.worldTransform,e.dayNightCycle.cssVars]},[(0,o.Wm)(l,{onBuy:e.buyGenerator,onNavigate:t[1]||(t[1]=t=>e.ui.view=t),onAnthillWidth:t[2]||(t[2]=t=>e.anthillWidth=t)},null,8,["onBuy"]),(0,o.Wm)(c,{onBuy:e.buyUpgrade,onNavigate:t[3]||(t[3]=t=>e.ui.view=t),class:{active:"upgrades"===e.ui.view},scale:e.upgradesScale},null,8,["onBuy","class","scale"]),(0,o.Wm)(d,{onNavigate:t[4]||(t[4]=t=>e.ui.view=t)}),u],4)],64)}var c=r(262);const d=1e4,m="ANT-INCREMENTAL-SAVE",p="anthill-game",g=6e5,f=[["#75e1ff","#75e1ff","#a8edff"],["#66dbff","#66dbff","#8fe7ff"],["#4b74e5","#9e90ba","#b0bddd"],["#7f1395","#d41e49","#cf683a"],["#86009e","#c10137","#b41215"],["#211170","#2d1e69","#412c76"],["#15204a","#221a54","#221a54"],["#221a61","#342557","#23294e"],["#1d237f","#ae2f55","#ac6064"],["#212de3","#d54385","#d18ca8"],["#46b9ff","#46b9ff","#aed4e9"],["#66dbff","#66dbff","#a8edff"]],A={class:"view-anthill"},b={class:"generators"};function h(e,t,r,n,a,s){const i=(0,o.up)("generator"),u=(0,o.up)("anthill",!0),l=(0,o.up)("ants"),c=(0,o.up)("buy-multiplier-selector");return(0,o.wg)(),(0,o.j4)("div",A,[(0,o.Wm)("div",b,[((0,o.wg)(!0),(0,o.j4)(o.HY,null,(0,o.Ko)(e.generators,((t,r)=>((0,o.wg)(),(0,o.j4)(i,{name:t.name,amount:e.state.generators[r],bonus:e.bonuses.generators[r].value,cost:e.multiplierPrices.generators[r].amount.value,"generator-name":r,multiplier:e.state.selectedBuyMultipliers.anthill,onBuy:t=>e.$emit("buy",r)},null,8,["name","amount","bonus","cost","generator-name","multiplier","onBuy"])))),256))]),(0,o.Wm)(u,{ref:"anthill",onLoad:e.emitAnthillWidth},null,8,["onLoad"]),(0,o.Wm)(l,{"ants-per-second":e.antsPerSecond},null,8,["ants-per-second"]),(0,o.Wm)("button",{class:"navigate upgrades",onClick:t[1]||(t[1]=t=>e.$emit("navigate","upgrades"))},"Go to upgrades"),(0,o.Wm)("button",{class:"navigate prestige",onClick:t[2]||(t[2]=t=>e.$emit("navigate","prestige"))},"Go to prestige"),(0,o.Wm)(c,{modelValue:e.state.selectedBuyMultipliers.anthill,"onUpdate:modelValue":t[3]||(t[3]=t=>e.state.selectedBuyMultipliers.anthill=t)},null,8,["modelValue"])])}var v=r(577);const y={class:"buy-multiplier-selector"};function w(e,t,r,n,a,s){return(0,o.wg)(),(0,o.j4)("div",y,[((0,o.wg)(!0),(0,o.j4)(o.HY,null,(0,o.Ko)(e.options,((t,r)=>((0,o.wg)(),(0,o.j4)("button",{onClick:r=>e.selectedMultiplier=t,class:{active:e.selectedMultiplier===t}},(0,v.zw)(r),11,["onClick"])))),256))])}var R=r(348),S=(0,o.aZ)({props:{modelValue:{type:Number,required:!0}},setup(e,{emit:t}){const r=(0,R.NC)(e,"modelValue",t);return{selectedMultiplier:r,options:{"1x":1,"10x":10,"25x":25,"50x":50,"100x":100,Max:1/0}}}});S.render=w;var B=S,M=r.p+"img/anthill.edd79647.png";const U={class:"anthill"};function C(e,t){return(0,o.wg)(),(0,o.j4)("div",U,[(0,o.Wm)("img",{src:M,onLoad:t[1]||(t[1]=t=>e.$emit("load"))},null,32)])}const E={};E.render=C;var P=E;function W(e,t,r,n,a,s){return(0,o.wg)(),(0,o.j4)("canvas",{class:"ants",ref:"canvas",width:e.canvasSize.width,height:e.canvasSize.height},null,8,["width","height"])}var D=r(555);const{PI:k,sin:T}=Math,O=50,F=4,G=2,I="black",q=3,j=8,z=(e,t=0)=>t+(Math.random()*e-t);var H=(0,o.aZ)({props:{antsPerSecond:{type:Number,required:!0}},setup(e){const t=(0,c.iH)(),r=(0,c.qj)({width:0,height:0});function n(){r.width=t.value?.clientWidth??0,r.height=t.value?.clientHeight??0}return(0,R.OR)("resize",(0,D.DI)(n,50)),(0,o.bv)(n),(0,o.bv)((()=>{const n=t.value?.getContext("2d"),a=[];if(!n)return;const s=(0,c.iH)(!0);let i=0,u=Date.now();function l(){if(!n)return;const t=Date.now(),o=t-u;u=t,n.clearRect(0,0,r.width,r.height),Date.now()-i>1/e.antsPerSecond*1e3&&(i=t,a.push({lane:"top",progress:0,lastX:0,lastY:0}));for(let e=0;e<a.length;e++){const s=a[e];if(s.progress+=O*o/1e3,s.progress>r.width+F){if("top"!==s.lane){a.splice(e,1);continue}a[e]={lane:"bottom",progress:-50,lastX:0,lastY:0,crumb:{width:Math.round(z(j,q)),height:Math.round(z(j,q)),color:`rgb(${Math.floor(z(255))},${Math.floor(z(255))},${Math.floor(z(255))})`}}}const i=s.progress+t/1e3,u=r.width,l=.4*r.width,c=2.7*r.width,d=5*(T(i*k/u)+T(i*k/l)+T(i*k/c));if(n.fillStyle=I,"top"===s.lane){const e=r.width-s.progress,t=20+d;n.save(),n.translate(e,t),n.rotate(Math.atan2(t-s.lastY,e-s.lastX)),n.fillRect(0,0,F,G),n.restore(),s.lastX=e,s.lastY=t}else{const e=s.progress,t=r.height-40+d;n.save(),n.translate(s.progress,r.height-40+d),n.rotate(Math.atan2(t-s.lastY,e-s.lastX)),n.fillRect(0,0,F,G),n.fillStyle=s.crumb.color,n.fillRect(F/2-s.crumb.width/2,0,s.crumb.width,-s.crumb.height),n.restore(),s.lastX=e,s.lastY=t}}s.value&&requestAnimationFrame(l)}l(),(0,o.Ah)((()=>{s.value=!1}))})),{canvas:t,canvasSize:r}}});H.render=W;var Q=H;const V={class:"generator"},N={class:"name"},K={class:"amount"},Y={class:"multiplier"};function x(e,t,r,n,a,s){return(0,o.wg)(),(0,o.j4)("div",V,[(0,o.Wm)("img",{class:"icon",src:`generators/${e.generatorName}.png`},null,8,["src"]),(0,o.Wm)("div",N,(0,v.zw)(e.name),1),(0,o.Wm)("div",K,(0,v.zw)(e.format(e.amount.bought))+" [+ "+(0,v.zw)(e.format(e.amount.generated))+"]",1),(0,o.Wm)("div",Y,"x"+(0,v.zw)(e.format(e.bonus)),1),(0,o.Wm)("button",{class:["buy",e.buttonState],onClick:t[1]||(t[1]=t=>e.$emit("buy"))},"Cost: "+(0,v.zw)(e.format(e.cost))+" (+ "+(0,v.zw)(e.multiplierPrices.generators[e.generatorName].buyAmount.value-e.amount.bought)+")",3)])}const X=()=>(0,o.f3)(p),J=new Intl.NumberFormat("en-US",{maximumFractionDigits:0}),Z=e=>{const t=(0,c.SU)(e);return t<1e5?J.format(t):t.toExponential(2).replace("+","")};var L;(function(e){e[e["CRUMBS"]=0]="CRUMBS"})(L||(L={}));var $=(0,o.aZ)({props:{name:{type:String,required:!0},amount:{type:Object,required:!0},bonus:{type:Number,required:!0},cost:{type:Number,required:!0},generatorName:{type:String,required:!0},multiplier:{type:Number,required:!0}},emits:["buy"],setup(e){const{state:t,multiplierPrices:r}=X(),n=(0,o.Fl)((()=>t.currencies[L.CRUMBS]>=e.cost?"available":"unavailable"));return{format:Z,buttonState:n,multiplierPrices:r}}});$.render=x;var _=$;const ee=1.5,te={worker:{name:"Worker Ant",baseCost:{currency:L.CRUMBS,amount:10},costCoefficient:ee,production:{type:"currencies",target:L.CRUMBS,baseAmount:1,increase:1}},breeder:{name:"Breeder Ant",baseCost:{currency:L.CRUMBS,amount:100},costCoefficient:ee,production:{type:"generators",target:"worker",baseAmount:.1,increase:.1}},mother:{name:"Mother Ant",baseCost:{currency:L.CRUMBS,amount:1600},costCoefficient:ee,production:{type:"generators",target:"breeder",baseAmount:.1,increase:.1}},queen:{name:"Queen Ant",baseCost:{currency:L.CRUMBS,amount:7e4},costCoefficient:ee,production:{type:"generators",target:"mother",baseAmount:.1,increase:.1}},demiGod:{name:"Demi-god Ant",baseCost:{currency:L.CRUMBS,amount:2e6},costCoefficient:ee,production:{type:"generators",target:"queen",baseAmount:.1,increase:.1}}},re=Object.keys(te);var ne=(0,o.aZ)({components:{Anthill:P,BuyMultiplierSelector:B,Generator:_,Ants:Q},emits:["buy","navigate","anthill-width"],setup(e,{emit:t}){const{state:r,multiplierPrices:n,bonuses:a,totalProductions:s}=X(),i=(0,c.iH)(),u=(0,o.Fl)((()=>Math.log((0,c.SU)(s.currencies[L.CRUMBS])+1)/Math.log(1e5)));function l(){t("anthill-width",i.value?.$el.clientWidth||1)}return(0,R.OR)("resize",l),{state:r,multiplierPrices:n,bonuses:a,generators:te,totalProductions:s,Currency:L,antsPerSecond:u,anthill:i,emitAnthillWidth:l}}});ne.render=h;var ae=ne;const oe={class:"overlay-currencies"};function se(e,t,r,n,a,s){const i=(0,o.up)("currency");return(0,o.wg)(),(0,o.j4)("div",oe,[(0,o.Wm)(i,{name:"Crumbs",amount:e.state.currencies[e.GameCurrency.CRUMBS],"per-second":e.totalProductions.currencies[e.GameCurrency.CRUMBS].value},null,8,["amount","per-second"])])}const ie={class:"currency"},ue={class:"name"},le={class:"amount"};function ce(e,t,r,n,a,s){return(0,o.wg)(),(0,o.j4)("div",ie,[(0,o.Wm)("div",ue,(0,v.zw)(e.name)+":",1),(0,o.Wm)("div",le,(0,v.zw)(e.format(e.amount))+" ("+(0,v.zw)(e.format(e.perSecond))+"/s)",1)])}var de=(0,o.aZ)({props:{name:{type:String,required:!0},amount:{type:Number,required:!0},perSecond:{type:Number,required:!0}},setup:()=>({format:Z})});de.render=ce;var me=de,pe=(0,o.aZ)({components:{Currency:me},setup(){const{state:e,totalProductions:t}=X();return{GameCurrency:L,state:e,totalProductions:t}}});pe.render=se;var ge=pe;const fe=(0,o.Wm)("h2",null,"Upgrades",-1),Ae={class:"upgrades"};function be(e,t,r,n,a,s){const i=(0,o.up)("upgrade");return(0,o.wg)(),(0,o.j4)("div",{class:"view-upgrades",style:{"--scale":e.scale}},[fe,(0,o.Wm)("div",Ae,[((0,o.wg)(!0),(0,o.j4)(o.HY,null,(0,o.Ko)(e.upgrades,((t,r)=>((0,o.wg)(),(0,o.j4)(i,{name:t.name,description:t.description,cost:t.baseCost.amount,id:r,onBuy:t=>e.$emit("buy",r)},null,8,["name","description","cost","id","onBuy"])))),256))]),(0,o.Wm)("button",{class:"navigate anthill",onClick:t[1]||(t[1]=t=>e.$emit("navigate","anthill"))},"Return to Anthill")],4)}const he={class:"upgrade"},ve={class:"name"},ye={class:"description"};function we(e,t,r,n,a,s){return(0,o.wg)(),(0,o.j4)("div",he,[(0,o.Wm)("div",ve,(0,v.zw)(e.name),1),(0,o.Wm)("div",ye,(0,v.zw)(e.description),1),(0,o.Wm)("button",{class:["buy",e.buttonState],onClick:t[1]||(t[1]=t=>e.$emit("buy")),disabled:"unavailable"===e.buttonState},"Cost: "+(0,v.zw)(e.format(e.cost)),11,["disabled"])])}var Re;(function(e){e[e["TIER1UPGRADE1"]=0]="TIER1UPGRADE1",e[e["TIER1UPGRADE2"]=1]="TIER1UPGRADE2",e[e["TIER1UPGRADE3"]=2]="TIER1UPGRADE3",e[e["TIER1UPGRADE4"]=3]="TIER1UPGRADE4",e[e["TIER1UPGRADE5"]=4]="TIER1UPGRADE5"})(Re||(Re={}));const Se={[Re.TIER1UPGRADE1]:{id:Re.TIER1UPGRADE1,name:"1st Upgrade",description:"Worker Ant production is increased based on Breeder Ants purchased",target:"worker",scaleBuyable:"breeder",coefficient:1.05,baseCost:{currency:L.CRUMBS,amount:1e3}},[Re.TIER1UPGRADE2]:{id:Re.TIER1UPGRADE2,name:"2nd Upgrade",description:"Breeder Ant production is increased based on Mother Ants purchased",target:"breeder",scaleBuyable:"mother",coefficient:1.05,baseCost:{currency:L.CRUMBS,amount:13e3}},[Re.TIER1UPGRADE3]:{id:Re.TIER1UPGRADE3,name:"3rd Upgrade",description:"Mother Ant production is increased based on Queen Ants purchased",target:"mother",scaleBuyable:"queen",coefficient:1.05,baseCost:{currency:L.CRUMBS,amount:1e6}},[Re.TIER1UPGRADE4]:{id:Re.TIER1UPGRADE4,name:"4th Upgrade",description:"Queen Ant production is increased based on Demi-god Ants purchased",target:"queen",scaleBuyable:"demiGod",coefficient:1.05,baseCost:{currency:L.CRUMBS,amount:1e8}},[Re.TIER1UPGRADE5]:{id:Re.TIER1UPGRADE5,name:"5th Upgrade",description:"Demi-god Ant production is multipliers based on Worker Ants purchased",target:"demiGod",scaleBuyable:"worker",coefficient:1.05,baseCost:{currency:L.CRUMBS,amount:1e15}}},Be=Object.values(Se).reduce(((e,t)=>(t.target in e||(e[t.target]=[]),e[t.target].push(t),e)),{});var Me=(0,o.aZ)({props:{name:{type:String,required:!0},description:{type:String,required:!0},cost:{type:Number,required:!0},id:{type:String,required:!0}},emits:["buy"],setup(e){const{state:t}=X(),r=(0,o.Fl)((()=>{const r=Se[e.id];return t.upgrades[e.id]?"bought":t.currencies[r.baseCost.currency]>=r.baseCost.amount?"available":"unavailable"}));return{format:Z,state:t,buttonState:r}}});Me.render=we;var Ue=Me,Ce=(0,o.aZ)({props:{scale:{type:Number,default:1}},components:{Upgrade:Ue},setup:()=>({upgrades:Se})});Ce.render=be;var Ee=Ce;const Pe={class:"view-prestige"},We=(0,o.Wm)("h3",null,"work in progress",-1);function De(e,t){return(0,o.wg)(),(0,o.j4)("div",Pe,[We,(0,o.Wm)("button",{class:"navigate anthill",onClick:t[1]||(t[1]=t=>e.$emit("navigate","anthill"))},"Return to Anthill")])}const ke={};ke.render=De;var Te=ke;const Oe=3,Fe=()=>({currencies:{[L.CRUMBS]:10},generators:Object.fromEntries(re.map((e=>[e,{bought:0,generated:0}]))),upgrades:Object.fromEntries(Array.from({length:Object.keys(Se).length},((e,t)=>[t,!1]))),selectedBuyMultipliers:{anthill:1}}),Ge=e=>{const t={state:e,version:Oe};window.localStorage.setItem(m,JSON.stringify(t))},Ie=()=>{const e=window.localStorage.getItem(m);if(null===e)return null;const t=JSON.parse(e);return"undefined"===typeof t.version||t.version<Oe?null:(null===t.state.selectedBuyMultipliers.anthill&&(t.state.selectedBuyMultipliers.anthill=1/0),t.state)},qe=()=>{const e=Ie();return null===e?Fe():e},je=e=>({generators:Object.fromEntries(re.map((t=>[t,{currency:te[t].baseCost.currency,amount:(0,o.Fl)((()=>(0,c.SU)(te[t].baseCost.amount)*Math.pow(te[t].costCoefficient,e.generators[t].bought)))}])))}),ze=e=>({generators:Object.fromEntries(re.map((t=>{const r=te[t],{costCoefficient:n}=r,a=n-1,s=(0,o.Fl)((()=>Number.isFinite(e.selectedBuyMultipliers.anthill)?e.generators[t].bought+e.selectedBuyMultipliers.anthill:Math.max(Math.floor(Math.log(e.currencies[r.baseCost.currency]*a/(0,c.SU)(r.baseCost.amount)+n**e.generators[t].bought)/Math.log(n)),e.generators[t].bought+1)));return[t,{currency:r.baseCost.currency,amount:(0,o.Fl)((()=>(0,c.SU)(r.baseCost.amount)*(n**(0,c.SU)(s)-n**e.generators[t].bought)/a)),buyAmount:s}]})))}),He=e=>{const t=Object.fromEntries(re.map((t=>[t,(0,o.Fl)((()=>(Be[t]??[]).reduce(((t,r)=>t*(e.upgrades[r.id]?r.coefficient*e.generators[r.scaleBuyable].bought:1)),1)))])));return{generators:Object.fromEntries(re.map((r=>[r,(0,o.Fl)((()=>Math.max(2*Math.floor(e.generators[r].bought/10)*t[r].value,1)))])))}},Qe=(e,t)=>{const r={generators:Object.fromEntries(re.map((r=>[r,(0,o.Fl)((()=>{const n=te[r],a=e.generators[r],o=a.generated+a.bought;return n.production.baseAmount*o*t.generators[r].value}))])))},n={currencies:{[L.CRUMBS]:(0,o.Fl)((()=>r.generators.worker.value))},generators:{worker:(0,o.Fl)((()=>r.generators.breeder.value)),breeder:(0,o.Fl)((()=>r.generators.mother.value)),mother:(0,o.Fl)((()=>r.generators.queen.value)),queen:(0,o.Fl)((()=>r.generators.demiGod.value)),demiGod:0}};return{productions:r,totalProductions:n}},Ve=e=>{const t=je(e),r=ze(e),n=He(e),{productions:a,totalProductions:o}=Qe(e,n);return{prices:t,multiplierPrices:r,bonuses:n,productions:a,totalProductions:o}},Ne=()=>{const e=(0,c.qj)(qe()),{prices:t,multiplierPrices:r,bonuses:n,productions:a,totalProductions:o}=Ve(e);setInterval((()=>{Ge(e)}),d);let s=Date.now();const i=()=>{const t=(Date.now()-s)/1e3;s=Date.now(),e.currencies[L.CRUMBS]+=(0,c.SU)(o.currencies[L.CRUMBS])*t;for(const r of re)e.generators[r].generated+=(0,c.SU)(o.generators[r])*t;requestAnimationFrame(i)};return i(),{state:e,prices:t,multiplierPrices:r,bonuses:n,productions:a,totalProductions:o}};var Ke=r(644),Ye=r.n(Ke);const xe="--day-night-cycle",Xe=Ye()(f.map((e=>e[0]))),Je=Ye()(f.map((e=>e[1]))),Ze=Ye()(f.map((e=>e[2]))),Le=()=>{const{timestamp:e}=(0,R.Z9)({interval:1e3}),t=Date.now(),r=(0,o.Fl)((()=>(e.value-t)/g)),n=(0,o.Fl)((()=>r.value%1)),a=(0,o.Fl)((()=>({[`${xe}-progress`]:n.value,[`${xe}-progress-raw`]:r.value,[`${xe}-gradient-color-1`]:Xe(n.value),[`${xe}-gradient-color-2`]:Je(n.value),[`${xe}-gradient-color-3`]:Ze(n.value),[`${xe}-transition-duration`]:g/f.length+"ms"})));return(0,c.qj)({progress:n,cssVars:a})};var $e=(0,o.aZ)({components:n,setup(){const e=(0,c.qj)({view:"anthill"}),t=Ne();function r(e){const{amount:r,currency:n,buyAmount:a}=t.multiplierPrices.generators[e],o=(0,c.SU)(r);if(t.state.currencies[n]<o)return;const s=a.value;t.state.currencies[n]-=o,t.state.generators[e].bought=s}function n(e){const{currency:r,amount:n}=Se[e].baseCost,a=(0,c.SU)(n);t.state.currencies[r]<a||(t.state.currencies[r]-=a,t.state.upgrades[e]=!0)}(0,o.JJ)(p,t);const a=(0,c.iH)(1),s=(0,o.Fl)((()=>window.innerWidth/a.value)),i=(0,o.Fl)((()=>({upgrades:`transform: scale(${Math.round(100*s.value)/100}) translateY(9vh) translateX(-50%)`,prestige:"transform: translateY(100vh)"}))),u=(0,o.Fl)((()=>Object.keys(i.value).includes(e.view)?i.value[e.view]:null)),l=Le();return{buyGenerator:r,buyUpgrade:n,ui:e,worldTransform:u,anthillWidth:a,upgradesScale:s,dayNightCycle:l}}});$e.render=l;var _e=$e;(0,a.ri)(_e).mount("#app")}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}r.m=e,function(){var e=[];r.O=function(t,n,a,o){if(!n){var s=1/0;for(l=0;l<e.length;l++){n=e[l][0],a=e[l][1],o=e[l][2];for(var i=!0,u=0;u<n.length;u++)(!1&o||s>=o)&&Object.keys(r.O).every((function(e){return r.O[e](n[u])}))?n.splice(u--,1):(i=!1,o<s&&(s=o));i&&(e.splice(l--,1),t=a())}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[n,a,o]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.p="/ant-incremental/"}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,o,s=n[0],i=n[1],u=n[2],l=0;for(a in i)r.o(i,a)&&(r.m[a]=i[a]);if(u)var c=u(r);for(t&&t(n);l<s.length;l++)o=s[l],r.o(e,o)&&e[o]&&e[o][0](),e[s[l]]=0;return r.O(c)},n=self["webpackChunkant_incremental"]=self["webpackChunkant_incremental"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(76)}));n=r.O(n)})();
//# sourceMappingURL=app.87d012c4.js.map