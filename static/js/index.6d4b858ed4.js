(()=>{"use strict";var e,t,n,a,i={880(e,t,n){var a=n(223),i=n(137),r=n(832);let o=(0,a.Dk)().length?(0,a.Dk)()[0]:(0,a.Wp)({apiKey:"AIzaSyAsZdgR30zAkbh3krAL3C4BoEhLm-rGbCY",authDomain:"malpigaj-a8ce1.firebaseapp.com",projectId:"malpigaj-a8ce1",storageBucket:"malpigaj-a8ce1.firebasestorage.app",messagingSenderId:"602620275958",appId:"1:602620275958:web:e96a29365b6f7c547f10d7",measurementId:"G-ZZSQBM6VGG",databaseURL:"https://malpigaj-a8ce1-default-rtdb.firebaseio.com/"}),l=null;try{l=(0,i.C3)(o)}catch(e){console.error("Realtime Database initialization failed:",e)}let s=(0,r.xI)(o),c=null,d=null,u="login",m=[],p=[],v=!1,g=!1,f=!1;function b(e){return e?String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"):""}function y(){return new Promise(e=>{if(window.google)return void e();let t=0,n=setInterval(()=>{window.google&&(clearInterval(n),e()),++t>50&&(clearInterval(n),console.error("Google API failed to load after attempts"),e())},100)})}function h(e){localStorage.setItem("userInfo",JSON.stringify(e))}function w(){localStorage.removeItem("userInfo")}function E(){return!!l||(console.warn("Realtime DB not available; skipping DB operation."),!1)}async function I(){if(!E())return[];try{let e=(await (0,i.Jt)((0,i.KR)(l,"users"))).val();return e?Object.keys(e).map(t=>e[t]):[]}catch(e){return console.error("fetchAllUsersOnce error",e),[]}}async function S(e){if(E())try{await (0,i.hZ)((0,i.KR)(l,`users/${e.id}`),e)}catch(e){console.error("saveUserToDB error",e)}}async function $(e){if(E())try{await (0,i.TF)((0,i.KR)(l,`users/${e}`))}catch(e){console.error("removeUserFromDB error",e)}}async function k(){if(!E())return[];try{let e=(await (0,i.Jt)((0,i.KR)(l,"events"))).val();return e?Object.keys(e).map(t=>e[t]):[]}catch(e){return console.error("fetchAllEventsOnce error",e),[]}}async function B(e){if(E())try{let t=(0,i.VC)((0,i.KR)(l,"events"));await (0,i.hZ)(t,e)}catch(e){console.error("pushEventToDB error",e)}}async function L(e,t){if(E())try{await (0,i.yo)((0,i.KR)(l,`events/${e}`),t)}catch(e){console.error("updateEventInDB error",e)}}async function O(e){if(E())try{await (0,i.TF)((0,i.KR)(l,`events/${e}`))}catch(e){console.error("removeEventFromDB error",e)}}async function j(){if(!E())return{};try{return(await (0,i.Jt)((0,i.KR)(l,"meta/admins"))).val()||{}}catch(e){return console.error("fetchAdmins error",e),{}}}function A(e){!E()||v||((0,i.Zy)((0,i.KR)(l,"users"),t=>{let n=t.val();m=n?Object.keys(n).map(e=>n[e]):[],localStorage.setItem("users",JSON.stringify(m)),e&&e(m),"post-event"===u&&U(m)}),v=!0)}function D(){!E()||v&&((0,i.AU)((0,i.KR)(l,"users")),v=!1)}function M(e){!E()||g||((0,i.Zy)((0,i.KR)(l,"events"),t=>{let n=t.val();(p=n?Object.keys(n).map(e=>n[e]):[]).sort((e,t)=>(t.createdAt||"").localeCompare(e.createdAt||"")),localStorage.setItem("gameEvents",JSON.stringify(p)),e&&e(p),("view-events"===u||"guest"===u)&&K(p)}),g=!0)}function R(){!E()||g&&((0,i.AU)((0,i.KR)(l,"events")),g=!1)}function T(){f=!1;let e=document.querySelector("#root");if(e){let t,n,a,i;e.innerHTML=`
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
          <p class="eyebrow">Welcome back</p>
          <h2>Sign in to continue</h2>
          <p class="description">Use your Google account or create a new account to get started quickly.</p>

          <div class="auth-actions">
            <div id="google-signin-button"></div>
            <span class="divider">or</span>
            <button class="button button-secondary" id="toggle-register" type="button">Create an account</button>
            <button class="button button-ghost" id="guest-btn" type="button">Continue as guest</button>
          </div>
        </div>

        <form class="auth-form" id="register-form" novalidate style="display: none;">
          <div class="form-group">
            <label for="name">Name</label>
            <input id="name" name="name" type="text" placeholder="Your full name" />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input id="email" name="email" type="email" placeholder="you@example.com" />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input id="password" name="password" type="password" placeholder="Create a password" />
          </div>
          <button class="button button-primary" type="submit">Register</button>
        </form>
      </section>
    </main>
  `,n=document.getElementById("toggle-register"),a=document.getElementById("register-form"),i=document.querySelector(".auth-actions"),n?.addEventListener("click",()=>{a?.style.display==="none"?(a.style.display="grid",i&&(i.style.display="none")):(a&&(a.style.display="none"),i&&(i.style.display="grid"))}),a?.addEventListener("submit",async e=>{e.preventDefault();let t=document.getElementById("name")?.value,n=document.getElementById("email")?.value;if(t&&n){let e={id:"manual-"+Date.now(),name:t,email:n,picture:`https://ui-avatars.com/api/?name=${encodeURIComponent(t)}`,loginMethod:"manual",loginTime:new Date().toISOString()};h(e),await S(e),c=e,m=await I(),localStorage.setItem("users",JSON.stringify(m)),u="profile",P()}}),(t=document.getElementById("google-signin-button"))?window.google?(window.google.accounts.id.initialize({client_id:"520549623097-9oegvlig2kc1dbr9c5o9bu3dah38coll.apps.googleusercontent.com",callback:async e=>{console.log("GIS callback received credential (truncated):",String(e.credential).slice(0,20)+"...");let t=function(e){try{let t=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),n=decodeURIComponent(atob(t).split("").map(e=>"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)).join(""));return JSON.parse(n)}catch(e){return console.error("Failed to decode JWT:",e),null}}(e.credential);if(!t){console.error("Failed to decode token from GIS response"),alert("Sign-in failed: invalid token received from Google.");return}let n=r.HF.credential(e.credential);try{let e=await (0,r.eN)(s,n);d=e.user;let a={id:e.user.uid,name:e.user.displayName||t.name,email:e.user.email||t.email,picture:e.user.photoURL||t.picture||`https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}`,loginMethod:"google",loginTime:new Date().toISOString()};c=a,h(a),await S(a),f=!1,A(),M(),u="profile",P()}catch(e){if(console.error("Firebase signInWithCredential failed",e),String(e?.code||e?.message||"").includes("auth/configuration-not-found")){console.warn("Auth configuration not found for signInWithCredential. Attempting signInWithPopup fallback."),alert("Automatic Google sign-in failed due to configuration. Trying popup sign-in as a fallback.");try{let e=new r.HF,n=await (0,r.df)(s,e);d=n.user;let a={id:n.user.uid,name:n.user.displayName||t.name,email:n.user.email||t.email,picture:n.user.photoURL||t.picture||`https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}`,loginMethod:"google",loginTime:new Date().toISOString()};c=a,h(a),await S(a),f=!1,A(),M(),u="profile",P(),console.log("Popup sign-in succeeded as fallback.")}catch(e){console.error("Popup fallback sign-in failed",e),alert("Sign-in failed. Check Firebase Google provider configuration and browser COOP/COEP headers.")}}else alert("Sign-in failed. See console for details.")}}}),window.google.accounts.id.renderButton(t,{theme:"outline",size:"large",width:"100%",text:"signin_with"})):console.error("Google object not available"):console.error("Google Sign-In button container not found"),document.getElementById("guest-btn")?.addEventListener("click",async()=>{f=!0,c=null,d=null,u="guest",M(),A(),await Y()})}}async function P(){if(!c)return T();A(),M();let e=await j(),t=!!d&&!!e[d.uid],n=document.querySelector("#root");n&&(n.innerHTML=`
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
          <img src="${b(c.picture)}" alt="${b(c.name)}" class="profile-avatar" />
          <div>
            <h1>Welcome, ${b(c.name)}!</h1>
            <p class="profile-email">${b(c.email)}</p>
          </div>
        </div>

        <div class="profile-info">
          <p><strong>Login Method:</strong> ${"google"===c.loginMethod?"Google OAuth":"Manual Registration"}</p>
          <p><strong>Login Time:</strong> ${new Date(c.loginTime).toLocaleString()}</p>
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
  `,document.getElementById("logout-btn")?.addEventListener("click",async()=>{try{await (0,r.CI)(s)}catch(e){console.error("signOut error",e)}V()}),document.getElementById("post-event-btn")?.addEventListener("click",()=>{u="post-event",N()}),document.getElementById("view-events-btn")?.addEventListener("click",()=>{u="view-events",J()}),document.getElementById("profile-btn")?.addEventListener("click",()=>{u="profile",P()}),t&&C())}async function C(){let e=document.getElementById("admin-users-list");e&&(0===m.length&&(m=await I()),e.innerHTML=m.map(e=>`
    <div class="admin-user-row" data-user-id="${e.id}">
      <img src="${b(e.picture)}" alt="${b(e.name)}" class="chip-avatar" />
      <div class="admin-user-info">
        <div class="admin-user-name">${b(e.name)}</div>
        <div class="admin-user-email">${b(e.email)}</div>
      </div>
      <div class="admin-user-actions">
        <button class="admin-delete-user" data-id="${e.id}">Delete</button>
      </div>
    </div>
  `).join(""),Array.from(e.querySelectorAll(".admin-delete-user")).forEach(e=>{e.addEventListener("click",async()=>{let t=e.getAttribute("data-id");if(confirm("Delete user and remove from events?")){if(await $(t),E()){let e=(await (0,i.Jt)((0,i.KR)(l,"events"))).val();if(e)for(let n of Object.keys(e)){let a=e[n],r=a.participants.filter(e=>e.id!==t);r.length!==a.participants.length&&await (0,i.yo)((0,i.KR)(l,`events/${n}`),{participants:r})}}alert("User removed")}})}))}async function N(){if(f){alert("You must sign in to post events."),u="guest",await Y();return}if(!c)return T();0===m.length&&(m=await I(),localStorage.setItem("users",JSON.stringify(m))),A();let e=document.querySelector("#root");if(!e)return;e.innerHTML=`
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

      <section class="hero-card event-form-card">
        <h2>Post a New Event</h2>
        
        <form id="event-form" class="event-form" novalidate>
          <div class="form-row">
            <div class="form-group">
              <label for="event-date">Date</label>
              <input id="event-date" name="date" type="date" required />
            </div>
            <div class="form-group">
              <label for="event-time">Time</label>
              <input id="event-time" name="time" type="time" required />
            </div>
          </div>

          <div class="form-group">
            <label for="event-location">Location</label>
            <input id="event-location" name="location" type="text" placeholder="e.g., Central Park Court 3" required />
          </div>

          <div class="form-group">
            <label>Participants</label>
            <div id="participants-list" class="participants-list"></div>
            <small class="hint">Kliknij nazwę użytkownika lub zdjęcie, aby dodać lub usunąć go z listy uczestnik\xf3w</small>
          </div>

          <div id="score-inputs" class="form-group"></div>

          <div class="form-row">
            <div class="form-group">
              <label for="event-games">Match label (opcjonalnie)</label>
              <input id="event-games" name="score" type="text" placeholder="e.g., Final, Semifinal" />
            </div>
          </div>

          <button class="button button-primary" type="submit">Post Event</button>
        </form>
      </section>
    </main>
  `,document.getElementById("logout-btn")?.addEventListener("click",async()=>{try{await (0,r.CI)(s)}catch(e){console.error(e)}V()}),document.getElementById("profile-btn")?.addEventListener("click",()=>{u="profile",P()}),document.getElementById("view-events-btn")?.addEventListener("click",()=>{u="view-events",J()}),U(m);let t=document.getElementById("event-form");t?.addEventListener("submit",async e=>{e.preventDefault(),await z()})}function U(e){let t=document.getElementById("participants-list");if(t){if(t.innerHTML=e.map(e=>`
    <button type="button" class="participant-chip" data-user-id="${e.id}" title="${b(e.email)}" aria-pressed="false">
      <img src="${b(e.picture)}" alt="${b(e.name)}" class="chip-avatar" loading="lazy" decoding="async" />
      <span class="chip-name">${b(e.name)}</span>
    </button>
  `).join(""),Array.from(t.querySelectorAll(".participant-chip")).forEach(e=>{e.addEventListener("click",()=>{let t=e.classList.toggle("selected");e.setAttribute("aria-pressed",String(t)),e.classList.add("chip-animate"),window.setTimeout(()=>e.classList.remove("chip-animate"),260),q(_())}),e.addEventListener("keydown",t=>{("Enter"===t.key||" "===t.key)&&(t.preventDefault(),e.click())})}),c){let e=t.querySelector(`.participant-chip[data-user-id="${c.id}"]`);e&&(e.classList.add("selected"),e.setAttribute("aria-pressed","true"))}q(_())}}function q(e){let t=document.getElementById("score-inputs");if(!t)return;let n=m.length?m:JSON.parse(localStorage.getItem("users")||"[]");if(t.innerHTML="",0===e.length){t.innerHTML='<p class="hint">Wybierz uczestników, aby ustawić wyniki.</p>';return}if(2===e.length){let a=n.find(t=>t.id===e[0]),i=n.find(t=>t.id===e[1]),r=a?b(a.name):b(e[0]),o=i?b(i.name):b(e[1]);t.innerHTML=`
      <label>Wynik meczu</label>
      <div class="score-inline compact">
        <span class="score-name">${r}</span>
        <input id="score-${e[0]}" class="score-input tiny" type="number" min="0" max="99" step="1" value="0" inputmode="numeric" />
        <span class="score-sep">:</span>
        <input id="score-${e[1]}" class="score-input tiny" type="number" min="0" max="99" step="1" value="0" inputmode="numeric" />
        <span class="score-name">${o}</span>
      </div>
      <small class="hint">Wprowadź kr\xf3tką liczbę (0–99). Kliknij nazwę lub zdjęcie, aby dodać/usuwać uczestnik\xf3w.</small>
    `,x(`score-${e[0]}`),x(`score-${e[1]}`);return}let a=e.map(e=>{let t=n.find(t=>t.id===e),a=t?b(t.name):b(e);return`
      <div class="participant-score-row">
        <label for="score-${e}" class="participant-score-label">${a}</label>
        <input id="score-${e}" class="score-input tiny" type="number" min="0" max="99" step="1" value="0" inputmode="numeric" />
      </div>
    `}).join("");t.innerHTML=`
    <label>Wyniki</label>
    <div class="scores-list">
      ${a}
    </div>
    <small class="hint">Wprowadź kr\xf3tkie liczby (0–99) dla każdego uczestnika.</small>
  `,e.forEach(e=>x(`score-${e}`))}function x(e){let t=document.getElementById(e);t&&(t.addEventListener("input",()=>{t.value=t.value.replace(/[^\d]/g,"");let e=parseInt(t.value||"0",10);isNaN(e)&&(e=0),e<0&&(e=0),e>99&&(e=99),t.value=String(e)}),t.addEventListener("blur",()=>{""===t.value&&(t.value="0")}))}async function z(){if(f)return void alert("You must sign in to post events.");if(!c)return alert("Please sign in");let e=document.getElementById("event-date").value,t=document.getElementById("event-time").value,n=document.getElementById("event-location").value,a=document.getElementById("event-games").value,i=_();if(!e||!t||!n)return void alert("Please fill in all required fields");if(0===i.length)return void alert("Please select at least one participant");0===m.length&&(m=await I());let r=i.map(e=>{let t=m.find(t=>t.id===e),n=document.getElementById(`score-${e}`),a=n?parseInt(n.value,10):NaN,i=isNaN(a)?null:a;return t?{id:t.id,name:t.name,email:t.email,picture:t.picture,score:i}:{id:e,name:e,email:"",score:i}}),o={id:"event-"+Date.now(),date:e,time:t,location:n,participants:r,games:a,createdBy:c.name,createdByUid:d?.uid,createdAt:new Date().toISOString()};await B(o),alert("Event posted successfully!"),u="view-events",J()}async function J(){if(f){u="guest",await Y();return}M(),0===p.length&&(p=await k(),localStorage.setItem("gameEvents",JSON.stringify(p))),K(p)}function K(e){let t=document.querySelector("#root");if(!t)return;let n=e.map(e=>{let t=(()=>{if(!e.participants||0===e.participants.length)return"—";if(2===e.participants.length){let[t,n]=e.participants,a="number"==typeof t.score?String(t.score):"—",i="number"==typeof n.score?String(n.score):"—";return`${b(t.name)} ${b(a)} : ${b(i)} ${b(n.name)}`}return e.participants.map(e=>`${b(e.name)}${"number"==typeof e.score?` ${b(String(e.score))}`:""}`).join(", ")})(),n=f?"":`
      <div class="event-actions">
        <button class="edit-event" data-id="${e.id}">Edit</button>
        <button class="delete-event" data-id="${e.id}">Delete</button>
      </div>
    `;return`
      <div class="event-card" data-event-id="${e.id}">
        <div class="event-header">
          <h3>${b(e.location)}</h3>
          <p class="event-meta">Posted by ${b(e.createdBy)}</p>
        </div>
        <div class="event-details">
          <p><strong>Date:</strong> ${new Date(e.date).toLocaleDateString()}</p>
          <p><strong>Time:</strong> ${b(e.time)}</p>
          <p><strong>Participants:</strong> ${t}</p>
          <p><strong>Match:</strong> ${b(e.games||"—")}</p>
        </div>
        ${n}
      </div>
    `}).join("");t.innerHTML=`
    <main class="page-shell">
      <nav class="top-nav">
        <div class="nav-brand">
          <span class="brand-mark">M</span>
          <span>Malpigaj</span>
        </div>
        <div class="nav-actions">
          ${f?'<button class="nav-btn" id="login-btn">Sign in</button>':'<button class="nav-btn" id="profile-btn">Profile</button><button class="nav-btn" id="post-event-btn">Post Event</button>'}
          <button class="nav-btn" id="view-events-btn">Events</button>
          ${f?"":'<button class="nav-btn logout" id="logout-btn">Logout</button>'}
        </div>
      </nav>

      <section class="events-section">
        <h2>Upcoming Events</h2>
        <div class="events-list">
          ${n}
        </div>
      </section>

      <!-- Edit modal container -->
      <div id="edit-modal" class="modal" style="display:none;">
        <div class="modal-backdrop"></div>
        <div class="modal-content" role="dialog" aria-modal="true">
          <h3 id="modal-title">Edit Event</h3>
          <form id="edit-event-form" class="edit-event-form">
            <div class="form-group"><label for="edit-location">Location</label><input id="edit-location" name="location" type="text" /></div>
            <div class="form-group"><label for="edit-date">Date</label><input id="edit-date" name="date" type="date" /></div>
            <div class="form-group"><label for="edit-time">Time</label><input id="edit-time" name="time" type="time" /></div>
            <div class="form-group"><label for="edit-games">Match label</label><input id="edit-games" name="games" type="text" /></div>
            <div class="modal-actions">
              <button type="submit" class="button button-primary">Save</button>
              <button type="button" id="edit-cancel" class="button">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  `,f?document.getElementById("login-btn")?.addEventListener("click",async()=>{f=!1,R(),D(),await y(),T()}):(document.getElementById("logout-btn")?.addEventListener("click",async()=>{try{await (0,r.CI)(s)}catch(e){console.error(e)}V()}),document.getElementById("profile-btn")?.addEventListener("click",()=>{u="profile",P()}),document.getElementById("post-event-btn")?.addEventListener("click",()=>{u="post-event",N()})),Array.from(document.querySelectorAll(".delete-event")).forEach(e=>{e.addEventListener("click",async()=>{let t=e.getAttribute("data-id");await Z(t)})}),Array.from(document.querySelectorAll(".edit-event")).forEach(e=>{e.addEventListener("click",async()=>{let t=e.getAttribute("data-id");await F(t)})})}(0,r.hg)(s,async e=>{if(d=e,e){if(!c||c.id!==e.uid){let t={id:e.uid,name:e.displayName||"Unknown",email:e.email||"",picture:e.photoURL||`https://ui-avatars.com/api/?name=${encodeURIComponent(e.displayName||"User")}`,loginMethod:"google",loginTime:new Date().toISOString()};c=t,h(t),await S(t)}f=!1,A(),M()}else c=null,w(),D(),R()});let G=null;async function F(e){if(f||!d)return alert("Sign in to edit events");if(!E())return alert("Database not available");let t=(await (0,i.Jt)((0,i.KR)(l,`events/${e}`))).val();if(!t)return alert("Event not found");let n=await j(),a=!!d&&!!n[d.uid];if(t.createdByUid!==d.uid&&!a)return alert("You are not allowed to edit this event");G=e;let r=document.getElementById("edit-modal");if(!r)return;document.getElementById("edit-location").value=t.location||"",document.getElementById("edit-date").value=t.date||"",document.getElementById("edit-time").value=t.time||"",document.getElementById("edit-games").value=t.games||"",r.style.display="block";let o=document.getElementById("edit-cancel");o?.addEventListener("click",H);let s=document.getElementById("edit-event-form");s?.addEventListener("submit",W)}function H(){let e=document.getElementById("edit-modal");if(!e)return;e.style.display="none",G=null;let t=document.getElementById("edit-event-form");t?.removeEventListener("submit",W)}async function W(e){if(e.preventDefault(),!G)return;let t=document.getElementById("edit-location").value,n=document.getElementById("edit-date").value,a=document.getElementById("edit-time").value,i=document.getElementById("edit-games").value;t&&n&&a?(await L(G,{location:t,date:n,time:a,games:i}),alert("Event updated"),H()):alert("Please fill required fields")}async function Z(e){if(f)return alert("Sign in to delete events");if(!d)return alert("Only authenticated users can delete events");if(!E())return alert("Database not available");let t=(await (0,i.Jt)((0,i.KR)(l,`events/${e}`))).val();if(!t)return alert("Event not found");let n=await j(),a=!!d&&!!n[d.uid];if(t.createdByUid!==d.uid&&!a)return alert("You are not allowed to delete this event");confirm("Are you sure you want to delete this event?")&&(await O(e),alert("Event deleted"))}async function Y(){f=!0,u="guest",0===p.length&&(p=await k(),localStorage.setItem("gameEvents",JSON.stringify(p)));let e=document.querySelector("#root");if(!e)return;let t=p.map(e=>{let t=(()=>{if(!e.participants||0===e.participants.length)return"—";if(2===e.participants.length){let[t,n]=e.participants,a="number"==typeof t.score?String(t.score):"—",i="number"==typeof n.score?String(n.score):"—";return`${b(t.name)} ${b(a)} : ${b(i)} ${b(n.name)}`}return e.participants.map(e=>`${b(e.name)}${"number"==typeof e.score?` ${b(String(e.score))}`:""}`).join(", ")})();return`
      <div class="event-card" data-event-id="${e.id}">
        <div class="event-header">
          <h33>${b(e.location)}</h3>
          <p class="event-meta">Posted by ${b(e.createdBy)}</p>
        </div>
        <div class="event-details">
          <p><strong>Date:</strong> ${new Date(e.date).toLocaleDateString()}</p>
          <p><strong>Time:</strong> ${b(e.time)}</p>
          <p><strong>Participants:</strong> ${t}</p>
          <p><strong>Match:</strong> ${b(e.games||"—")}</p>
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
          <button class="nav-btn" id="login-btn">Sign in</button>
        </div>
      </nav>

      <section class="events-section">
        <h2>Upcoming Events (Guest)</h2>
        <div class="events-list">
          ${t}
        </div>
      </section>
    </main>
  `,document.getElementById("login-btn")?.addEventListener("click",async()=>{f=!1,R(),D(),await y(),T()})}function _(){let e=document.getElementById("participants-list");return e?Array.from(e.querySelectorAll(".participant-chip.selected")).map(e=>e.getAttribute("data-user-id")||"").filter(Boolean):[]}function V(){w(),c=null,d=null,u="login",f=!1,window.google?.accounts.id.disableAutoSelect?.(),D(),R(),T()}(async function(){let e=localStorage.getItem("userInfo");if(e)try{c=JSON.parse(e),m=await I(),p=await k(),localStorage.setItem("users",JSON.stringify(m)),localStorage.setItem("gameEvents",JSON.stringify(p)),u="profile",P();return}catch(e){console.error("Failed to parse user info:",e)}await y(),T()})(),window.__malpigaj={db:l,usersCache:m,eventsCache:p}}},r={};function o(e){var t=r[e];if(void 0!==t)return t.exports;var n=r[e]={exports:{}};return i[e](n,n.exports,o),n.exports}o.m=i,o.d=(e,t,n)=>{var a=(t,n)=>{for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,[n]:t[a]})};a(t,"get"),a(n,"value")},o.g=(()=>{if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}})(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e=[],o.O=(t,n,a,i)=>{if(n){i=i||0;for(var r=e.length;r>0&&e[r-1][2]>i;r--)e[r]=e[r-1];e[r]=[n,a,i];return}for(var l=1/0,r=0;r<e.length;r++){for(var[n,a,i]=e[r],s=!0,c=0;c<n.length;c++)(!1&i||l>=i)&&Object.keys(o.O).every(e=>o.O[e](n[c]))?n.splice(c--,1):(s=!1,i<l&&(l=i));if(s){e.splice(r--,1);var d=a();void 0!==d&&(t=d)}}return t},t={410:0},o.O.j=e=>0===t[e],n=(e,n)=>{var a,i,[r,l,s]=n,c=0;if(r.some(e=>0!==t[e])){for(a in l)o.o(l,a)&&(o.m[a]=l[a]);if(s)var d=s(o)}for(e&&e(n);c<r.length;c++)i=r[c],o.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return o.O(d)},(a=self.rspackChunkmalpigaj=self.rspackChunkmalpigaj||[]).forEach(n.bind(null,0)),a.push=n.bind(null,a.push.bind(a));var l=o.O(void 0,["657"],()=>o(880));l=o.O(l)})();