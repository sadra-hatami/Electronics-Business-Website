gsap.registerPlugin(ScrollTrigger);

/* ---------------------------- nav scroll state ---------------------------- */
const nav = document.getElementById('siteNav');
const progressFill = document.getElementById('progressFill');
const backTop = document.getElementById('backTop');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
  backTop.classList.toggle('show', window.scrollY > 900);
  const h = document.documentElement;
  const pct = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
  progressFill.style.width = pct + '%';
});
backTop.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

/* ---------------------------- custom cursor ---------------------------- */
const cursorDot = document.getElementById('cursorDot');
window.addEventListener('mousemove', e => {
  cursorDot.style.left = e.clientX + 'px';
  cursorDot.style.top = e.clientY + 'px';
});
document.querySelectorAll('a, button, [data-tilt]').forEach(el=>{
  el.addEventListener('mouseenter', ()=>{cursorDot.style.width='22px';cursorDot.style.height='22px';});
  el.addEventListener('mouseleave', ()=>{cursorDot.style.width='8px';cursorDot.style.height='8px';});
});

/* ---------------------------- hero intro timeline ---------------------------- */
const introTl = gsap.timeline({delay:.2});
introTl
  .to('.hero-eyebrow',{opacity:1,duration:.7,ease:'power2.out'})
  .to('.hero-title .line span',{y:'0%',duration:.9,stagger:.12,ease:'power4.out'},'-=.4')
  .to('.hero-sub',{opacity:1,duration:.8,ease:'power2.out'},'-=.5')
  .to('.hero-cta-row',{opacity:1,duration:.8,ease:'power2.out'},'-=.6')
  .from('.laptop',{opacity:0,y:60,duration:1.1,ease:'power3.out'},'-=.9')
  .to('.spec-badge',{opacity:1,duration:.6,stagger:.1,ease:'power2.out'},'-=.5');

/* ---------------------------- laptop open on scroll ---------------------------- */
const heroTl = gsap.timeline({
  scrollTrigger:{
    trigger:'.hero',
    start:'top top',
    end:'bottom bottom',
    scrub:0.6,
  }
});

heroTl
  .to('#lidEl',{rotateX:0,duration:1,ease:'none'},0)
  .to('.laptop',{scale:1,y:'-2vh',duration:1,ease:'none'},0)
  .to('#screenGlow',{opacity:1,duration:.4,ease:'none'},0.55)
  .to('#screenUI',{opacity:1,duration:.3,ease:'none'},0.62)
  .to('.hero-eyebrow,.hero-title,.hero-sub,.hero-cta-row',{opacity:0,y:-40,duration:.4,ease:'none'},0.05)
  .to('.spec-badge',{opacity:0,duration:.3,ease:'none'},0.05)
  .to('.spec-badge',{opacity:1,duration:.3,ease:'none'},0.65)
  .to('.laptop',{rotateX:0,duration:.6,ease:'none'},0.7)
  .to('.stage',{scale:1.08,duration:.8,ease:'none'},0.75)
  .to('#screenUI',{opacity:0,duration:.3,ease:'none'},0.9)
  .to('.hero',{opacity:1},1);

gsap.set('.laptop',{transformOrigin:'50% 85%'});

/* ---------------------------- generic reveal-on-scroll ---------------------------- */
document.querySelectorAll('.reveal').forEach((el,i)=>{
  gsap.to(el,{
    opacity:1,y:0,duration:1,ease:'power3.out',
    scrollTrigger:{trigger:el,start:'top 88%'}
  });
});

