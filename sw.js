if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let n={};const d=e=>a(e,r),f={module:{uri:r},exports:n,require:d};s[r]=Promise.all(i.map((e=>f[e]||d(e)))).then((e=>(c(...e),n)))}}define(["./workbox-d11198b9"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/images/#0E5CCE.png",revision:"d8ddc379355b9c48a6e9afc68a4a3a61"},{url:"assets/images/#FF6A00.png",revision:"e7d009f86a4438efb318875077675439"},{url:"assets/images/#FFDA01.png",revision:"ccd94a11f77b223b71f1988579e77a6f"},{url:"assets/images/background-01.png",revision:"e4604a44bf078e4b878dac8fda957a49"},{url:"assets/images/background-02.png",revision:"addf735190d251a08ad1c2d327fb2e63"},{url:"assets/images/background-03.png",revision:"85059645ef78a8ede62ecd7a064da1b7"},{url:"assets/images/background-04.png",revision:"616d1bb66250112dfe169d4cff104ee4"},{url:"assets/images/GRADIENTE 1.png",revision:"99e638fefd6ce697a5d100fcd8c6ce97"},{url:"assets/images/GRADIENTE 2.png",revision:"ca97969450c6df05fe094df50db0c237"},{url:"assets/images/GRADIENTE 3.png",revision:"6c7574b89f2143b43bcdc26d08a70831"},{url:"assets/images/logo-01.png",revision:"de0975ee75b12632f0b6a1c9c13bcea3"},{url:"assets/images/logo-02.png",revision:"43fd27b760bef0eed4753acd6b4c17e6"},{url:"assets/images/logo-03.png",revision:"186c51c11c7cdf6310d4bb7ad64a41d6"},{url:"assets/images/logo-04.png",revision:"a5a446be56dda89023899b73c32d400f"},{url:"assets/images/logo-05.png",revision:"41df7dfcbaa4de00b014c985c9acc69b"},{url:"assets/images/logo-06.png",revision:"af8637eb2d70c1cec289e016d807d3f0"},{url:"assets/images/prefeito-02.png",revision:"b64b13b31c301dfca6faa7bdbd9c60ab"},{url:"assets/images/prefeito-vice-01.png",revision:"8e424bece29a52941d05af842110b951"},{url:"assets/images/readme.txt",revision:"66f8afe6d7d33d86e80004c549c21a00"},{url:"assets/images/VEREADORES/CANDIDATE.txt",revision:"d63e7678bd30b0df147ce5326abd185f"},{url:"assets/images/VEREADORES/DAMÁSIO.png",revision:"760b9bf3eb0a2a083761cb435e6f2770"},{url:"assets/images/VEREADORES/DENILSON.png",revision:"6866f4852434b24f0118dd8e63a92ae6"},{url:"assets/images/VEREADORES/EDIVALDO.png",revision:"95e3c2317c24e1c6fdc1d2439fa95d7e"},{url:"assets/images/VEREADORES/GRACILENE.png",revision:"8860cf491cfef25915c008ede17bcdeb"},{url:"assets/images/VEREADORES/LIZ-VITORIA.png",revision:"61648c72a277b3618ba3775463227ad6"},{url:"assets/images/VEREADORES/LUIZ-ALVES.png",revision:"fb8da22f3538bcce8e047fcaf6f4bff6"},{url:"assets/images/VEREADORES/NILMA.png",revision:"f434042f99c6e8620e0e419d6f728936"},{url:"assets/images/VEREADORES/RHUAN.png",revision:"18642a8fb16ecadece1b19ed20395b9b"},{url:"assets/images/VEREADORES/ROGERIO-MOREIRA.png",revision:"3476f64fe55d4c7c2cace62fd846c7cf"},{url:"assets/images/VEREADORES/ROSINHA.png",revision:"a3726903dd0229923601fca603633a04"},{url:"assets/images/VEREADORES/ROZINHA.png",revision:"7a8d337188f0653a530c9710cb07d1a4"},{url:"assets/images/VEREADORES/RUZIA.png",revision:"aef9aec1e3ebd58fe218c69e92dde9c0"},{url:"assets/images/VEREADORES/VAN-MACENA.png",revision:"340b600db716b829439c88ca9d45c66a"},{url:"assets/images/VEREADORES/VAN.png",revision:"643147c7c656113a22001584bc128b67"},{url:"assets/images/VEREADORES/VERIENE-VILARIM.png",revision:"03212e8fc44ccbee590b4f437ca83c89"},{url:"assets/images/VEREADORES/VIVI.png",revision:"4fb97c72cc0b8829b12e3fe9468fa75b"},{url:"assets/images/vice-01.png",revision:"a711000a152bbf85cda691a06f9c1224"},{url:"assets/images/vice-02.png",revision:"682a27336b280ce6880e1c2daa0e773e"},{url:"index.css",revision:"685aca8d5cb38e7094d68227466e20c9"},{url:"index.html",revision:"973153d79692450f73d9b751951a20e3"},{url:"index.js",revision:"63dc019ad1a728b221944c463000900c"},{url:"manifest.json",revision:"c9915dea2f38e6196f4371f200cfcda2"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
