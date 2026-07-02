(()=>{"use strict";var e,t,a,n,i={3(e,t,a){function n(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"pl";if("single-user"===e.eventType){let a=e.singleUserStats;return a?`${"pl"===t?"trafione":"made"} ${a.made} \xb7 ${"pl"===t?"dobite":"put-back"} ${a.putBack} \xb7 ${"pl"===t?"nietrafione":"missed"} ${a.missed}`:""}return e.setScores?.length?e.setScores.filter(Boolean).join(" · "):e.scoreSummary?.trim()||""}var i=a(223),o=a(137),s=a(832);let r="602620275958-3316q373jdub1btf86a8m4tcf5ov4uvd.apps.googleusercontent.com",l=(0,i.Dk)().length?(0,i.Dk)()[0]:(0,i.Wp)({apiKey:"AIzaSyAsZdgR30zAkbh3krAL3C4BoEhLm-rGbCY",authDomain:"malpigaj-a8ce1.firebaseapp.com",projectId:"malpigaj-a8ce1",storageBucket:"malpigaj-a8ce1.firebasestorage.app",messagingSenderId:"602620275958",appId:"1:602620275958:web:e96a29365b6f7c547f10d7",measurementId:"G-ZZSQBM6VGG",databaseURL:"https://malpigaj-a8ce1-default-rtdb.firebaseio.com/"}),c=null;try{c=(0,o.C3)(l)}catch(e){console.error("Realtime Database initialization failed:",e)}let d=(0,s.xI)(l),u=null,m=null,p="login",v=[],g=[],f=!1,b=!1,y=!1,h=[];function $(e){return e?String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"):""}function w(e,t){let a=e.toLowerCase().trim().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")||`participant-${t}`;return`custom-${a}-${t}`}function E(e){if(!e)return null;let t=e.trim();if(!t)return null;let a=t.replace(/^https?:\/\//i,"https://"),n=$(a),i=a.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/|live\/)|youtu\.be\/|youtube-nocookie\.com\/embed\/)([A-Za-z0-9_-]{11})/i);if(i)return`<div class="video-embed"><iframe src="https://www.youtube-nocookie.com/embed/${i[1]}" title="YouTube video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe></div>`;let o=a.match(/vimeo\.com\/(\d+)/i);if(o)return`<div class="video-embed"><iframe src="https://player.vimeo.com/video/${o[1]}" title="Vimeo video" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen loading="lazy"></iframe></div>`;let s=a.match(/dailymotion\.com\/video\/([A-Za-z0-9]+)/i);if(s)return`<div class="video-embed"><iframe src="https://www.dailymotion.com/embed/video/${s[1]}" title="Dailymotion video" allowfullscreen loading="lazy"></iframe></div>`;let r=a.match(/streamable\.com\/(\w+)/i);if(r)return`<div class="video-embed"><iframe src="https://streamable.com/o/${r[1]}" title="Streamable video" allowfullscreen loading="lazy"></iframe></div>`;let l=a.match(/loom\.com\/share\/([A-Za-z0-9]+)/i);if(l)return`<div class="video-embed"><iframe src="https://www.loom.com/embed/${l[1]}" title="Loom video" allowfullscreen loading="lazy"></iframe></div>`;let c=a.match(/(?:wistia\.com|wi\.st)\/medias\/([A-Za-z0-9]+)/i);if(c)return`<div class="video-embed"><iframe src="https://fast.wistia.net/embed/iframe/${c[1]}" title="Wistia video" allowfullscreen loading="lazy"></iframe></div>`;let d=a.match(/twitch\.tv\/videos\/(\d+)/i);if(d)return`<div class="video-embed"><iframe src="https://player.twitch.tv/?video=v${d[1]}&parent=${window.location.hostname}" title="Twitch video" allowfullscreen loading="lazy"></iframe></div>`;let u=a.match(/\.(mp4|webm|ogg)(\?.*)?$/i);return u?`<video class="video-embed video-file" controls preload="metadata"><source src="${n}" type="video/${u[1].toLowerCase()}"></video>`:`<div class="video-embed"><div class="footage-fallback"><a href="${n}" target="_blank" rel="noreferrer">Open footage in a new tab</a></div></div>`}function S(e){return({welcomeBack:"Witaj ponownie",signInToContinue:"Zaloguj się, aby kontynuować",description:"Użyj konta Google lub utwórz nowe konto, aby zacząć szybko.",createAccount:"Utwórz konto",continueAsGuest:"Kontynuuj jako gość",name:"Imię",email:"Email",password:"Hasło",register:"Zarejestruj",profile:"Profil",postEvent:"Dodaj wydarzenie",events:"Wydarzenia",logout:"Wyloguj",signIn:"Zaloguj",createEvent:"Dodaj nowe wydarzenie",date:"Data",time:"Godzina",location:"Lokalizacja",participants:"Uczestnicy",matchLabel:"Etykieta meczu (opcjonalnie)",footage:"Link do materiału (opcjonalnie)",postButton:"Dodaj wydarzenie",upcomingEvents:"Nadchodzące wydarzenia",guestViewTitle:"Nadchodzące wydarzenia (gość)",editEvent:"Edytuj",deleteEvent:"Usuń",postedBy:"Dodane przez",match:"Mecz",backToEvents:"Powrót do wydarzeń",language:"Język"})[e]||e}function k(){return new Promise(e=>{if(window.google)return void e();let t=0,a=setInterval(()=>{window.google&&(clearInterval(a),e()),++t>50&&(clearInterval(a),console.error("Google API failed to load after attempts"),e())},100)})}function I(e){localStorage.setItem("userInfo",JSON.stringify(e))}function B(){localStorage.removeItem("userInfo")}function L(){return!!c||(console.warn("Realtime DB not available; skipping DB operation."),!1)}function A(e,t){let a=t||{};return{...a,id:e||a.id||"",date:a.date||"",time:a.time||"",location:a.location||"",participants:a.participants||[],games:a.games||"",createdBy:a.createdBy||"",createdByUid:a.createdByUid||"",createdAt:a.createdAt||new Date().toISOString()}}async function j(){if(!L())return[];try{let e=(await (0,o.Jt)((0,o.KR)(c,"users"))).val();return e?Object.keys(e).map(t=>e[t]):[]}catch(e){return console.error("fetchAllUsersOnce error",e),[]}}async function T(e){if(L())try{await (0,o.hZ)((0,o.KR)(c,`users/${e.id}`),e)}catch(e){console.error("saveUserToDB error",e)}}async function U(e){if(L())try{await (0,o.TF)((0,o.KR)(c,`users/${e}`))}catch(e){console.error("removeUserFromDB error",e)}}async function O(){if(!L())return[];try{let e=(await (0,o.Jt)((0,o.KR)(c,"events"))).val();return e?Object.keys(e).map(t=>A(t,e[t])):[]}catch(e){return console.error("fetchAllEventsOnce error",e),[]}}async function z(e){if(L())try{let t=(0,o.VC)((0,o.KR)(c,"events")),a={...e,id:t.key||e.id};await (0,o.hZ)(t,a)}catch(e){console.error("pushEventToDB error",e)}}async function M(e,t){if(L())try{await (0,o.yo)((0,o.KR)(c,`events/${e}`),t)}catch(e){console.error("updateEventInDB error",e)}}async function D(e){if(L())try{await (0,o.TF)((0,o.KR)(c,`events/${e}`))}catch(e){console.error("removeEventFromDB error",e)}}async function C(){if(!L())return{};try{return(await (0,o.Jt)((0,o.KR)(c,"meta/admins"))).val()||{}}catch(e){return console.error("fetchAdmins error",e),{}}}function R(e){!L()||f||((0,o.Zy)((0,o.KR)(c,"users"),t=>{let a=t.val();v=a?Object.keys(a).map(e=>a[e]):[],localStorage.setItem("users",JSON.stringify(v)),e&&e(v),"post-event"===p&&H(v)}),f=!0)}function x(){!L()||f&&((0,o.AU)((0,o.KR)(c,"users")),f=!1)}function N(e){!L()||b||((0,o.Zy)((0,o.KR)(c,"events"),t=>{let a=t.val();(g=a?Object.keys(a).map(e=>A(e,a[e])):[]).sort((e,t)=>(t.createdAt||"").localeCompare(e.createdAt||"")),localStorage.setItem("gameEvents",JSON.stringify(g)),e&&e(g),("view-events"===p||"guest"===p)&&Q(g)}),b=!0)}function q(){!L()||b&&((0,o.AU)((0,o.KR)(c,"events")),b=!1)}function G(){let e,t,a;y=!1;let n=document.querySelector("#root");n&&(n.innerHTML=`
    <main class="page-shell">
      <section class="hero-card">
        <div class="brand">
          <span class="brand-mark">M</span>
          <div>
            <h1>Malpigaj</h1>
            <p>Game Events Platform with Google login</p>
          </div>
        </div>

        <div class="hero-copy">
          <p class="eyebrow">${S("welcomeBack")}</p>
          <h2>${S("signInToContinue")}</h2>
          <p class="description">${S("description")}</p>

          <div class="auth-actions">
            <div id="google-signin-button"></div>
            <span class="divider">or</span>
            <button class="button button-secondary" id="toggle-register" type="button">${S("createAccount")}</button>
            <button class="button button-ghost" id="guest-btn" type="button">${S("continueAsGuest")}</button>
          </div>
        </div>

        <form class="auth-form" id="register-form" novalidate style="display: none;">
          <div class="form-group">
            <label for="name">${S("name")}</label>
            <input id="name" name="name" type="text" autocomplete="name" placeholder="Your full name" />
          </div>
          <div class="form-group">
            <label for="email">${S("email")}</label>
            <input id="email" name="email" type="email" autocomplete="email" placeholder="you@example.com" />
          </div>
          <div class="form-group">
            <label for="password">${S("password")}</label>
            <input id="password" name="password" type="password" autocomplete="new-password" placeholder="Create a password" />
          </div>
          <button class="button button-primary" type="submit">${S("register")}</button>
        </form>
      </section>
    </main>
  `,e=document.getElementById("toggle-register"),t=document.getElementById("register-form"),a=document.querySelector(".auth-actions"),e?.addEventListener("click",()=>{t?.style.display==="none"?(t.style.display="grid",a&&(a.style.display="none")):(t&&(t.style.display="none"),a&&(a.style.display="grid"))}),t?.addEventListener("submit",async e=>{e.preventDefault();let t=document.getElementById("name")?.value,a=document.getElementById("email")?.value;if(t&&a){let e={id:"manual-"+Date.now(),name:t,email:a,picture:`https://ui-avatars.com/api/?name=${encodeURIComponent(t)}`,loginMethod:"manual",loginTime:new Date().toISOString()};I(e),await T(e),u=e,v=await j(),localStorage.setItem("users",JSON.stringify(v)),p="profile",P()}}),function(){let e=document.getElementById("google-signin-button");if(!e)return console.error("Google Sign-In button container not found");if(!window.google)return console.error("Google object not available");try{console.info("GIS debug:",{clientId:r,origin:window.location.origin,host:window.location.host})}catch(e){console.info("GIS debug: unable to read window location",e)}window.google.accounts.id.initialize({client_id:r,callback:async e=>{console.log("GIS callback received credential (truncated):",String(e.credential).slice(0,20)+"...");let t=function(e){try{let t=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),a=decodeURIComponent(atob(t).split("").map(e=>"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)).join(""));return JSON.parse(a)}catch(e){return console.error("Failed to decode JWT:",e),null}}(e.credential);if(!t){console.error("Failed to decode token from GIS response"),alert("Sign-in failed: invalid token received from Google.");return}let a=s.HF.credential(e.credential);try{let e=await (0,s.eN)(d,a);m=e.user;let n={id:e.user.uid,name:e.user.displayName||t.name,email:e.user.email||t.email,picture:e.user.photoURL||t.picture||`https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}`,loginMethod:"google",loginTime:new Date().toISOString()};u=n,I(n),await T(n),y=!1,R(),N(),p="profile",P()}catch(a){console.error("Firebase signInWithCredential failed",a);let e=a?.code||a?.message||"";if(String(e).includes("auth/configuration-not-found")||String(e).includes("auth/invalid-credential")||String(e).includes("auth/operation-not-allowed")){console.warn("Auth configuration issue detected. Attempting popup fallback."),alert("Automatic Google sign-in failed due to configuration. Trying popup sign-in as a fallback.");try{let e=new s.HF,a=await (0,s.df)(d,e);m=a.user;let n={id:a.user.uid,name:a.user.displayName||t.name,email:a.user.email||t.email,picture:a.user.photoURL||t.picture||`https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}`,loginMethod:"google",loginTime:new Date().toISOString()};u=n,I(n),await T(n),y=!1,R(),N(),p="profile",P(),console.log("Popup sign-in succeeded as fallback.")}catch(e){console.error("Popup fallback sign-in failed",e),alert("Sign-in failed. Check Firebase Google provider configuration and browser COOP/COEP headers.")}}else alert("Sign-in failed. See console for details.")}}});try{window.google.accounts.id.renderButton(e,{theme:"outline",size:"large",text:"signin_with"})}catch(e){console.warn("Google renderButton failed. Check GIS client origin and configuration.",e)}}(),document.getElementById("guest-btn")?.addEventListener("click",async()=>{y=!0,u=null,m=null,p="guest",N(),R(),await es()}))}async function P(){if(!u)return G();R(),N();let e=await C(),t=!!m&&!!e[m.uid],a=document.querySelector("#root");a&&(a.innerHTML=`
    <main class="page-shell">
      <nav class="top-nav">
        <div class="nav-brand">
          <span class="brand-mark">M</span>
          <span>Malpigaj</span>
        </div>
        <div class="nav-actions">
          <button class="nav-btn" id="profile-btn">${S("profile")}</button>
          <button class="nav-btn" id="post-event-btn">${S("postEvent")}</button>
          <button class="nav-btn" id="view-events-btn">${S("events")}</button>
          <button class="nav-btn logout" id="logout-btn">${S("logout")}</button>
        </div>
      </nav>

      <section class="hero-card profile-card">
        <div class="profile-header">
          <img src="${$(u.picture)}" alt="${$(u.name)}" class="profile-avatar" />
          <div>
            <h1>Welcome, ${$(u.name)}!</h1>
            <p class="profile-email">${$(u.email)}</p>
          </div>
        </div>

        <div class="profile-info">
          <p><strong>Login Method:</strong> ${"google"===u.loginMethod?"Google OAuth":"Manual Registration"}</p>
          <p><strong>Login Time:</strong> ${new Date(u.loginTime).toLocaleString()}</p>
          ${t?'<p class="admin-badge">Admin: you can manage users and events</p>':""}
        </div>

        ${t?`
          <section class="admin-panel">
            <h3>Admin: Manage Users</h3>
            <div id="admin-users-list" class="admin-users-list"></div>
          </section>
        `:""}
      </section>
    </main>
  `,document.getElementById("logout-btn")?.addEventListener("click",async()=>{try{await (0,s.CI)(d)}catch(e){console.error("signOut error",e)}el()}),document.getElementById("post-event-btn")?.addEventListener("click",()=>{p="post-event",K()}),document.getElementById("view-events-btn")?.addEventListener("click",()=>{p="view-events",_()}),document.getElementById("profile-btn")?.addEventListener("click",()=>{p="profile",P()}),t&&J())}async function J(){let e=document.getElementById("admin-users-list");e&&(0===v.length&&(v=await j()),e.innerHTML=v.map(e=>`
    <div class="admin-user-row" data-user-id="${e.id}">
      <img src="${$(e.picture)}" alt="${$(e.name)}" class="chip-avatar" />
      <div class="admin-user-info">
        <div class="admin-user-name">${$(e.name)}</div>
        <div class="admin-user-email">${$(e.email)}</div>
      </div>
      <div class="admin-user-actions">
        <button class="admin-delete-user" data-id="${e.id}">Delete</button>
      </div>
    </div>
  `).join(""),Array.from(e.querySelectorAll(".admin-delete-user")).forEach(e=>{e.addEventListener("click",async()=>{let t=e.getAttribute("data-id");if(confirm("Delete user and remove from events?")){if(await U(t),L()){let e=(await (0,o.Jt)((0,o.KR)(c,"events"))).val();if(e)for(let a of Object.keys(e)){let n=e[a],i=n.participants.filter(e=>e.id!==t);i.length!==n.participants.length&&await (0,o.yo)((0,o.KR)(c,`events/${a}`),{participants:i})}}alert("User removed")}})}))}async function K(){if(y){alert("You must sign in to post events."),p="guest",await es();return}if(!u)return G();0===v.length&&(v=await j(),localStorage.setItem("users",JSON.stringify(v))),R();let e=document.querySelector("#root");if(!e)return;e.innerHTML=`
    <main class="page-shell">
      <nav class="top-nav">
        <div class="nav-brand">
          <span class="brand-mark">M</span>
          <span>Malpigaj</span>
        </div>
        <div class="nav-actions">
          <button class="nav-btn" id="profile-btn">${S("profile")}</button>
          <button class="nav-btn" id="post-event-btn">${S("postEvent")}</button>
          <button class="nav-btn" id="view-events-btn">${S("events")}</button>
          <button class="nav-btn logout" id="logout-btn">${S("logout")}</button>
        </div>
      </nav>

      <section class="hero-card event-form-card">
        <h2>${S("createEvent")}</h2>
        
        <form id="event-form" class="event-form" novalidate>
          <div class="form-row">
            <div class="form-group">
              <label for="event-date">${S("date")}</label>
              <input id="event-date" name="date" type="date" required />
            </div>
            <div class="form-group">
              <label for="event-time">${S("time")}</label>
              <input id="event-time" name="time" type="time" required />
            </div>
          </div>

          <div class="form-group">
            <label for="event-location">${S("location")}</label>
            <input id="event-location" name="location" type="text" placeholder="e.g., Central Park Court 3" required />
          </div>

          <div class="form-group">
            <label>${S("participants")}</label>
            <div id="participants-list" class="participants-list"></div>
            <small class="hint">Kliknij nazwę użytkownika lub zdjęcie, aby dodać lub usunąć go z listy uczestnik\xf3w</small>
          </div>

          <div class="form-group">
            <label for="custom-participant-name">Add a non-registered participant (optional)</label>
            <div class="form-row">
              <input id="custom-participant-name" name="customParticipantName" type="text" placeholder="e.g. Alex" />
              <button class="button button-secondary" type="button" id="add-custom-participant-btn">Add guest</button>
            </div>
            <div id="custom-participants-list" class="participants-list"></div>
          </div>

          <div class="form-group">
            <label for="event-score-mode">Score mode</label>
            <select id="event-score-mode" name="eventScoreMode">
              <option value="normal">Normal match</option>
              <option value="single-user">Single-user event</option>
            </select>
          </div>

          <div id="score-inputs" class="form-group"></div>

          <div class="form-group">
            <label for="event-footage">${S("footage")}</label>
            <input id="event-footage" name="footage" type="url" placeholder="https://www.youtube.com/watch?v=..." />
            <small class="hint">YouTube links are embedded automatically.</small>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="event-games">${S("matchLabel")}</label>
              <input id="event-games" name="score" type="text" placeholder="e.g., Final, Semifinal" />
            </div>
          </div>

          <button class="button button-primary" type="submit">${S("postButton")}</button>
        </form>
      </section>
    </main>
  `,document.getElementById("logout-btn")?.addEventListener("click",async()=>{try{await (0,s.CI)(d)}catch(e){console.error(e)}el()}),document.getElementById("profile-btn")?.addEventListener("click",()=>{p="profile",P()}),document.getElementById("view-events-btn")?.addEventListener("click",()=>{p="view-events",_()}),H(v),Z(),document.getElementById("event-score-mode")?.addEventListener("change",()=>{F(er())}),document.getElementById("add-custom-participant-btn")?.addEventListener("click",()=>{let e=document.getElementById("custom-participant-name");if(!e)return;let t=e.value.trim();t&&(h=Array.from(new Set([...h,t])),e.value="",Z(),F(er()))});let t=document.getElementById("event-form");t?.addEventListener("submit",async e=>{e.preventDefault(),await Y()})}function H(e){let t=document.getElementById("participants-list");if(t){if(t.innerHTML=e.map(e=>`
    <button type="button" class="participant-chip" data-user-id="${e.id}" title="${$(e.email)}" aria-pressed="false">
      <img src="${$(e.picture)}" alt="${$(e.name)}" class="chip-avatar" loading="lazy" decoding="async" />
      <span class="chip-name">${$(e.name)}</span>
    </button>
  `).join(""),Array.from(t.querySelectorAll(".participant-chip")).forEach(e=>{e.addEventListener("click",()=>{let t=e.classList.toggle("selected");e.setAttribute("aria-pressed",String(t)),e.classList.add("chip-animate"),window.setTimeout(()=>e.classList.remove("chip-animate"),260),F(er())}),e.addEventListener("keydown",t=>{("Enter"===t.key||" "===t.key)&&(t.preventDefault(),e.click())})}),u){let e=t.querySelector(`.participant-chip[data-user-id="${u.id}"]`);e&&(e.classList.add("selected"),e.setAttribute("aria-pressed","true"))}F(er())}}function Z(){let e=document.getElementById("custom-participants-list");if(e){if(0===h.length){e.innerHTML="";return}e.innerHTML=h.map((e,t)=>`
    <button type="button" class="participant-chip custom-chip selected" data-user-id="${w(e,t)}" aria-pressed="true">
      <span class="chip-name">${$(e)} (guest)</span>
    </button>
  `).join("")}}function F(e){let t=document.getElementById("score-inputs");if(!t)return;let a=v.length?v:JSON.parse(localStorage.getItem("users")||"[]"),n=document.getElementById("event-score-mode")?.value||"normal";if(t.className="score-panel",t.innerHTML="",0===e.length){t.innerHTML=`<p class="hint">${"single-user"===n?"Select one participant to add a single-user stat line.":"Select participants to set results."}</p>`;return}if("single-user"===n){let n=e[0],i=a.find(e=>e.id===n),o=h.find((e,t)=>w(e,t)===n),s=i?$(i.name):$(o||n);t.innerHTML=`
      <label>Single-user stats for ${s}</label>
      <div class="single-user-stats-grid">
        <div class="single-user-stat-cell">
          <label class="participant-score-label" for="single-made">Made</label>
          <input id="single-made" class="score-input tiny" type="number" min="0" max="99" step="1" value="0" inputmode="numeric" />
        </div>
        <div class="single-user-stat-cell">
          <label class="participant-score-label" for="single-put-back">Put-back</label>
          <input id="single-put-back" class="score-input tiny" type="number" min="0" max="99" step="1" value="0" inputmode="numeric" />
        </div>
        <div class="single-user-stat-cell">
          <label class="participant-score-label" for="single-missed">Missed</label>
          <input id="single-missed" class="score-input tiny" type="number" min="0" max="99" step="1" value="0" inputmode="numeric" />
        </div>
      </div>
      <small class="hint">This format shows as: trafione / dobite / nietrafione.</small>
    `,["single-made","single-put-back","single-missed"].forEach(W);return}if(2===e.length){let n=a.find(t=>t.id===e[0]),i=a.find(t=>t.id===e[1]),o=h.find((t,a)=>w(t,a)===e[0]),s=h.find((t,a)=>w(t,a)===e[1]),r=n?$(n.name):$(o||e[0]),l=i?$(i.name):$(s||e[1]);t.innerHTML=`
      <label>Match result</label>
      <div class="score-inline compact">
        <span class="score-name">${r}</span>
        <input id="score-${e[0]}" class="score-input tiny" type="number" min="0" max="99" step="1" value="0" inputmode="numeric" />
        <span class="score-sep">:</span>
        <input id="score-${e[1]}" class="score-input tiny" type="number" min="0" max="99" step="1" value="0" inputmode="numeric" />
        <span class="score-name">${l}</span>
      </div>
      <div class="form-group">
        <label for="set-scores">Set scores (optional)</label>
        <input id="set-scores" name="setScores" type="text" placeholder="10-9 1-10 10-9 10-6" />
      </div>
      <small class="hint">Enter a short score (0–99). Click a participant chip to add or remove them.</small>
    `,W(`score-${e[0]}`),W(`score-${e[1]}`);return}let i=e.map(e=>{let t=a.find(t=>t.id===e),n=h.find((t,a)=>w(t,a)===e),i=t?$(t.name):$(n||e);return`
      <div class="participant-score-row">
        <label for="score-${e}" class="participant-score-label">${i}</label>
        <input id="score-${e}" class="score-input tiny" type="number" min="0" max="99" step="1" value="0" inputmode="numeric" />
      </div>
    `}).join("");t.innerHTML=`
    <label>Results</label>
    <div class="scores-list">
      ${i}
    </div>
    <small class="hint">Enter short numbers (0–99) for each participant.</small>
  `,e.forEach(e=>W(`score-${e}`))}function W(e){let t=document.getElementById(e);t&&(t.addEventListener("input",()=>{t.value=t.value.replace(/[^\d]/g,"");let e=parseInt(t.value||"0",10);isNaN(e)&&(e=0),e<0&&(e=0),e>99&&(e=99),t.value=String(e)}),t.addEventListener("blur",()=>{""===t.value&&(t.value="0")}))}async function Y(){if(y)return void alert("You must sign in to post events.");if(!u)return alert("Please sign in");let e=document.getElementById("event-date").value,t=document.getElementById("event-time").value,a=document.getElementById("event-location").value,n=document.getElementById("event-games").value,i=document.getElementById("event-footage").value,o=document.getElementById("event-score-mode")?.value||"normal",s=document.getElementById("set-scores")?.value.trim()||"",r=s?s.split(/\s+/).filter(Boolean):[],l=er();if(!e||!t||!a)return void alert("Please fill in all required fields");if(0===l.length)return void alert("Please select at least one participant");if("single-user"===o&&1!==l.length)return void alert("Single-user events require exactly one participant");0===v.length&&(v=await j());let c=l.map(e=>{let t=h.find((t,a)=>w(t,a)===e);if("single-user"===o){let a=parseInt(document.getElementById("single-made")?.value||"0",10),n={made:a,putBack:parseInt(document.getElementById("single-put-back")?.value||"0",10),missed:parseInt(document.getElementById("single-missed")?.value||"0",10)};if(t)return{id:e,name:t,email:"",singleUserStats:n};let i=v.find(t=>t.id===e);return i?{id:i.id,name:i.name,email:i.email,picture:i.picture,singleUserStats:n}:{id:e,name:e,email:"",singleUserStats:n}}let a=document.getElementById(`score-${e}`),n=a?parseInt(a.value,10):NaN,i=isNaN(n)?null:n;if(t)return{id:e,name:t,email:"",score:i};let s=v.find(t=>t.id===e);return s?{id:s.id,name:s.name,email:s.email,picture:s.picture,score:i}:{id:e,name:e,email:"",score:i}}),d=Object.fromEntries(Object.entries({id:"event-"+Date.now(),date:e,time:t,location:a,participants:c,games:n,footage:i||void 0,eventType:o,scoreSummary:"normal"===o&&c[0]?.score!=null&&c[1]?.score!=null?`${c[0].score}:${c[1].score}`:"",setScores:"normal"===o?r:[],singleUserStats:"single-user"===o?c[0]?.singleUserStats:void 0,createdBy:u.name,createdByUid:m?.uid,createdAt:new Date().toISOString()}).filter(e=>{let[,t]=e;return void 0!==t}));await z(d),h=[],alert("Event posted successfully!"),p="view-events",_()}async function _(){if(y){p="guest",await es();return}N(),0===g.length&&(g=await O(),localStorage.setItem("gameEvents",JSON.stringify(g))),Q(g)}function V(e){return`<button type="button" class="participant-link" data-user-id="${$(e.id)}">${$(e.name)}</button>`}function Q(e){let t=document.querySelector("#root");if(!t)return;let a=e.map(e=>{var t;let a=function(e){if(!e.participants||0===e.participants.length)return"—";if("single-user"===e.eventType){let t=e.participants[0],a=n({eventType:"single-user",singleUserStats:t.singleUserStats},"pl");return`<button type="button" class="participant-link" data-user-id="${$(t.id)}">${$(t.name)}</button>${a?` \xb7 ${$(a)}`:""}`}if(2===e.participants.length){let[t,a]=e.participants,i="number"==typeof t.score?String(t.score):"—",o="number"==typeof a.score?String(a.score):"—",s=n({eventType:"normal",scoreSummary:`${i}:${o}`,setScores:e.setScores},"pl");return`${V(t)} ${$(i)} : ${$(o)} ${V(a)}${s?`<div class="score-inline-stack"><span class="score-pill">${$(s)}</span></div>`:""}`}return e.participants.map(e=>`${V(e)}${"number"==typeof e.score?` ${$(String(e.score))}`:""}`).join(", ")}(e),i=!y&&m&&!!(t=m.uid)&&(e.createdByUid?e.createdByUid===t:!!e.createdBy&&e.createdBy===u?.name),o=y||!i?"":`
      <div class="event-actions">
        <button class="edit-event" type="button" data-id="${e.id}">${S("editEvent")}</button>
        <button class="delete-event" type="button" data-id="${e.id}">${S("deleteEvent")}</button>
      </div>
    `;return e.footage&&E(e.footage),`
      <div class="event-card" data-event-id="${e.id}">
        <div class="event-header">
          <h3>${$(e.location)}</h3>
          <p class="event-meta">${S("postedBy")} ${$(e.createdBy)}</p>
        </div>
        <div class="event-details">
          <p><strong>${S("date")}:</strong> ${new Date(e.date).toLocaleDateString()}</p>
          <p><strong>${S("time")}:</strong> ${$(e.time)}</p>
          <p><strong>${S("participants")}:</strong> ${a}</p>
          <p><strong>${S("match")}:</strong> ${$(e.games||"—")}</p>
        </div>
        ${o}
      </div>
    `}).join("");t.innerHTML=`
    <main class="page-shell">
      <nav class="top-nav">
        <div class="nav-brand">
          <span class="brand-mark">M</span>
          <span>Malpigaj</span>
        </div>
        <div class="nav-actions">
          ${y?`<button class="nav-btn" id="login-btn">${S("signIn")}</button>`:`<button class="nav-btn" id="profile-btn">${S("profile")}</button><button class="nav-btn" id="post-event-btn">${S("postEvent")}</button>`}
          <button class="nav-btn" id="view-events-btn">${S("events")}</button>
          ${y?"":`<button class="nav-btn logout" id="logout-btn">${S("logout")}</button>`}
        </div>
      </nav>

      <section class="events-section">
        <h2>${S("upcomingEvents")}</h2>
        <div class="events-list">
          ${a}
        </div>
      </section>

      <!-- Edit modal container -->
      <div id="edit-modal" class="modal" style="display:none;">
        <div class="modal-backdrop"></div>
        <div class="modal-content" role="dialog" aria-modal="true">
          <h3 id="modal-title">${S("editEvent")}</h3>
          <form id="edit-event-form" class="edit-event-form">
            <div class="form-group"><label for="edit-location">${S("location")}</label><input id="edit-location" name="location" type="text" /></div>
            <div class="form-group"><label for="edit-date">${S("date")}</label><input id="edit-date" name="date" type="date" /></div>
            <div class="form-group"><label for="edit-time">${S("time")}</label><input id="edit-time" name="time" type="time" /></div>
            <div class="form-group"><label for="edit-games">${S("matchLabel")}</label><input id="edit-games" name="games" type="text" /></div>
            <div class="form-group"><label for="edit-footage">${S("footage")}</label><input id="edit-footage" name="footage" type="url" /></div>
            <div class="modal-actions">
              <button type="submit" class="button button-primary">Save</button>
              <button type="button" id="edit-cancel" class="button">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  `,y?document.getElementById("login-btn")?.addEventListener("click",async()=>{y=!1,q(),x(),await k(),G()}):(document.getElementById("logout-btn")?.addEventListener("click",async()=>{try{await (0,s.CI)(d)}catch(e){console.error(e)}el()}),document.getElementById("profile-btn")?.addEventListener("click",()=>{p="profile",P()}),document.getElementById("post-event-btn")?.addEventListener("click",()=>{p="post-event",K()})),Array.from(document.querySelectorAll(".delete-event")).forEach(e=>{e.addEventListener("click",async t=>{t.stopPropagation();let a=e.getAttribute("data-id");await eo(a)})}),Array.from(document.querySelectorAll(".edit-event")).forEach(e=>{e.addEventListener("click",async t=>{t.stopPropagation();let a=e.getAttribute("data-id");await ea(a)})}),Array.from(document.querySelectorAll(".event-card")).forEach(e=>{e.addEventListener("click",()=>{let t=e.getAttribute("data-event-id");t&&ee(t)})}),Array.from(document.querySelectorAll(".participant-link")).forEach(e=>{e.addEventListener("click",t=>{t.stopPropagation();let a=e.getAttribute("data-user-id");a&&X(a)})})}async function X(e){p="user-page";let t=v.length?v:await j();t.length&&(v=t),g.length||(g=await O(),localStorage.setItem("gameEvents",JSON.stringify(g)));let a=t.find(t=>t.id===e),n=a?.name||g.find(t=>t.participants.some(t=>t.id===e))?.participants.find(t=>t.id===e)?.name||"User",i=g.filter(t=>t.participants.some(t=>t.id===e)),o=document.querySelector("#root");if(!o)return;let s=i.length?i.map(e=>`
        <button class="user-event-btn" type="button" data-event-id="${e.id}">
          <span>${$(e.location)}</span>
          <small>${new Date(e.date).toLocaleDateString()} \xb7 ${$(e.time)}</small>
        </button>
      `).join(""):'<p class="hint">No events found for this participant yet.</p>';o.innerHTML=`
    <main class="page-shell">
      <nav class="top-nav">
        <div class="nav-brand">
          <span class="brand-mark">M</span>
          <span>Malpigaj</span>
        </div>
        <div class="nav-actions">
          <button class="nav-btn" id="back-events-btn">${S("backToEvents")}</button>
        </div>
      </nav>

      <section class="hero-card user-page-card">
        <div class="profile-header">
          <div class="profile-avatar" style="display:flex;align-items:center;justify-content:center;background:rgba(14,165,233,0.16);color:#bae6fd;font-size:1.3rem;">${$((a?.name||n).slice(0,1).toUpperCase())}</div>
          <div>
            <h2>${$(a?.name||n)}</h2>
            <p class="profile-email">${$(a?.email||"")}</p>
          </div>
        </div>
        <div class="user-events-list">
          ${s}
        </div>
      </section>
    </main>
  `,document.getElementById("back-events-btn")?.addEventListener("click",()=>{p="view-events",_()}),Array.from(document.querySelectorAll(".user-event-btn")).forEach(e=>{e.addEventListener("click",()=>{let t=e.getAttribute("data-event-id");t&&ee(t)})})}async function ee(e){let t=g.find(t=>t.id===e);if(!t&&L()){let a=await (0,o.Jt)((0,o.KR)(c,`events/${e}`));t=A(e,a.val())}if(!t){alert("Event not found"),p="view-events",_();return}let a=(()=>{if(!t.participants||0===t.participants.length)return"—";if("single-user"===t.eventType){let e=t.participants[0],a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"pl",a=e.singleUserStats;return a?`
    <div class="score-block">
      <div class="score-block-labels">
        <span>${"pl"===t?"trafione":"made"}</span>
        <span>${"pl"===t?"dobite":"put-back"}</span>
        <span>${"pl"===t?"nietrafione":"missed"}</span>
      </div>
      <div class="score-block-values">
        <span>${a.made}</span>
        <span>${a.putBack}</span>
        <span>${a.missed}</span>
      </div>
    </div>
  `:""}({eventType:"single-user",singleUserStats:e.singleUserStats},"pl");return`${V(e)}${a?`<div class="score-inline-stack">${a}</div>`:""}`}if(2===t.participants.length){let[e,a]=t.participants,i="number"==typeof e.score?String(e.score):"—",o="number"==typeof a.score?String(a.score):"—",s=n({eventType:"normal",scoreSummary:`${i}:${o}`,setScores:t.setScores},"pl");return`${V(e)} ${$(i)} : ${$(o)} ${V(a)}${s?`<div class="score-inline-stack"><span class="score-pill">${$(s)}</span></div>`:""}`}return t.participants.map(e=>`${V(e)}${"number"==typeof e.score?` ${$(String(e.score))}`:""}`).join(", ")})(),i=!y&&m&&(t.createdByUid?t.createdByUid===m.uid:t.createdBy===u?.name),s=y||!i?"":`
    <div class="event-actions">
      <button class="button button-secondary" type="button" id="detail-edit-btn">Edit</button>
      <button class="button button-secondary" type="button" id="detail-delete-btn">Delete</button>
    </div>
  `,r=document.querySelector("#root");r&&(p="event-detail",t.id,r.innerHTML=`
    <main class="page-shell">
      <nav class="top-nav">
        <div class="nav-brand">
          <span class="brand-mark">M</span>
          <span>Malpigaj</span>
        </div>
        <div class="nav-actions">
          <button class="nav-btn" id="back-events-btn">${S("backToEvents")}</button>
          ${y?"":`<button class="nav-btn" id="detail-profile-btn">${S("profile")}</button>`}
        </div>
      </nav>
      <section class="hero-card event-detail-card">
        <div class="event-header">
          <h2>${$(t.location)}</h2>
          <p class="event-meta">Posted by ${$(t.createdBy)}</p>
        </div>
        <div class="event-details">
          <p><strong>Date:</strong> ${new Date(t.date).toLocaleDateString()}</p>
          <p><strong>Time:</strong> ${$(t.time)}</p>
          <p><strong>Participants:</strong> ${a}</p>
          <p><strong>Match:</strong> ${$(t.games||"—")}</p>
          ${t.footage?`<div class="media-block">${E(t.footage)||""}</div>`:""}
        </div>
        ${s}
      </section>
    </main>
  `,document.getElementById("back-events-btn")?.addEventListener("click",()=>{p="view-events",_()}),document.getElementById("detail-profile-btn")?.addEventListener("click",()=>{p="profile",P()}),Array.from(document.querySelectorAll(".participant-link")).forEach(e=>{e.addEventListener("click",t=>{t.stopPropagation();let a=e.getAttribute("data-user-id");a&&X(a)})}),i&&(document.getElementById("detail-edit-btn")?.addEventListener("click",()=>void ea(t.id)),document.getElementById("detail-delete-btn")?.addEventListener("click",()=>void eo(t.id))))}(0,s.hg)(d,async e=>{if(m=e,e){if(!u||u.id!==e.uid){let t={id:e.uid,name:e.displayName||"Unknown",email:e.email||"",picture:e.photoURL||`https://ui-avatars.com/api/?name=${encodeURIComponent(e.displayName||"User")}`,loginMethod:"google",loginTime:new Date().toISOString()};u=t,I(t),await T(t)}y=!1,R(),N()}else u=null,B(),x(),q()});let et=null;async function ea(e){if(y||!m)return alert("Sign in to edit events");if(!L())return alert("Database not available");let t=(await (0,o.Jt)((0,o.KR)(c,`events/${e}`))).val();if(!t)return alert("Event not found");if(!(t.createdByUid?t.createdByUid===m.uid:t.createdBy===u?.name))return alert("You are not allowed to edit this event");et=e;let a=document.getElementById("edit-modal");if(!a)return;document.getElementById("edit-location").value=t.location||"",document.getElementById("edit-date").value=t.date||"",document.getElementById("edit-time").value=t.time||"",document.getElementById("edit-games").value=t.games||"",document.getElementById("edit-footage").value=t.footage||"",a.style.display="block";let n=document.getElementById("edit-cancel");n?.addEventListener("click",en);let i=document.getElementById("edit-event-form");i?.addEventListener("submit",ei)}function en(){let e=document.getElementById("edit-modal");if(!e)return;e.style.display="none",et=null;let t=document.getElementById("edit-event-form");t?.removeEventListener("submit",ei)}async function ei(e){if(e.preventDefault(),!et)return;let t=document.getElementById("edit-location").value,a=document.getElementById("edit-date").value,n=document.getElementById("edit-time").value,i=document.getElementById("edit-games").value,o=document.getElementById("edit-footage").value;t&&a&&n?(await M(et,{location:t,date:a,time:n,games:i,footage:o||void 0}),alert("Event updated"),en()):alert("Please fill required fields")}async function eo(e){if(y)return alert("Sign in to delete events");if(!m)return alert("Only authenticated users can delete events");if(!L())return alert("Database not available");let t=(await (0,o.Jt)((0,o.KR)(c,`events/${e}`))).val();return t?(t.createdByUid?t.createdByUid===m.uid:t.createdBy===u?.name)?void(confirm("Are you sure you want to delete this event?")&&(await D(e),alert("Event deleted"))):alert("You are not allowed to delete this event"):alert("Event not found")}async function es(){y=!0,p="guest",0===g.length&&(g=await O(),localStorage.setItem("gameEvents",JSON.stringify(g)));let e=document.querySelector("#root");if(!e)return;let t=g.map(e=>{let t=(()=>{if(!e.participants||0===e.participants.length)return"—";if("single-user"===e.eventType){let t=e.participants[0],a=n({eventType:"single-user",singleUserStats:t.singleUserStats},"pl");return`${$(t.name)}${a?` \xb7 ${$(a)}`:""}`}if(2===e.participants.length){let[t,a]=e.participants,i="number"==typeof t.score?String(t.score):"—",o="number"==typeof a.score?String(a.score):"—",s=n({eventType:"normal",scoreSummary:`${i}:${o}`,setScores:e.setScores},"pl");return`${$(t.name)} ${$(i)} : ${$(o)} ${$(a.name)}${s&&s!==`${i}:${o}`?` \xb7 ${$(s)}`:""}`}return e.participants.map(e=>`${$(e.name)}${"number"==typeof e.score?` ${$(String(e.score))}`:""}`).join(", ")})();return`
      <div class="event-card" data-event-id="${e.id}">
        <div class="event-header">
          <h3>${$(e.location)}</h3>
          <p class="event-meta">${S("postedBy")} ${$(e.createdBy)}</p>
        </div>
        <div class="event-details">
          <p><strong>${S("date")}:</strong> ${new Date(e.date).toLocaleDateString()}</p>
          <p><strong>${S("time")}:</strong> ${$(e.time)}</p>
          <p><strong>${S("participants")}:</strong> ${t}</p>
          <p><strong>${S("match")}:</strong> ${$(e.games||"—")}</p>
        </div>
      </div>
    `}).join("");e.innerHTML=`
    <main class="page-shell">
      <nav class="top-nav">
        <div class="nav-brand">
          <span class="brand-mark">M</span>
          <span>Malpigaj (Guest)</span>
        </div>
        <div class="nav-actions">
          <button class="nav-btn" id="login-btn">${S("signIn")}</button>
        </div>
      </nav>

      <section class="events-section">
        <h2>${S("guestViewTitle")}</h2>
        <div class="events-list">
          ${t}
        </div>
      </section>
    </main>
  `,document.getElementById("login-btn")?.addEventListener("click",async()=>{y=!1,q(),x(),await k(),G()})}function er(){let e=document.getElementById("participants-list"),t=document.getElementById("custom-participants-list"),a=[];if(e){let t=Array.from(e.querySelectorAll(".participant-chip.selected"));a.push(...t.map(e=>e.getAttribute("data-user-id")||"").filter(Boolean))}if(t){let e=Array.from(t.querySelectorAll(".participant-chip.selected"));a.push(...e.map(e=>e.getAttribute("data-user-id")||"").filter(Boolean))}return a}function el(){B(),u=null,m=null,p="login",y=!1,window.google?.accounts.id.disableAutoSelect?.(),x(),q(),G()}(async function(){let e=localStorage.getItem("userInfo");if(e)try{u=JSON.parse(e),v=await j(),g=await O(),localStorage.setItem("users",JSON.stringify(v)),localStorage.setItem("gameEvents",JSON.stringify(g)),p="profile",P();return}catch(e){console.error("Failed to parse user info:",e)}await k(),G()})(),window.__malpigaj={db:c,usersCache:v,eventsCache:g}}},o={};function s(e){var t=o[e];if(void 0!==t)return t.exports;var a=o[e]={exports:{}};return i[e](a,a.exports,s),a.exports}s.m=i,s.d=(e,t,a)=>{var n=(t,a)=>{for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,[a]:t[n]})};n(t,"get"),n(a,"value")},s.g=(()=>{if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}})(),s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e=[],s.O=(t,a,n,i)=>{if(a){i=i||0;for(var o=e.length;o>0&&e[o-1][2]>i;o--)e[o]=e[o-1];e[o]=[a,n,i];return}for(var r=1/0,o=0;o<e.length;o++){for(var[a,n,i]=e[o],l=!0,c=0;c<a.length;c++)(!1&i||r>=i)&&Object.keys(s.O).every(e=>s.O[e](a[c]))?a.splice(c--,1):(l=!1,i<r&&(r=i));if(l){e.splice(o--,1);var d=n();void 0!==d&&(t=d)}}return t},t={410:0},s.O.j=e=>0===t[e],a=(e,a)=>{var n,i,[o,r,l]=a,c=0;if(o.some(e=>0!==t[e])){for(n in r)s.o(r,n)&&(s.m[n]=r[n]);if(l)var d=l(s)}for(e&&e(a);c<o.length;c++)i=o[c],s.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return s.O(d)},(n=self.rspackChunkmalpigaj=self.rspackChunkmalpigaj||[]).forEach(a.bind(null,0)),n.push=a.bind(null,n.push.bind(n));var r=s.O(void 0,["657"],()=>s(3));r=s.O(r)})();