(()=>{
const U=id=>`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=900&q=70`;
// Replace with local files from assets/images/ when you have licensed photography.
const IMG=['1492144534655-ae79c964c9d7','1503376780353-7e6692767b70','1486262715619-67b85e0b08d3','1517524008697-84bbe3c3fd98','1493238792000-8113da705763','1552519507-da3b142c6e3d','1583121274602-3e2820c69888','1542362567-b07e54358753','1494976388531-d1058494cdd8','1502877338535-766e1452684a','1525609004556-c46c7d6cf023','1511919884226-fd3cad34687c'].map(U);
const bg=(i)=>`style="background-image:url('${IMG[i%IMG.length]}')"`;
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
// Tyre SVG
const tyre=`<circle class="t" cx="50" cy="50" r="48"/>${Array.from({length:36},(_,i)=>`<line class="tr" x1="50" y1="2.5" x2="50" y2="7" transform="rotate(${i*10} 50 50)"/>`).join('')}<circle class="r" cx="50" cy="50" r="32"/><g class="spin">${Array.from({length:5},(_,i)=>`<line class="sp" x1="50" y1="50" x2="50" y2="22" transform="rotate(${i*72} 50 50)"/>`).join('')}</g><circle class="hub" cx="50" cy="50" r="6"/>`;
$$('svg.tyre').forEach(s=>s.innerHTML=tyre);
$$('[data-img]').forEach(e=>e.style.backgroundImage=`url('${IMG[+e.dataset.img]}')`);
// Data
const S=[['New Tyre Installation','circle-plus','Precision mounting with new valves and torque-checked wheel nuts.'],['Tyre Replacement','arrows-rotate','Swap worn or damaged tyres quickly with expert fitment advice.'],['Wheel Balancing','scale-balanced','Computerised balancing removes vibration and uneven wear.'],['Wheel Alignment','crosshairs','Laser alignment for straight tracking and longer tyre life.'],['Puncture Repair','screwdriver-wrench','Safe plug-and-patch repairs that meet industry standards.'],['Tyre Rotation','rotate','Scheduled rotation to wear all four tyres evenly.'],['Tyre Pressure Check','gauge-high','Accurate pressure and tread-depth checks for safer, efficient driving.'],['Roadside Assistance','truck-medical','Mobile technicians on call day and night when you are stranded.'],['Seasonal Tyre Change','snowflake','Switch between summer and winter sets with storage available.'],['Alloy Wheel Services','compact-disc','Refurbishment and kerb-damage repair to factory finish.']];
$('#svc').innerHTML=S.map((s,i)=>`<div class="col-sm-6 col-lg-4 col-xl-3 rv"><div class="card-s"><div class="cimg"><div ${bg(i+2)}></div></div><div class="ico"><i class="fa-solid fa-${s[1]}"></i></div><div class="bd"><h5>${s[0]}</h5><p class="muted small">${s[2]}</p><a href="#book" class="lm" data-s="${s[0]}">Learn More</a></div></div></div>`).join('');
$('#bs').innerHTML+=S.map(s=>`<option>${s[0]}</option>`).join('');
const P=[['Michelin','Pilot Sport 5','Premium Car Tyres','Quiet, grippy, long-lasting comfort.'],['Bridgestone','Dueler H/P','SUV Tyres','Stable handling for heavy SUVs.'],['Pirelli','P Zero','Sports Performance','Track-bred grip for fast driving.'],['Goodyear','Vector 4Seasons','All-Season Tyres','Year-round confidence in any weather.'],['Continental','WinterContact','Winter Tyres','Sharp traction on snow and ice.'],['Dunlop','Econodrive','Commercial Tyres','Durable load-rated tyres for fleets.']];
$('#prod').innerHTML=P.map((p,i)=>`<div class="col-md-6 col-lg-4 rv"><div class="card-s"><div class="cimg" style="height:230px"><div ${bg(i+4)}></div></div><div class="bd" style="padding-top:20px"><div class="brand-n">${p[0]}</div><h5>${p[1]}</h5><div class="muted small mb-2">${p[2]} · ${p[3]}</div><div class="d-flex justify-content-between align-items-center"><span class="price">From $—</span><a href="#book" class="lm">View Details</a></div></div></div></div>`).join('');
const W=[['user-shield','Certified Specialists','Factory-trained technicians on every job.'],['gem','Premium Quality','Only authorised, warrantied brands.'],['tags','Fair Pricing','Clear quotes with no hidden extras.'],['gears','Advanced Equipment','Modern balancers and laser aligners.'],['wrench','Expert Installation','Torque-checked, road-tested fitting.'],['face-smile','Customer Satisfaction','Rated 4.9 across 2,000+ reviews.']];
$('#whyg').innerHTML=W.map(w=>`<div class="col-md-6 col-lg-4 rv"><div class="wy"><i class="fa-solid fa-${w[0]}"></i><h4>${w[1]}</h4><p class="muted m-0">${w[2]}</p></div></div>`).join('');
const G=[['workshop',2],['install',3],['workshop',5],['cars',1],['install',7],['cars',0],['workshop',8],['cars',9]];
$('#gg').innerHTML=G.map(g=>`<div class="col-6 col-md-4 col-lg-3 gc" data-c="${g[0]}"><div class="gi" data-src="${IMG[g[1]]}"><div ${bg(g[1])}></div></div></div>`).join('');
$('#steps').innerHTML=['Choose your service','Book your appointment','Visit our workshop','Drive away safely'].map((t,i)=>`<div class="col-md-6 col-lg-3 st rv"><b>${i+1}</b><h5>${t}</h5><p class="muted small">${['Pick what your car needs.','Select a date and time online.','Our team handles the work.','Leave with a full safety check.'][i]}</p></div>`).join('');
const T=[['Daniel R.','Fitted four tyres in under an hour. Clear pricing, great advice.'],['Sara K.','Alignment fixed a pull I had lived with for years.'],['Imran A.','Roadside team reached me in 25 minutes at night.'],['Elena M.','Winter swap was easy and the car feels planted.']];
$('#tw').innerHTML=T.map(t=>`<div class="swiper-slide"><div class="tc"><div class="stars mb-3">${'<i class="fa-solid fa-star"></i>'.repeat(5)}</div><p>${t[1]}</p><div class="d-flex gap-3 align-items-center"><div class="av">${t[0][0]}</div><b>${t[0]}</b></div></div></div>`).join('');
new Swiper('#tsw',{slidesPerView:1,spaceBetween:20,loop:true,speed:700,autoplay:{delay:4500,disableOnInteraction:false},pagination:{el:'.swiper-pagination',clickable:true},breakpoints:{768:{slidesPerView:2},1100:{slidesPerView:3}}});
$('#off').innerHTML=[['percent','Seasonal discounts','Save on winter and summer sets.'],['crosshairs','Alignment offer','Free check with any tyre purchase.'],['box-open','Installation packages','Fitting, balancing and valves bundled.'],['hourglass-half','Limited-time deals','Monthly promotions while stock lasts.']].map(o=>`<div class="col-sm-6 col-lg-3"><div class="of"><i class="fa-solid fa-${o[0]}"></i><h5 class="mt-2">${o[1]}</h5><p>${o[2]}</p></div></div>`).join('');
const F=[['How often should I replace tyres?','Replace at 1.6 mm tread depth or after about 6 years, whichever comes first.'],['What pressure should I run?','Use the figure on your door-jamb placard, checked monthly when tyres are cold.'],['Do I need alignment after new tyres?','It is recommended, especially if the car pulls or wear is uneven.'],['Can a puncture be repaired?','Yes, if it is in the tread area and under 6 mm.'],['What is wheel balancing?','Weights are added so the wheel spins evenly, preventing vibration.'],['Winter or all-season tyres?','Winter tyres win below 7°C; all-season suits mild climates.'],['How long does fitting take?','Usually 45–60 minutes for four tyres.'],['Do you offer warranty?','Yes, every tyre includes manufacturer and workmanship cover.']];
$('#faq').innerHTML=F.map((f,i)=>`<div class="accordion-item"><h3 class="accordion-header"><button class="accordion-button ${i?'collapsed':''}" data-bs-toggle="collapse" data-bs-target="#f${i}">${f[0]}</button></h3><div id="f${i}" class="accordion-collapse collapse ${i?'':'show'}" data-bs-parent="#faq"><div class="accordion-body">${f[1]}</div></div></div>`).join('');
$('#stats').innerHTML=[[10000,'Happy Customers'],[15,'Years of Experience'],[25000,'Tyres Installed'],[50,'Professional Experts']].map(s=>`<div class="col-6 col-lg-3"><b data-n="${s[0]}">0</b>${s[1]}</div>`).join('');
// Nav
const nav=$('#nav'),menu=$('#menu');
addEventListener('scroll',()=>nav.classList.toggle('sc',scrollY>40));
$('#burger').onclick=()=>menu.classList.toggle('open');
$$('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const t=$(a.getAttribute('href'));if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth'});menu.classList.remove('open');if(a.dataset.s)$('#bs').value=a.dataset.s}}));
// Finder
const prods=[['Pilot Sport 5','Michelin','Car'],['Dueler H/P','Bridgestone','SUV'],['P Zero','Pirelli','Sports'],['Econodrive','Dunlop','Commercial'],['Primacy 4','Michelin','Car'],['Scorpion','Pirelli','SUV']];
$('#ff').onsubmit=e=>{e.preventDefault();const v=$('#fv').value,sz=`${$('#fw').value}/${$('#fp').value} R${$('#fr').value}`;
let m=prods.filter(p=>p[2]===v);if(!m.length)m=prods.slice(0,3);
$('#fres').innerHTML=m.map((p,i)=>`<div class="col-md-4"><div class="card-s"><div class="bd" style="padding-top:20px"><div class="brand-n">${p[1]}</div><h5>${p[0]}</h5><p class="muted small mb-2">Size ${sz} · ${p[2]}</p><a href="#book" class="lm">Book fitting</a></div></div></div>`).join('');
gsap.from('#fres .col-md-4',{y:30,opacity:0,stagger:.12,duration:.6})};
// Gallery
$('#gf').onclick=e=>{const b=e.target.closest('button');if(!b)return;$$('#gf button').forEach(x=>x.classList.remove('on'));b.classList.add('on');
$$('.gc').forEach(c=>{const show=b.dataset.f==='all'||c.dataset.c===b.dataset.f;if(show){c.style.display='';gsap.fromTo(c,{scale:.85,opacity:0},{scale:1,opacity:1,duration:.5})}else c.style.display='none'})};
$('#gg').onclick=e=>{const g=e.target.closest('.gi');if(g){$('#lb img').src=g.dataset.src;$('#lb').classList.add('on')}};
$('#lb').onclick=()=>$('#lb').classList.remove('on');addEventListener('keydown',e=>e.key==='Escape'&&$('#lb').classList.remove('on'));
// Booking
$('#bd').min=new Date().toISOString().split('T')[0];
$('#bf').onsubmit=e=>{e.preventDefault();const f=e.target;f.classList.add('was-validated');if(!f.checkValidity())return;$('#ok').hidden=false;
const d=new FormData(f);$('#wa').href=`https://wa.me/15550123456?text=${encodeURIComponent(`Hi, I'm ${d.get('name')}. Booking ${d.get('service')} for ${d.get('brand')} ${d.get('model')} on ${d.get('date')} at ${d.get('time')}.`)}`;
f.reset();f.classList.remove('was-validated')};
$('#nl').onsubmit=e=>{e.preventDefault();$('#nlm').textContent='Subscribed. Thank you.';e.target.reset()};
// Animations
gsap.registerPlugin(ScrollTrigger);
gsap.to('.spin',{rotation:360,svgOrigin:'50 50',duration:3,repeat:-1,ease:'none'});
gsap.to('svg.big',{rotation:360,duration:14,repeat:-1,ease:'none'});
const L=document.getElementById('loader');gsap.to('#loader svg',{rotation:720,duration:1.4,ease:'power2.inOut'});
const go=()=>{gsap.to(L,{opacity:0,duration:.6,delay:.9,onComplete:()=>L.remove()});
gsap.from('.hero-h span',{yPercent:110,duration:1,stagger:.15,ease:'power4.out',delay:1.2});
gsap.from('.lead-s,.hero .btn-red,.hero .btn-ghost,.badge-f',{opacity:0,y:24,stagger:.1,duration:.8,delay:1.8})};
document.readyState==='complete'?go():addEventListener('load',go);
gsap.to('.hero-bg',{yPercent:18,ease:'none',scrollTrigger:{trigger:'.hero',scrub:true,start:'top top',end:'bottom top'}});
gsap.utils.toArray('[data-n]').forEach(el=>ScrollTrigger.create({trigger:el,once:true,start:'top 90%',onEnter:()=>{const o={v:0},n=+el.dataset.n;gsap.to(o,{v:n,duration:2,ease:'power2.out',onUpdate:()=>el.textContent=Math.floor(o.v).toLocaleString()+'+'})}}));
ScrollTrigger.batch('.rv',{start:'top 88%',once:true,onEnter:b=>gsap.fromTo(b,{y:50,opacity:0},{y:0,opacity:1,stagger:.1,duration:.8,ease:'power3.out'})});
gsap.from('.im1',{xPercent:-12,opacity:0,duration:1.1,scrollTrigger:{trigger:'#about',start:'top 70%'}});
gsap.from('.im2',{xPercent:15,opacity:0,duration:1.1,delay:.2,scrollTrigger:{trigger:'#about',start:'top 70%'}});
gsap.to('.im2',{yPercent:-10,ease:'none',scrollTrigger:{trigger:'#about',scrub:true}});
})();