/* ---------------------------- count-up numbers (with pop + glow) ---------------------------- */
document.querySelectorAll('[data-count]').forEach(el=>{
  const target = parseFloat(el.dataset.count);
  const span = el.querySelector('.count');
  const isDecimal = String(target).includes('.');
  const cell = el.closest('.deep-cell');
  ScrollTrigger.create({
    trigger:el, start:'top 85%', once:true,
    onEnter:()=>{
      gsap.set(el,{transformOrigin:'50% 50%'});
      gsap.fromTo({v:0},{v:target},{
        v:target,duration:1.8,ease:'power3.out',
        onUpdate:function(){
          const val = this.targets()[0].v;
          span.textContent = isDecimal ? val.toFixed(1) : Math.round(val);
        },
        onComplete:function(){
          gsap.timeline()
            .to(el,{scale:1.14,duration:.18,ease:'power2.out'})
            .to(el,{scale:1,duration:.4,ease:'elastic.out(1,.4)'});
          if(cell){
            cell.style.boxShadow = '0 0 0 1px rgba(44,198,192,.4) inset';
            gsap.fromTo(cell,{filter:'brightness(1.6)'},{filter:'brightness(1)',duration:.9,ease:'power2.out'});
          }
        }
      });
    }
  });
});

/* ---------------------------- radial ring fill ---------------------------- */
document.querySelectorAll('[data-ring]').forEach(ring=>{
  const target = parseFloat(ring.dataset.ring);
  ScrollTrigger.create({
    trigger:ring, start:'top 85%', once:true,
    onEnter:()=>{
      gsap.fromTo(ring,{'--p':0},{'--p':target,duration:1.8,ease:'power3.out'});
    }
  });
});

/* ---------------------------- preloader ---------------------------- */
window.addEventListener('load', ()=>{
  const fill = document.getElementById('plBarFill');
  const pct = document.getElementById('plPct');
  const pre = document.getElementById('preloader');
  const obj = {v:0};
  gsap.to(obj,{
    v:100,duration:1.1,ease:'power2.inOut',
    onUpdate:()=>{
      const p = Math.round(obj.v);
      fill.style.width = p+'%';
      pct.textContent = 'در حال آماده‌سازی — ' + p + '٪';
    },
    onComplete:()=>{
      gsap.to(pre,{
        opacity:0,duration:.6,delay:.15,ease:'power2.out',
        onComplete:()=>{ pre.style.display='none'; introTl.play(0); }
      });
    }
  });
});
introTl.pause();

/* ---------------------------- side dot nav ---------------------------- */
const dots = document.querySelectorAll('.side-dots button');
dots.forEach(dot=>{
  dot.addEventListener('click', ()=>{
    document.querySelector(dot.dataset.target)?.scrollIntoView({behavior:'smooth'});
  });
});
const dotSections = Array.from(dots).map(d => document.querySelector(d.dataset.target)).filter(Boolean);
dotSections.forEach((sec,i)=>{
  ScrollTrigger.create({
    trigger:sec, start:'top center', end:'bottom center',
    onEnter:()=>setActiveDot(i), onEnterBack:()=>setActiveDot(i)
  });
});
function setActiveDot(i){
  dots.forEach(d=>d.classList.remove('active'));
  dots[i].classList.add('active');
}

/* ---------------------------- mini laptop open per model card ---------------------------- */
document.querySelectorAll('[data-mini-laptop]').forEach(box=>{
  const lid = box.querySelector('[data-mini-lid]');
  const glow = box.querySelector('.glow');
  gsap.set(lid,{transformOrigin:'50% 88%'});
  ScrollTrigger.create({
    trigger:box, start:'top 82%',
    onEnter:()=>{
      gsap.to(lid,{rotateX:0,duration:1.1,ease:'power3.out'});
      gsap.to(glow,{opacity:.9,duration:.6,delay:.5,ease:'power2.out'});
    },
    onLeaveBack:()=>{
      gsap.to(lid,{rotateX:100,duration:.6,ease:'power2.in'});
      gsap.to(glow,{opacity:0,duration:.3});
    }
  });
});

