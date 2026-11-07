(()=>{
const d=document,root=d.documentElement,rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
root.classList.add('js');
d.querySelectorAll('[data-split]').forEach(el=>{
 const t=el.textContent.trim();el.setAttribute('aria-label',t);
 el.style.setProperty('--base',el.dataset.base||'0s');el.textContent='';
 t.split(' ').forEach((w,i)=>{const s=d.createElement('span');s.className='w';s.style.setProperty('--i',i);s.setAttribute('aria-hidden','true');s.textContent=w+' ';el.appendChild(s)});
});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.2,rootMargin:'0px 0px -8% 0px'});
const go=()=>{root.classList.add('ready');d.body.classList.remove('lock');d.querySelectorAll('.rv,[data-split],.cert').forEach(el=>io.observe(el))};
addEventListener('load',()=>setTimeout(go,rm?50:1500));
setTimeout(()=>{if(!root.classList.contains('ready'))go()},4000);
if(!rm){
 const L=[...d.querySelectorAll('[data-p]')];let tick=false;
 const f=()=>{L.forEach(l=>l.style.transform=`translate3d(0,${scrollY*l.dataset.p}px,0)`);tick=false};
 addEventListener('scroll',()=>{if(!tick){tick=true;requestAnimationFrame(f)}},{passive:true});
}

const sw=[];d.querySelectorAll('[data-scrub]').forEach(el=>{const tx=el.textContent.trim();el.setAttribute('aria-label',tx);el.textContent='';tx.split(' ').forEach(w=>{const s=d.createElement('span');s.className='scw';s.setAttribute('aria-hidden','true');s.textContent=w+' ';el.appendChild(s);sw.push(s)})});
const imp=d.getElementById('importancia'),sc=d.getElementById('sc');
if(!rm){
 const onS=()=>{const vh=innerHeight;
  if(imp){const r=imp.getBoundingClientRect(),p=Math.min(1,Math.max(0,-r.top/(r.height-vh))),k=Math.floor(p*1.15*sw.length);sw.forEach((w,i)=>w.classList.toggle('on',i<=k))}
  if(sc){const r=sc.parentElement.getBoundingClientRect(),p=Math.min(1,Math.max(0,(vh-r.top)/(vh*.8))),m=innerWidth<=768;sc.style.transform=`rotateX(${20*(1-p)}deg) scale(${m?.9+.1*p:1.05-.05*p})`}};
 let q=false;addEventListener('scroll',()=>{if(!q){q=true;requestAnimationFrame(()=>{onS();q=false})}},{passive:true});onS();
 if(matchMedia('(hover:hover)').matches)d.querySelectorAll('[data-tilt]').forEach(el=>{
  el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;el.style.setProperty('--mx',x*100+'%');el.style.setProperty('--my',y*100+'%');el.style.transform=`perspective(1000px) rotateX(${(.5-y)*4}deg) rotateY(${(x-.5)*5}deg)`});
  el.addEventListener('pointerleave',()=>{el.style.transform=''})});
}
const cv=d.getElementById('gl'),gl=cv&&cv.getContext('webgl');
if(gl){
 const FS='precision mediump float;uniform float t;uniform vec2 r;float h(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}void main(){vec2 uv=gl_FragCoord.xy/r.y*2.5;float tt=t*.35;float a=n(uv+tt)*6.283;uv+=.6*n(uv*2.-tt)*vec2(cos(a),sin(a));for(int i=1;i<6;i++){float fi=float(i);uv.x+=.8/fi*cos(tt+fi*1.5*uv.y);uv.y+=.8/fi*cos(tt+fi*uv.x);}float m=.5+.5*sin(uv.x)*cos(uv.y);vec3 c=mix(vec3(1.),vec3(.965,.941,.894),smoothstep(.15,.5,m));c=mix(c,vec3(.188,.361,.263),smoothstep(.55,.95,m));gl_FragColor=vec4(c,1.);}';
 const mk=(ty,s)=>{const o=gl.createShader(ty);gl.shaderSource(o,s);gl.compileShader(o);return o},pr=gl.createProgram();
 gl.attachShader(pr,mk(gl.VERTEX_SHADER,'attribute vec2 p;void main(){gl_Position=vec4(p,0,1);}'));gl.attachShader(pr,mk(gl.FRAGMENT_SHADER,FS));gl.linkProgram(pr);gl.useProgram(pr);
 gl.bindBuffer(gl.ARRAY_BUFFER,gl.createBuffer());gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),gl.STATIC_DRAW);const ap=gl.getAttribLocation(pr,'p');gl.enableVertexAttribArray(ap);gl.vertexAttribPointer(ap,2,gl.FLOAT,false,0,0);
 const ut=gl.getUniformLocation(pr,'t'),ur=gl.getUniformLocation(pr,'r');let vis=false,id;
 const draw=ms=>{const k=Math.min(devicePixelRatio||1,1.5),w=cv.clientWidth*k|0,h=cv.clientHeight*k|0;if(cv.width!==w||cv.height!==h){cv.width=w;cv.height=h;gl.viewport(0,0,w,h)}gl.uniform1f(ut,ms/1000);gl.uniform2f(ur,w,h);gl.drawArrays(gl.TRIANGLE_STRIP,0,4);if(vis&&!rm)id=requestAnimationFrame(draw)};
 new IntersectionObserver(e=>{vis=e[0].isIntersecting;cancelAnimationFrame(id);if(vis)requestAnimationFrame(draw)}).observe(cv);
}

