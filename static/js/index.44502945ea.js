(()=>{"use strict";var e,t,n,a,i={3(e,t,n){function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"pl";if("single-user"===e.eventType){let n=e.singleUserStats;return n?`${"pl"===t?"trafione":"made"} ${n.made} \xb7 ${"pl"===t?"dobite":"put-back"} ${n.putBack} \xb7 ${"pl"===t?"nietrafione":"missed"} ${n.missed}`:""}let n=[e.scoreSummary?.trim()].filter(Boolean);return e.setScores?.length&&n.push(...e.setScores.filter(Boolean)),n.join(" · ")}var i=n(223),o=n(137),l=n(832);let r="602620275958-3316q373jdub1btf86a8m4tcf5ov4uvd.apps.googleusercontent.com",s=(0,i.Dk)().length?(0,i.Dk)()[0]:(0,i.Wp)({apiKey:"AIzaSyAsZdgR30zAkbh3krAL3C4BoEhLm-rGbCY",authDomain:"malpigaj-a8ce1.firebaseapp.com",projectId:"malpigaj-a8ce1",storageBucket:"malpigaj-a8ce1.firebasestorage.app",messagingSenderId:"602620275958",appId:"1:602620275958:web:e96a29365b6f7c547f10d7",measurementId:"G-ZZSQBM6VGG",databaseURL:"https://malpigaj-a8ce1-default-rtdb.firebaseio.com/"}),c=null;try{c=(0,o.C3)(s)}catch(e){console.error("Realtime Database initialization failed:",e)}let d=(0,l.xI)(s),u=null,m=null,p="login",v=null,g=[],f=[],b=!1,y=!1,h=!1,$=[],w="pl";function E(e){return e?String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"):""}function S(e,t){let n=e.toLowerCase().trim().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")||`participant-${t}`;return`custom-${n}-${t}`}function I(e){if(!e)return null;let t=e.trim();if(!t)return null;let n=t.replace(/^https?:\/\//i,"https://"),a=E(n),i=n.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/|live\/)|youtu\.be\/|youtube-nocookie\.com\/embed\/)([A-Za-z0-9_-]{11})/i);if(i)return`<div class="video-embed"><iframe src="https://www.youtube-nocookie.com/embed/${i[1]}" title="YouTube video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe></div>`;let o=n.match(/vimeo\.com\/(\d+)/i);if(o)return`<div class="video-embed"><iframe src="https://player.vimeo.com/video/${o[1]}" title="Vimeo video" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen loading="lazy"></iframe></div>`;let l=n.match(/dailymotion\.com\/video\/([A-Za-z0-9]+)/i);if(l)return`<div class="video-embed"><iframe src="https://www.dailymotion.com/embed/video/${l[1]}" title="Dailymotion video" allowfullscreen loading="lazy"></iframe></div>`;let r=n.match(/streamable\.com\/(\w+)/i);if(r)return`<div class="video-embed"><iframe src="https://streamable.com/o/${r[1]}" title="Streamable video" allowfullscreen loading="lazy"></iframe></div>`;let s=n.match(/loom\.com\/share\/([A-Za-z0-9]+)/i);if(s)return`<div class="video-embed"><iframe src="https://www.loom.com/embed/${s[1]}" title="Loom video" allowfullscreen loading="lazy"></iframe></div>`;let c=n.match(/(?:wistia\.com|wi\.st)\/medias\/([A-Za-z0-9]+)/i);if(c)return`<div class="video-embed"><iframe src="https://fast.wistia.net/embed/iframe/${c[1]}" title="Wistia video" allowfullscreen loading="lazy"></iframe></div>`;let d=n.match(/twitch\.tv\/videos\/(\d+)/i);if(d)return`<div class="video-embed"><iframe src="https://player.twitch.tv/?video=v${d[1]}&parent=${window.location.hostname}" title="Twitch video" allowfullscreen loading="lazy"></iframe></div>`;let u=n.match(/\.(mp4|webm|ogg)(\?.*)?$/i);return u?`<video class="video-embed video-file" controls preload="metadata"><source src="${a}" type="video/${u[1].toLowerCase()}"></video>`:`<div class="video-embed"><div class="footage-fallback"><a href="${a}" target="_blank" rel="noreferrer">Open footage in a new tab</a></div></div>`}function B(e){return({welcomeBack:{pl:"Witaj ponownie",en:"Welcome back"},signInToContinue:{pl:"Zaloguj się, aby kontynuować",en:"Sign in to continue"},description:{pl:"Użyj konta Google lub utwórz nowe konto, aby zacząć szybko.",en:"Use your Google account or create a new account to get started quickly."},createAccount:{pl:"Utwórz konto",en:"Create an account"},continueAsGuest:{pl:"Kontynuuj jako gość",en:"Continue as guest"},name:{pl:"Imię",en:"Name"},email:{pl:"Email",en:"Email"},password:{pl:"Hasło",en:"Password"},register:{pl:"Zarejestruj",en:"Register"},profile:{pl:"Profil",en:"Profile"},postEvent:{pl:"Dodaj wydarzenie",en:"Post Event"},events:{pl:"Wydarzenia",en:"Events"},logout:{pl:"Wyloguj",en:"Logout"},signIn:{pl:"Zaloguj",en:"Sign in"},createEvent:{pl:"Dodaj nowe wydarzenie",en:"Post a New Event"},date:{pl:"Data",en:"Date"},time:{pl:"Godzina",en:"Time"},location:{pl:"Lokalizacja",en:"Location"},participants:{pl:"Uczestnicy",en:"Participants"},matchLabel:{pl:"Etykieta meczu (opcjonalnie)",en:"Match label (optional)"},footage:{pl:"Link do materiału (opcjonalnie)",en:"Footage link (optional)"},postButton:{pl:"Dodaj wydarzenie",en:"Post Event"},upcomingEvents:{pl:"Nadchodzące wydarzenia",en:"Upcoming Events"},guestViewTitle:{pl:"Nadchodzące wydarzenia (gość)",en:"Upcoming Events (Guest)"},editEvent:{pl:"Edytuj",en:"Edit"},deleteEvent:{pl:"Usuń",en:"Delete"},postedBy:{pl:"Dodane przez",en:"Posted by"},match:{pl:"Mecz",en:"Match"},backToEvents:{pl:"Powrót do wydarzeń",en:"Back to events"},language:{pl:"Język",en:"Language"},switchToEnglish:{pl:"EN|PL",en:"EN|PL"}})[e]?.[w]||e}function k(){w="pl"===w?"en":"pl","login"===p?K():"profile"===p?H():"post-event"===p?Z():"view-events"===p?X():("guest"===p||"event-detail"===p)&&("guest"===p?er():v&&et(v))}function L(){return new Promise(e=>{if(window.google)return void e();let t=0,n=setInterval(()=>{window.google&&(clearInterval(n),e()),++t>50&&(clearInterval(n),console.error("Google API failed to load after attempts"),e())},100)})}function A(e){localStorage.setItem("userInfo",JSON.stringify(e))}function T(){localStorage.removeItem("userInfo")}function j(){return!!c||(console.warn("Realtime DB not available; skipping DB operation."),!1)}function U(e,t){let n=t||{};return{...n,id:e||n.id||"",date:n.date||"",time:n.time||"",location:n.location||"",participants:n.participants||[],games:n.games||"",createdBy:n.createdBy||"",createdByUid:n.createdByUid||"",createdAt:n.createdAt||new Date().toISOString()}}async function z(){if(!j())return[];try{let e=(await (0,o.Jt)((0,o.KR)(c,"users"))).val();return e?Object.keys(e).map(t=>e[t]):[]}catch(e){return console.error("fetchAllUsersOnce error",e),[]}}async function D(e){if(j())try{await (0,o.hZ)((0,o.KR)(c,`users/${e.id}`),e)}catch(e){console.error("saveUserToDB error",e)}}async function M(e){if(j())try{await (0,o.TF)((0,o.KR)(c,`users/${e}`))}catch(e){console.error("removeUserFromDB error",e)}}async function O(){if(!j())return[];try{let e=(await (0,o.Jt)((0,o.KR)(c,"events"))).val();return e?Object.keys(e).map(t=>U(t,e[t])):[]}catch(e){return console.error("fetchAllEventsOnce error",e),[]}}async function P(e){if(j())try{let t=(0,o.VC)((0,o.KR)(c,"events")),n={...e,id:t.key||e.id};await (0,o.hZ)(t,n)}catch(e){console.error("pushEventToDB error",e)}}async function C(e,t){if(j())try{await (0,o.yo)((0,o.KR)(c,`events/${e}`),t)}catch(e){console.error("updateEventInDB error",e)}}async function N(e){if(j())try{await (0,o.TF)((0,o.KR)(c,`events/${e}`))}catch(e){console.error("removeEventFromDB error",e)}}async function R(){if(!j())return{};try{return(await (0,o.Jt)((0,o.KR)(c,"meta/admins"))).val()||{}}catch(e){return console.error("fetchAdmins error",e),{}}}function x(e){!j()||b||((0,o.Zy)((0,o.KR)(c,"users"),t=>{let n=t.val();g=n?Object.keys(n).map(e=>n[e]):[],localStorage.setItem("users",JSON.stringify(g)),e&&e(g),"post-event"===p&&W(g)}),b=!0)}function G(){!j()||b&&((0,o.AU)((0,o.KR)(c,"users")),b=!1)}function q(e){!j()||y||((0,o.Zy)((0,o.KR)(c,"events"),t=>{let n=t.val();(f=n?Object.keys(n).map(e=>U(e,n[e])):[]).sort((e,t)=>(t.createdAt||"").localeCompare(e.createdAt||"")),localStorage.setItem("gameEvents",JSON.stringify(f)),e&&e(f),("view-events"===p||"guest"===p)&&ee(f)}),y=!0)}function J(){!j()||y&&((0,o.AU)((0,o.KR)(c,"events")),y=!1)}function K(){let e,t,n;h=!1;let a=document.querySelector("#root");a&&(a.innerHTML=`
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
          <p class="eyebrow">${B("welcomeBack")}</p>
          <h2>${B("signInToContinue")}</h2>
          <p class="description">${B("description")}</p>

          <div class="auth-actions">
            <div id="google-signin-button"></div>
            <span class="divider">or</span>
            <button class="button button-secondary" id="toggle-register" type="button">${B("createAccount")}</button>
            <button class="button button-ghost" id="guest-btn" type="button">${B("continueAsGuest")}</button>
          </div>
        </div>

        <form class="auth-form" id="register-form" novalidate style="display: none;">
          <div class="form-group">
            <label for="name">${B("name")}</label>
            <input id="name" name="name" type="text" autocomplete="name" placeholder="Your full name" />
          </div>
          <div class="form-group">
            <label for="email">${B("email")}</label>
            <input id="email" name="email" type="email" autocomplete="email" placeholder="you@example.com" />
          </div>
          <div class="form-group">
            <label for="password">${B("password")}</label>
            <input id="password" name="password" type="password" autocomplete="new-password" placeholder="Create a password" />
          </div>
          <button class="button button-primary" type="submit">${B("register")}</button>
        </form>
      </section>
    </main>
  `,e=document.getElementById("toggle-register"),t=document.getElementById("register-form"),n=document.querySelector(".auth-actions"),e?.addEventListener("click",()=>{t?.style.display==="none"?(t.style.display="grid",n&&(n.style.display="none")):(t&&(t.style.display="none"),n&&(n.style.display="grid"))}),t?.addEventListener("submit",async e=>{e.preventDefault();let t=document.getElementById("name")?.value,n=document.getElementById("email")?.value;if(t&&n){let e={id:"manual-"+Date.now(),name:t,email:n,picture:`https://ui-avatars.com/api/?name=${encodeURIComponent(t)}`,loginMethod:"manual",loginTime:new Date().toISOString()};A(e),await D(e),u=e,g=await z(),localStorage.setItem("users",JSON.stringify(g)),p="profile",H()}}),function(){let e=document.getElementById("google-signin-button");if(!e)return console.error("Google Sign-In button container not found");if(!window.google)return console.error("Google object not available");try{console.info("GIS debug:",{clientId:r,origin:window.location.origin,host:window.location.host})}catch(e){console.info("GIS debug: unable to read window location",e)}window.google.accounts.id.initialize({client_id:r,callback:async e=>{console.log("GIS callback received credential (truncated):",String(e.credential).slice(0,20)+"...");let t=function(e){try{let t=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),n=decodeURIComponent(atob(t).split("").map(e=>"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)).join(""));return JSON.parse(n)}catch(e){return console.error("Failed to decode JWT:",e),null}}(e.credential);if(!t){console.error("Failed to decode token from GIS response"),alert("Sign-in failed: invalid token received from Google.");return}let n=l.HF.credential(e.credential);try{let e=await (0,l.eN)(d,n);m=e.user;let a={id:e.user.uid,name:e.user.displayName||t.name,email:e.user.email||t.email,picture:e.user.photoURL||t.picture||`https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}`,loginMethod:"google",loginTime:new Date().toISOString()};u=a,A(a),await D(a),h=!1,x(),q(),p="profile",H()}catch(n){console.error("Firebase signInWithCredential failed",n);let e=n?.code||n?.message||"";if(String(e).includes("auth/configuration-not-found")||String(e).includes("auth/invalid-credential")||String(e).includes("auth/operation-not-allowed")){console.warn("Auth configuration issue detected. Attempting popup fallback."),alert("Automatic Google sign-in failed due to configuration. Trying popup sign-in as a fallback.");try{let e=new l.HF,n=await (0,l.df)(d,e);m=n.user;let a={id:n.user.uid,name:n.user.displayName||t.name,email:n.user.email||t.email,picture:n.user.photoURL||t.picture||`https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}`,loginMethod:"google",loginTime:new Date().toISOString()};u=a,A(a),await D(a),h=!1,x(),q(),p="profile",H(),console.log("Popup sign-in succeeded as fallback.")}catch(e){console.error("Popup fallback sign-in failed",e),alert("Sign-in failed. Check Firebase Google provider configuration and browser COOP/COEP headers.")}}else alert("Sign-in failed. See console for details.")}}});try{window.google.accounts.id.renderButton(e,{theme:"outline",size:"large",text:"signin_with"})}catch(e){console.warn("Google renderButton failed. Check GIS client origin and configuration.",e)}}(),document.getElementById("toggle-lang-btn")?.addEventListener("click",k),document.getElementById("guest-btn")?.addEventListener("click",async()=>{h=!0,u=null,m=null,p="guest",q(),x(),await er()}))}async function H(){if(!u)return K();x(),q();let e=await R(),t=!!m&&!!e[m.uid],n=document.querySelector("#root");n&&(n.innerHTML=`
    <main class="page-shell">
      <nav class="top-nav">
        <div class="nav-brand">
          <span class="brand-mark">M</span>
          <span>Malpigaj</span>
        </div>
        <div class="nav-actions">
          <button class="nav-btn" id="profile-btn">Profile</button>
          <button class="nav-btn" id="post-event-btn">Post Event</button>
          <button class="nav-btn" id="view-events-btn">Events</button>
          <button class="nav-btn logout" id="logout-btn">Logout</button>
        </div>
      </nav>

      <section class="hero-card profile-card">
        <div class="profile-header">
          <img src="${E(u.picture)}" alt="${E(u.name)}" class="profile-avatar" />
          <div>
            <h1>Welcome, ${E(u.name)}!</h1>
            <p class="profile-email">${E(u.email)}</p>
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
  `,document.getElementById("logout-btn")?.addEventListener("click",async()=>{try{await (0,l.CI)(d)}catch(e){console.error("signOut error",e)}ec()}),document.getElementById("post-event-btn")?.addEventListener("click",()=>{p="post-event",Z()}),document.getElementById("view-events-btn")?.addEventListener("click",()=>{p="view-events",X()}),document.getElementById("profile-btn")?.addEventListener("click",()=>{p="profile",H()}),t&&F())}async function F(){let e=document.getElementById("admin-users-list");e&&(0===g.length&&(g=await z()),e.innerHTML=g.map(e=>`
    <div class="admin-user-row" data-user-id="${e.id}">
      <img src="${E(e.picture)}" alt="${E(e.name)}" class="chip-avatar" />
      <div class="admin-user-info">
        <div class="admin-user-name">${E(e.name)}</div>
        <div class="admin-user-email">${E(e.email)}</div>
      </div>
      <div class="admin-user-actions">
        <button class="admin-delete-user" data-id="${e.id}">Delete</button>
      </div>
    </div>
  `).join(""),Array.from(e.querySelectorAll(".admin-delete-user")).forEach(e=>{e.addEventListener("click",async()=>{let t=e.getAttribute("data-id");if(confirm("Delete user and remove from events?")){if(await M(t),j()){let e=(await (0,o.Jt)((0,o.KR)(c,"events"))).val();if(e)for(let n of Object.keys(e)){let a=e[n],i=a.participants.filter(e=>e.id!==t);i.length!==a.participants.length&&await (0,o.yo)((0,o.KR)(c,`events/${n}`),{participants:i})}}alert("User removed")}})}))}async function Z(){if(h){alert("You must sign in to post events."),p="guest",await er();return}if(!u)return K();0===g.length&&(g=await z(),localStorage.setItem("users",JSON.stringify(g))),x();let e=document.querySelector("#root");if(!e)return;e.innerHTML=`
    <main class="page-shell">
      <nav class="top-nav">
        <div class="nav-brand">
          <span class="brand-mark">M</span>
          <span>Malpigaj</span>
        </div>
        <div class="nav-actions">
          <button class="nav-btn" id="toggle-lang-btn">${B("switchToEnglish")}</button>
          <button class="nav-btn" id="profile-btn">${B("profile")}</button>
          <button class="nav-btn" id="post-event-btn">${B("postEvent")}</button>
          <button class="nav-btn" id="view-events-btn">${B("events")}</button>
          <button class="nav-btn logout" id="logout-btn">${B("logout")}</button>
        </div>
      </nav>

      <section class="hero-card event-form-card">
        <h2>${B("createEvent")}</h2>
        
        <form id="event-form" class="event-form" novalidate>
          <div class="form-row">
            <div class="form-group">
              <label for="event-date">${B("date")}</label>
              <input id="event-date" name="date" type="date" required />
            </div>
            <div class="form-group">
              <label for="event-time">${B("time")}</label>
              <input id="event-time" name="time" type="time" required />
            </div>
          </div>

          <div class="form-group">
            <label for="event-location">${B("location")}</label>
            <input id="event-location" name="location" type="text" placeholder="e.g., Central Park Court 3" required />
          </div>

          <div class="form-group">
            <label>${B("participants")}</label>
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
            <label for="event-footage">${B("footage")}</label>
            <input id="event-footage" name="footage" type="url" placeholder="https://www.youtube.com/watch?v=..." />
            <small class="hint">YouTube links are embedded automatically.</small>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="event-games">${B("matchLabel")}</label>
              <input id="event-games" name="score" type="text" placeholder="e.g., Final, Semifinal" />
            </div>
          </div>

          <button class="button button-primary" type="submit">${B("postButton")}</button>
        </form>
      </section>
    </main>
  `,document.getElementById("toggle-lang-btn")?.addEventListener("click",k),document.getElementById("toggle-lang-btn")?.addEventListener("click",k),document.getElementById("logout-btn")?.addEventListener("click",async()=>{try{await (0,l.CI)(d)}catch(e){console.error(e)}ec()}),document.getElementById("profile-btn")?.addEventListener("click",()=>{p="profile",H()}),document.getElementById("view-events-btn")?.addEventListener("click",()=>{p="view-events",X()}),W(g),Y(),document.getElementById("event-score-mode")?.addEventListener("change",()=>{_(es())}),document.getElementById("add-custom-participant-btn")?.addEventListener("click",()=>{let e=document.getElementById("custom-participant-name"),t=e?.value.trim();t&&($=Array.from(new Set([...$,t])),e.value="",Y(),_(es()))});let t=document.getElementById("event-form");t?.addEventListener("submit",async e=>{e.preventDefault(),await Q()})}function W(e){let t=document.getElementById("participants-list");if(t){if(t.innerHTML=e.map(e=>`
    <button type="button" class="participant-chip" data-user-id="${e.id}" title="${E(e.email)}" aria-pressed="false">
      <img src="${E(e.picture)}" alt="${E(e.name)}" class="chip-avatar" loading="lazy" decoding="async" />
      <span class="chip-name">${E(e.name)}</span>
    </button>
  `).join(""),Array.from(t.querySelectorAll(".participant-chip")).forEach(e=>{e.addEventListener("click",()=>{let t=e.classList.toggle("selected");e.setAttribute("aria-pressed",String(t)),e.classList.add("chip-animate"),window.setTimeout(()=>e.classList.remove("chip-animate"),260),_(es())}),e.addEventListener("keydown",t=>{("Enter"===t.key||" "===t.key)&&(t.preventDefault(),e.click())})}),u){let e=t.querySelector(`.participant-chip[data-user-id="${u.id}"]`);e&&(e.classList.add("selected"),e.setAttribute("aria-pressed","true"))}_(es())}}function Y(){let e=document.getElementById("custom-participants-list");if(e){if(0===$.length){e.innerHTML="";return}e.innerHTML=$.map((e,t)=>`
    <button type="button" class="participant-chip custom-chip selected" data-user-id="${S(e,t)}" aria-pressed="true">
      <span class="chip-name">${E(e)} (guest)</span>
    </button>
  `).join("")}}function _(e){let t=document.getElementById("score-inputs");if(!t)return;let n=g.length?g:JSON.parse(localStorage.getItem("users")||"[]"),a=document.getElementById("event-score-mode")?.value||"normal";if(t.className="score-panel",t.innerHTML="",0===e.length){t.innerHTML=`<p class="hint">${"single-user"===a?"Select one participant to add a single-user stat line.":"Select participants to set results."}</p>`;return}if("single-user"===a){let a=e[0],i=n.find(e=>e.id===a),o=$.find((e,t)=>S(e,t)===a),l=i?E(i.name):E(o||a);t.innerHTML=`
      <label>Single-user stats for ${l}</label>
      <div class="score-inline compact">
        <label class="participant-score-label" for="single-made">Made</label>
        <input id="single-made" class="score-input tiny" type="number" min="0" max="99" step="1" value="0" inputmode="numeric" />
        <label class="participant-score-label" for="single-put-back">Put-back</label>
        <input id="single-put-back" class="score-input tiny" type="number" min="0" max="99" step="1" value="0" inputmode="numeric" />
        <label class="participant-score-label" for="single-missed">Missed</label>
        <input id="single-missed" class="score-input tiny" type="number" min="0" max="99" step="1" value="0" inputmode="numeric" />
      </div>
      <small class="hint">This format shows as: trafione / dobite / nietrafione.</small>
    `,["single-made","single-put-back","single-missed"].forEach(V);return}if(2===e.length){let a=n.find(t=>t.id===e[0]),i=n.find(t=>t.id===e[1]),o=$.find((t,n)=>S(t,n)===e[0]),l=$.find((t,n)=>S(t,n)===e[1]),r=a?E(a.name):E(o||e[0]),s=i?E(i.name):E(l||e[1]);t.innerHTML=`
      <label>Match result</label>
      <div class="score-inline compact">
        <span class="score-name">${r}</span>
        <input id="score-${e[0]}" class="score-input tiny" type="number" min="0" max="99" step="1" value="0" inputmode="numeric" />
        <span class="score-sep">:</span>
        <input id="score-${e[1]}" class="score-input tiny" type="number" min="0" max="99" step="1" value="0" inputmode="numeric" />
        <span class="score-name">${s}</span>
      </div>
      <div class="form-group">
        <label for="set-scores">Set scores (optional)</label>
        <input id="set-scores" name="setScores" type="text" placeholder="10-9 1-10 10-9 10-6" />
      </div>
      <small class="hint">Enter a short score (0–99). Click a participant chip to add or remove them.</small>
    `,V(`score-${e[0]}`),V(`score-${e[1]}`);return}let i=e.map(e=>{let t=n.find(t=>t.id===e),a=$.find((t,n)=>S(t,n)===e),i=t?E(t.name):E(a||e);return`
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
  `,e.forEach(e=>V(`score-${e}`))}function V(e){let t=document.getElementById(e);t&&(t.addEventListener("input",()=>{t.value=t.value.replace(/[^\d]/g,"");let e=parseInt(t.value||"0",10);isNaN(e)&&(e=0),e<0&&(e=0),e>99&&(e=99),t.value=String(e)}),t.addEventListener("blur",()=>{""===t.value&&(t.value="0")}))}async function Q(){if(h)return void alert("You must sign in to post events.");if(!u)return alert("Please sign in");let e=document.getElementById("event-date").value,t=document.getElementById("event-time").value,n=document.getElementById("event-location").value,a=document.getElementById("event-games").value,i=document.getElementById("event-footage").value,o=document.getElementById("event-score-mode")?.value||"normal",l=document.getElementById("set-scores")?.value.trim()||"",r=l?l.split(/\s+/).filter(Boolean):[],s=es();if(!e||!t||!n)return void alert("Please fill in all required fields");if(0===s.length)return void alert("Please select at least one participant");if("single-user"===o&&1!==s.length)return void alert("Single-user events require exactly one participant");0===g.length&&(g=await z());let c=s.map(e=>{let t=$.find((t,n)=>S(t,n)===e);if("single-user"===o){let n=parseInt(document.getElementById("single-made")?.value||"0",10),a={made:n,putBack:parseInt(document.getElementById("single-put-back")?.value||"0",10),missed:parseInt(document.getElementById("single-missed")?.value||"0",10)};if(t)return{id:e,name:t,email:"",singleUserStats:a};let i=g.find(t=>t.id===e);return i?{id:i.id,name:i.name,email:i.email,picture:i.picture,singleUserStats:a}:{id:e,name:e,email:"",singleUserStats:a}}let n=document.getElementById(`score-${e}`),a=n?parseInt(n.value,10):NaN,i=isNaN(a)?null:a;if(t)return{id:e,name:t,email:"",score:i};let l=g.find(t=>t.id===e);return l?{id:l.id,name:l.name,email:l.email,picture:l.picture,score:i}:{id:e,name:e,email:"",score:i}}),d={id:"event-"+Date.now(),date:e,time:t,location:n,participants:c,games:a,footage:i||void 0,eventType:o,scoreSummary:"normal"===o&&c[0]?.score!=null&&c[1]?.score!=null?`${c[0].score}:${c[1].score}`:"",setScores:"normal"===o?r:[],singleUserStats:"single-user"===o?c[0]?.singleUserStats:void 0,createdBy:u.name,createdByUid:m?.uid,createdAt:new Date().toISOString()};await P(d),$=[],alert("Event posted successfully!"),p="view-events",X()}async function X(){if(h){p="guest",await er();return}q(),0===f.length&&(f=await O(),localStorage.setItem("gameEvents",JSON.stringify(f))),ee(f)}function ee(e){let t=document.querySelector("#root");if(!t)return;let n=e.map(e=>{let t=(()=>{if(!e.participants||0===e.participants.length)return"—";if("single-user"===e.eventType){let t=e.participants[0],n=a({eventType:"single-user",singleUserStats:t.singleUserStats},w);return`${E(t.name)}${n?` \xb7 ${E(n)}`:""}`}if(2===e.participants.length){let[t,n]=e.participants,i="number"==typeof t.score?String(t.score):"—",o="number"==typeof n.score?String(n.score):"—",l=a({eventType:"normal",scoreSummary:`${i}:${o}`,setScores:e.setScores},w);return`${E(t.name)} ${E(i)} : ${E(o)} ${E(n.name)}${l&&l!==`${i}:${o}`?` \xb7 ${E(l)}`:""}`}return e.participants.map(e=>`${E(e.name)}${"number"==typeof e.score?` ${E(String(e.score))}`:""}`).join(", ")})(),n=!h&&m&&(e.createdByUid?e.createdByUid===m.uid:e.createdBy===u?.name),i=h||!n?"":`
      <div class="event-actions">
        <button class="edit-event" type="button" data-id="${e.id}">${B("editEvent")}</button>
        <button class="delete-event" type="button" data-id="${e.id}">${B("deleteEvent")}</button>
      </div>
    `;return e.footage&&I(e.footage),`
      <div class="event-card" data-event-id="${e.id}">
        <div class="event-header">
          <h3>${E(e.location)}</h3>
          <p class="event-meta">${B("postedBy")} ${E(e.createdBy)}</p>
        </div>
        <div class="event-details">
          <p><strong>${B("date")}:</strong> ${new Date(e.date).toLocaleDateString()}</p>
          <p><strong>${B("time")}:</strong> ${E(e.time)}</p>
          <p><strong>${B("participants")}:</strong> ${t}</p>
          <p><strong>${B("match")}:</strong> ${E(e.games||"—")}</p>
        </div>
        ${i}
      </div>
    `}).join("");t.innerHTML=`
    <main class="page-shell">
      <nav class="top-nav">
        <div class="nav-brand">
          <span class="brand-mark">M</span>
          <span>Malpigaj</span>
        </div>
        <div class="nav-actions">
          <button class="nav-btn" id="toggle-lang-btn">${B("switchToEnglish")}</button>
          ${h?`<button class="nav-btn" id="login-btn">${B("signIn")}</button>`:`<button class="nav-btn" id="profile-btn">${B("profile")}</button><button class="nav-btn" id="post-event-btn">${B("postEvent")}</button>`}
          <button class="nav-btn" id="view-events-btn">${B("events")}</button>
          ${h?"":`<button class="nav-btn logout" id="logout-btn">${B("logout")}</button>`}
        </div>
      </nav>

      <section class="events-section">
        <h2>${B("upcomingEvents")}</h2>
        <div class="events-list">
          ${n}
        </div>
      </section>

      <!-- Edit modal container -->
      <div id="edit-modal" class="modal" style="display:none;">
        <div class="modal-backdrop"></div>
        <div class="modal-content" role="dialog" aria-modal="true">
          <h3 id="modal-title">${B("editEvent")}</h3>
          <form id="edit-event-form" class="edit-event-form">
            <div class="form-group"><label for="edit-location">${B("location")}</label><input id="edit-location" name="location" type="text" /></div>
            <div class="form-group"><label for="edit-date">${B("date")}</label><input id="edit-date" name="date" type="date" /></div>
            <div class="form-group"><label for="edit-time">${B("time")}</label><input id="edit-time" name="time" type="time" /></div>
            <div class="form-group"><label for="edit-games">${B("matchLabel")}</label><input id="edit-games" name="games" type="text" /></div>
            <div class="form-group"><label for="edit-footage">${B("footage")}</label><input id="edit-footage" name="footage" type="url" /></div>
            <div class="modal-actions">
              <button type="submit" class="button button-primary">Save</button>
              <button type="button" id="edit-cancel" class="button">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  `,h?document.getElementById("login-btn")?.addEventListener("click",async()=>{h=!1,J(),G(),await L(),K()}):(document.getElementById("logout-btn")?.addEventListener("click",async()=>{try{await (0,l.CI)(d)}catch(e){console.error(e)}ec()}),document.getElementById("profile-btn")?.addEventListener("click",()=>{p="profile",H()}),document.getElementById("post-event-btn")?.addEventListener("click",()=>{p="post-event",Z()})),Array.from(document.querySelectorAll(".delete-event")).forEach(e=>{e.addEventListener("click",async t=>{t.stopPropagation();let n=e.getAttribute("data-id");await el(n)})}),Array.from(document.querySelectorAll(".edit-event")).forEach(e=>{e.addEventListener("click",async t=>{t.stopPropagation();let n=e.getAttribute("data-id");await ea(n)})}),Array.from(document.querySelectorAll(".event-card")).forEach(e=>{e.addEventListener("click",()=>{let t=e.getAttribute("data-event-id");t&&et(t)})})}async function et(e){let t=f.find(t=>t.id===e);if(!t&&j()){let n=await (0,o.Jt)((0,o.KR)(c,`events/${e}`));t=U(e,n.val())}if(!t){alert("Event not found"),p="view-events",X();return}let n=(()=>{if(!t.participants||0===t.participants.length)return"—";if("single-user"===t.eventType){let e=t.participants[0],n=a({eventType:"single-user",singleUserStats:e.singleUserStats},w);return`${E(e.name)}${n?` \xb7 ${E(n)}`:""}`}if(2===t.participants.length){let[e,n]=t.participants,i="number"==typeof e.score?String(e.score):"—",o="number"==typeof n.score?String(n.score):"—",l=a({eventType:"normal",scoreSummary:`${i}:${o}`,setScores:t.setScores},w);return`${E(e.name)} ${E(i)} : ${E(o)} ${E(n.name)}${l&&l!==`${i}:${o}`?` \xb7 ${E(l)}`:""}`}return t.participants.map(e=>`${E(e.name)}${"number"==typeof e.score?` ${E(String(e.score))}`:""}`).join(", ")})(),i=!h&&m&&(t.createdByUid?t.createdByUid===m.uid:t.createdBy===u?.name),l=h||!i?"":`
    <div class="event-actions">
      <button class="button button-secondary" type="button" id="detail-edit-btn">Edit</button>
      <button class="button button-secondary" type="button" id="detail-delete-btn">Delete</button>
    </div>
  `,r=document.querySelector("#root");r&&(p="event-detail",v=t.id,r.innerHTML=`
    <main class="page-shell">
      <nav class="top-nav">
        <div class="nav-brand">
          <span class="brand-mark">M</span>
          <span>Malpigaj</span>
        </div>
        <div class="nav-actions">
          <button class="nav-btn" id="toggle-lang-btn">${B("switchToEnglish")}</button>
          <button class="nav-btn" id="back-events-btn">${B("backToEvents")}</button>
          ${h?"":`<button class="nav-btn" id="detail-profile-btn">${B("profile")}</button>`}
        </div>
      </nav>
      <section class="hero-card event-detail-card">
        <div class="event-header">
          <h2>${E(t.location)}</h2>
          <p class="event-meta">Posted by ${E(t.createdBy)}</p>
        </div>
        <div class="event-details">
          <p><strong>Date:</strong> ${new Date(t.date).toLocaleDateString()}</p>
          <p><strong>Time:</strong> ${E(t.time)}</p>
          <p><strong>Participants:</strong> ${n}</p>
          <p><strong>Match:</strong> ${E(t.games||"—")}</p>
          ${t.footage?`<div class="media-block">${I(t.footage)||""}</div>`:""}
        </div>
        ${l}
      </section>
    </main>
  `,document.getElementById("toggle-lang-btn")?.addEventListener("click",k),document.getElementById("back-events-btn")?.addEventListener("click",()=>{p="view-events",X()}),document.getElementById("detail-profile-btn")?.addEventListener("click",()=>{p="profile",H()}),i&&(document.getElementById("detail-edit-btn")?.addEventListener("click",()=>void ea(t.id)),document.getElementById("detail-delete-btn")?.addEventListener("click",()=>void el(t.id))))}(0,l.hg)(d,async e=>{if(m=e,e){if(!u||u.id!==e.uid){let t={id:e.uid,name:e.displayName||"Unknown",email:e.email||"",picture:e.photoURL||`https://ui-avatars.com/api/?name=${encodeURIComponent(e.displayName||"User")}`,loginMethod:"google",loginTime:new Date().toISOString()};u=t,A(t),await D(t)}h=!1,x(),q()}else u=null,T(),G(),J()});let en=null;async function ea(e){if(h||!m)return alert("Sign in to edit events");if(!j())return alert("Database not available");let t=(await (0,o.Jt)((0,o.KR)(c,`events/${e}`))).val();if(!t)return alert("Event not found");if(!(t.createdByUid?t.createdByUid===m.uid:t.createdBy===u?.name))return alert("You are not allowed to edit this event");en=e;let n=document.getElementById("edit-modal");if(!n)return;document.getElementById("edit-location").value=t.location||"",document.getElementById("edit-date").value=t.date||"",document.getElementById("edit-time").value=t.time||"",document.getElementById("edit-games").value=t.games||"",document.getElementById("edit-footage").value=t.footage||"",n.style.display="block";let a=document.getElementById("edit-cancel");a?.addEventListener("click",ei);let i=document.getElementById("edit-event-form");i?.addEventListener("submit",eo)}function ei(){let e=document.getElementById("edit-modal");if(!e)return;e.style.display="none",en=null;let t=document.getElementById("edit-event-form");t?.removeEventListener("submit",eo)}async function eo(e){if(e.preventDefault(),!en)return;let t=document.getElementById("edit-location").value,n=document.getElementById("edit-date").value,a=document.getElementById("edit-time").value,i=document.getElementById("edit-games").value,o=document.getElementById("edit-footage").value;t&&n&&a?(await C(en,{location:t,date:n,time:a,games:i,footage:o||void 0}),alert("Event updated"),ei()):alert("Please fill required fields")}async function el(e){if(h)return alert("Sign in to delete events");if(!m)return alert("Only authenticated users can delete events");if(!j())return alert("Database not available");let t=(await (0,o.Jt)((0,o.KR)(c,`events/${e}`))).val();return t?(t.createdByUid?t.createdByUid===m.uid:t.createdBy===u?.name)?void(confirm("Are you sure you want to delete this event?")&&(await N(e),alert("Event deleted"))):alert("You are not allowed to delete this event"):alert("Event not found")}async function er(){h=!0,p="guest",0===f.length&&(f=await O(),localStorage.setItem("gameEvents",JSON.stringify(f)));let e=document.querySelector("#root");if(!e)return;let t=f.map(e=>{let t=(()=>{if(!e.participants||0===e.participants.length)return"—";if("single-user"===e.eventType){let t=e.participants[0],n=a({eventType:"single-user",singleUserStats:t.singleUserStats},w);return`${E(t.name)}${n?` \xb7 ${E(n)}`:""}`}if(2===e.participants.length){let[t,n]=e.participants,i="number"==typeof t.score?String(t.score):"—",o="number"==typeof n.score?String(n.score):"—",l=a({eventType:"normal",scoreSummary:`${i}:${o}`,setScores:e.setScores},w);return`${E(t.name)} ${E(i)} : ${E(o)} ${E(n.name)}${l&&l!==`${i}:${o}`?` \xb7 ${E(l)}`:""}`}return e.participants.map(e=>`${E(e.name)}${"number"==typeof e.score?` ${E(String(e.score))}`:""}`).join(", ")})();return`
      <div class="event-card" data-event-id="${e.id}">
        <div class="event-header">
          <h3>${E(e.location)}</h3>
          <p class="event-meta">${B("postedBy")} ${E(e.createdBy)}</p>
        </div>
        <div class="event-details">
          <p><strong>${B("date")}:</strong> ${new Date(e.date).toLocaleDateString()}</p>
          <p><strong>${B("time")}:</strong> ${E(e.time)}</p>
          <p><strong>${B("participants")}:</strong> ${t}</p>
          <p><strong>${B("match")}:</strong> ${E(e.games||"—")}</p>
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
          <button class="nav-btn" id="toggle-lang-btn">${B("switchToEnglish")}</button>
          <button class="nav-btn" id="login-btn">${B("signIn")}</button>
        </div>
      </nav>

      <section class="events-section">
        <h2>${B("guestViewTitle")}</h2>
        <div class="events-list">
          ${t}
        </div>
      </section>
    </main>
  `,document.getElementById("login-btn")?.addEventListener("click",async()=>{h=!1,J(),G(),await L(),K()})}function es(){let e=document.getElementById("participants-list"),t=document.getElementById("custom-participants-list"),n=[];if(e){let t=Array.from(e.querySelectorAll(".participant-chip.selected"));n.push(...t.map(e=>e.getAttribute("data-user-id")||"").filter(Boolean))}if(t){let e=Array.from(t.querySelectorAll(".participant-chip.selected"));n.push(...e.map(e=>e.getAttribute("data-user-id")||"").filter(Boolean))}return n}function ec(){T(),u=null,m=null,p="login",h=!1,window.google?.accounts.id.disableAutoSelect?.(),G(),J(),K()}(async function(){let e=localStorage.getItem("userInfo");if(e)try{u=JSON.parse(e),g=await z(),f=await O(),localStorage.setItem("users",JSON.stringify(g)),localStorage.setItem("gameEvents",JSON.stringify(f)),p="profile",H();return}catch(e){console.error("Failed to parse user info:",e)}await L(),K()})(),window.__malpigaj={db:c,usersCache:g,eventsCache:f}}},o={};function l(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={exports:{}};return i[e](n,n.exports,l),n.exports}l.m=i,l.d=(e,t,n)=>{var a=(t,n)=>{for(var a in t)l.o(t,a)&&!l.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,[n]:t[a]})};a(t,"get"),a(n,"value")},l.g=(()=>{if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}})(),l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e=[],l.O=(t,n,a,i)=>{if(n){i=i||0;for(var o=e.length;o>0&&e[o-1][2]>i;o--)e[o]=e[o-1];e[o]=[n,a,i];return}for(var r=1/0,o=0;o<e.length;o++){for(var[n,a,i]=e[o],s=!0,c=0;c<n.length;c++)(!1&i||r>=i)&&Object.keys(l.O).every(e=>l.O[e](n[c]))?n.splice(c--,1):(s=!1,i<r&&(r=i));if(s){e.splice(o--,1);var d=a();void 0!==d&&(t=d)}}return t},t={410:0},l.O.j=e=>0===t[e],n=(e,n)=>{var a,i,[o,r,s]=n,c=0;if(o.some(e=>0!==t[e])){for(a in r)l.o(r,a)&&(l.m[a]=r[a]);if(s)var d=s(l)}for(e&&e(n);c<o.length;c++)i=o[c],l.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return l.O(d)},(a=self.rspackChunkmalpigaj=self.rspackChunkmalpigaj||[]).forEach(n.bind(null,0)),a.push=n.bind(null,a.push.bind(a));var r=l.O(void 0,["657"],()=>l(3));r=l.O(r)})();