/* ---------------------------- configurator laptop open ---------------------------- */
(function(){
  const lid = document.querySelector('[data-config-lid]');
  const glow = document.getElementById('configGlow');
  if(!lid) return;
  gsap.set(lid,{transformOrigin:'50% 88%'});
  ScrollTrigger.create({
    trigger:lid, start:'top 85%',
    onEnter:()=>{
      gsap.to(lid,{rotateX:0,duration:1.1,ease:'power3.out'});
      gsap.to(glow,{opacity:.9,duration:.6,delay:.4,ease:'power2.out'});
    }
  });
})();

/* ---------------------------- color swatches ---------------------------- */
document.querySelectorAll('.swatches').forEach(group=>{
  const card = group.closest('.model-card');
  const box = card.querySelector('[data-mini-laptop]');
  group.querySelectorAll('.swatch').forEach(sw=>{
    sw.addEventListener('click', ()=>{
      group.querySelectorAll('.swatch').forEach(s=>s.classList.remove('active'));
      sw.classList.add('active');
      const color = sw.dataset.color;
      gsap.to(box,{'--mcolor':color,duration:.4});
      box.style.setProperty('--mcolor', color);
      const dotmark = box.querySelector('.dotmark');
      if(dotmark) dotmark.style.background = color;
    });
  });
});

/* ---------------------------- FAQ accordion ---------------------------- */
document.querySelectorAll('.faq-item').forEach(item=>{
  const q = item.querySelector('.faq-q');
  const a = item.querySelector('.faq-a');
  q.addEventListener('click', ()=>{
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(o=>{
      o.classList.remove('open');
      o.querySelector('.faq-a').style.maxHeight = null;
    });
    if(!isOpen){
      item.classList.add('open');
      a.style.maxHeight = a.scrollHeight + 'px';
    }
  });
});

/* ---------------------------- configurator logic ---------------------------- */
(function configurator(){
  const base = 98000000;
  let extra = {ram:0, storage:0};
  const total = document.getElementById('configTotal');
  const glow = document.getElementById('configGlow');

  function fmt(n){ return n.toLocaleString('fa-IR'); }
  function update(){
    const sum = base + extra.ram + extra.storage;
    total.textContent = fmt(sum) + ' تومان';
    gsap.fromTo(total,{scale:1.08},{scale:1,duration:.4,ease:'power2.out'});
  }

  document.querySelectorAll('.chip-set').forEach(group=>{
    const key = group.dataset.group;
    group.querySelectorAll('.chip').forEach(chip=>{
      chip.addEventListener('click', ()=>{
        group.querySelectorAll('.chip').forEach(c=>c.classList.remove('active'));
        chip.classList.add('active');
        if(key === 'ram'){ extra.ram = parseInt(chip.dataset.price); document.getElementById('ramLabel').textContent = chip.textContent; }
        if(key === 'storage'){ extra.storage = parseInt(chip.dataset.price); document.getElementById('storageLabel').textContent = chip.textContent; }
        if(key === 'color'){
          document.getElementById('colorLabel').textContent = chip.textContent;
          gsap.to(glow,{opacity:0,duration:.2,onComplete:()=>{
            glow.style.background = `radial-gradient(ellipse 70% 60% at 50% 30%, ${chip.dataset.hex}, transparent 70%)`;
            gsap.to(glow,{opacity:.9,duration:.4});
          }});
        }
        update();
      });
    });
  });
  update();
})();

/* ---------------------------- magnetic buttons ---------------------------- */
document.querySelectorAll('.btn-primary').forEach(btn=>{
  btn.classList.add('magnetic');
  btn.addEventListener('mousemove', e=>{
    const r = btn.getBoundingClientRect();
    const x = e.clientX - r.left - r.width/2;
    const y = e.clientY - r.top - r.height/2;
    gsap.to(btn,{x:x*0.25, y:y*0.4, duration:.3, ease:'power2.out'});
  });
  btn.addEventListener('mouseleave', ()=>{
    gsap.to(btn,{x:0,y:0,duration:.5,ease:'elastic.out(1,.4)'});
  });
});