const bm=d.querySelector('.bmp'),b2=d.querySelector('.b2'),hero=d.getElementById('topo');
if(!rm){
 if(hero)addEventListener('pointermove',e=>{hero.style.setProperty('--bx',((e.clientX/innerWidth-.5)*-14).toFixed(1)+'px');hero.style.setProperty('--by',((e.clientY/innerHeight-.5)*-9).toFixed(1)+'px')},{passive:true});
 if(bm&&matchMedia('(hover:hover) and (pointer:fine)').matches){
  let tx=0,ty=0,x1=0,y1=0,x2=0,y2=0,raf=0,on=false;
  const loop=()=>{raf=0;x1+=(tx-x1)*.14;y1+=(ty-y1)*.14;x2+=(tx-x2)*.06;y2+=(ty-y2)*.06;
   bm.style.transform=`translate3d(${x1-85}px,${y1-85}px,0)`;b2.style.transform=`translate3d(${x2-160}px,${y2-160}px,0)`;
   if(Math.hypot(tx-x1,ty-y1)>.4||Math.hypot(tx-x2,ty-y2)>.4)raf=requestAnimationFrame(loop)};
  addEventListener('pointermove',e=>{tx=e.clientX;ty=e.clientY;if(!on){on=true;x1=x2=tx;y1=y2=ty;d.body.classList.add('bump-on')}if(!raf)raf=requestAnimationFrame(loop)},{passive:true});
  d.documentElement.addEventListener('pointerleave',()=>{on=false;d.body.classList.remove('bump-on')});
 }
}

if(matchMedia('(hover:hover) and (pointer:fine)').matches){
 const hl=d.createElement('div');hl.className='hlw';hl.setAttribute('aria-hidden','true');d.body.appendChild(hl);
 let px=0,py=0,hr=0;const W=/[\p{L}\p{N}'’-]/u;
 const find=()=>{hr=0;let n,o;
  if(d.caretPositionFromPoint){const p=d.caretPositionFromPoint(px,py);if(p){n=p.offsetNode;o=p.offset}}
  else if(d.caretRangeFromPoint){const r=d.caretRangeFromPoint(px,py);if(r){n=r.startContainer;o=r.startOffset}}
  if(!n||n.nodeType!==3||n.parentElement.closest('.btn,.pre,script,style,svg')){hl.classList.remove('on');return}
  const s=n.textContent;let a=o,b=o;while(a>0&&W.test(s[a-1]))a--;while(b<s.length&&W.test(s[b]))b++;
  if(a===b){hl.classList.remove('on');return}
  const r=d.createRange();r.setStart(n,a);r.setEnd(n,b);const c=r.getBoundingClientRect();
  if(px<c.left-3||px>c.right+3||py<c.top-3||py>c.bottom+3||c.width<2){hl.classList.remove('on');return}
  hl.style.width=(c.width+12)+'px';hl.style.height=(c.height+6)+'px';hl.style.transform=`translate3d(${c.left-6}px,${c.top-3}px,0)`;hl.classList.add('on')};
 addEventListener('pointermove',e=>{px=e.clientX;py=e.clientY;if(!hr)hr=requestAnimationFrame(find)},{passive:true});
 addEventListener('scroll',()=>hl.classList.remove('on'),{passive:true});
 d.documentElement.addEventListener('pointerleave',()=>hl.classList.remove('on'));
}

d.addEventListener('pointermove',e=>{const el=e.target.closest&&e.target.closest('.lg,.gp');if(!el)return;const r=el.getBoundingClientRect();el.style.setProperty('--mx',(e.clientX-r.left)+'px');el.style.setProperty('--my',(e.clientY-r.top)+'px')},{passive:true});
})();