/* ---------------------------- model card tilt ---------------------------- */
document.querySelectorAll('[data-tilt]').forEach(card=>{
  card.addEventListener('mousemove', e=>{
    const r = card.getBoundingClientRect();
    const x = e.clientX - r.left, y = e.clientY - r.top;
    const rx = ((y / r.height) - .5) * -8;
    const ry = ((x / r.width) - .5) * 8;
    gsap.to(card,{rotateX:rx,rotateY:ry,duration:.4,ease:'power2.out'});
    card.style.setProperty('--mx', x+'px');
    card.style.setProperty('--my', y+'px');
  });
  card.addEventListener('mouseleave', ()=>{
    gsap.to(card,{rotateX:0,rotateY:0,duration:.6,ease:'power3.out'});
  });
});

/* ---------------------------- gallery horizontal scroll ---------------------------- */
const track = document.getElementById('galleryTrack');
gsap.to(track,{
  x: () => -(track.scrollWidth - window.innerWidth + 80),
  ease:'none',
  scrollTrigger:{
    trigger:'.gallery',
    start:'top top',
    end:()=> '+=' + (track.scrollWidth),
    scrub:0.6,
    pin:true,
  }
});

/* ---------------------------- particle field (hero background) ---------------------------- */
(function particles(){
  const canvas = document.getElementById('particleCanvas');
  const ctx = canvas.getContext('2d');
  let w,h,pts=[];
  function resize(){
    w = canvas.width = canvas.offsetWidth * devicePixelRatio;
    h = canvas.height = canvas.offsetHeight * devicePixelRatio;
  }
  function init(){
    resize();
    pts = Array.from({length: 70}, () => ({
      x: Math.random()*w, y: Math.random()*h,
      r: Math.random()*1.6 + .4,
      vy: Math.random()*.25 + .05,
      o: Math.random()*.5 + .15
    }));
  }
  function loop(){
    ctx.clearRect(0,0,w,h);
    pts.forEach(p=>{
      p.y -= p.vy;
      if(p.y < -10) p.y = h + 10;
      ctx.beginPath();
      ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle = `rgba(44,198,192,${p.o})`;
      ctx.fill();
    });
    requestAnimationFrame(loop);
  }
  window.addEventListener('resize', resize);
  init(); loop();
})();

/* ---------------------------- story canvas: rotating wireframe block ---------------------------- */
(function storyScene(){
  const canvas = document.getElementById('storyCanvas');
  if(!canvas || typeof THREE === 'undefined') return;
  const renderer = new THREE.WebGLRenderer({canvas, alpha:true, antialias:true});
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.set(0,0,6);

  function fit(){
    const size = canvas.parentElement.clientWidth;
    renderer.setSize(size, size, false);
    renderer.setPixelRatio(Math.min(devicePixelRatio,2));
    camera.aspect = 1; camera.updateProjectionMatrix();
  }

  const geo = new THREE.IcosahedronGeometry(1.7, 1);
  const mat = new THREE.MeshBasicMaterial({color:0x2CC6C0, wireframe:true, transparent:true, opacity:.55});
  const mesh = new THREE.Mesh(geo, mat);
  scene.add(mesh);

  const geo2 = new THREE.IcosahedronGeometry(1.7, 1);
  const mat2 = new THREE.MeshBasicMaterial({color:0xD8B26A, wireframe:true, transparent:true, opacity:.18});
  const mesh2 = new THREE.Mesh(geo2, mat2);
  mesh2.scale.setScalar(1.35);
  scene.add(mesh2);

  fit();
  window.addEventListener('resize', fit);

  let rafId;
  function animate(){
    mesh.rotation.y += 0.0035;
    mesh.rotation.x += 0.0016;
    mesh2.rotation.y -= 0.002;
    renderer.render(scene, camera);
    rafId = requestAnimationFrame(animate);
  }
  animate();
})();
