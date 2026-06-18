(()=>{"use strict";let e=null;function t(){return new Promise(e=>{if(window.google)e();else{let t=0,n=setInterval(()=>{window.google&&(clearInterval(n),e()),++t>50&&(clearInterval(n),console.error("Google API failed to load"),e())},100)}})}function n(){let e=localStorage.getItem("users");return e?JSON.parse(e):[]}function a(e){let t=n();if(t.find(t=>t.email===e.email||t.id===e.id)){let n=t.map(t=>t.email===e.email?{...t,...e}:t);localStorage.setItem("users",JSON.stringify(n))}else t.push(e),localStorage.setItem("users",JSON.stringify(t))}function i(){let t,n,i,s,r=document.querySelector("#root");r&&(r.innerHTML=`
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
  `,t=document.getElementById("toggle-register"),n=document.getElementById("register-form"),i=document.querySelector(".auth-actions"),t?.addEventListener("click",()=>{n?.style.display==="none"?(n.style.display="grid",i&&(i.style.display="none")):(n&&(n.style.display="none"),i&&(i.style.display="grid"))}),n?.addEventListener("submit",t=>{t.preventDefault();let n=document.getElementById("name")?.value,i=document.getElementById("email")?.value;if(n&&i){let t={id:"manual-"+Date.now(),name:n,email:i,picture:`https://ui-avatars.com/api/?name=${encodeURIComponent(n)}`,loginMethod:"manual",loginTime:new Date().toISOString()};localStorage.setItem("userInfo",JSON.stringify(t)),e=t,a(t),o()}}),(s=document.getElementById("google-signin-button"))?window.google?(window.google.accounts.id.initialize({client_id:"520549623097-9oegvlig2kc1dbr9c5o9bu3dah38coll.apps.googleusercontent.com",callback:l}),window.google.accounts.id.renderButton(s,{theme:"outline",size:"large",width:"100%",text:"signin_with"})):console.error("Google object not available"):console.error("Google Sign-In button container not found"))}function l(t){let n=function(e){try{let t=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),n=decodeURIComponent(atob(t).split("").map(e=>"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)).join(""));return JSON.parse(n)}catch(e){return console.error("Failed to decode JWT:",e),null}}(t.credential);if(!n)return void console.error("Failed to decode token");console.log("Google Sign-In successful:",n);let i={id:n.sub,name:n.name,email:n.email,picture:n.picture,loginMethod:"google",loginTime:new Date().toISOString()};localStorage.setItem("userInfo",JSON.stringify(i)),a(i),e=i,o()}function o(){if(!e)return;let t=document.querySelector("#root");t&&(t.innerHTML=`
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
          <img src="${e.picture}" alt="${e.name}" class="profile-avatar" />
          <div>
            <h1>Welcome, ${e.name}!</h1>
            <p class="profile-email">${e.email}</p>
          </div>
        </div>

        <div class="profile-info">
          <p><strong>Login Method:</strong> ${"google"===e.loginMethod?"Google OAuth":"Manual Registration"}</p>
          <p><strong>Login Time:</strong> ${new Date(e.loginTime).toLocaleString()}</p>
        </div>
      </section>
    </main>
  `,document.getElementById("logout-btn")?.addEventListener("click",p),document.getElementById("post-event-btn")?.addEventListener("click",()=>{s()}),document.getElementById("view-events-btn")?.addEventListener("click",()=>{u()}),document.getElementById("profile-btn")?.addEventListener("click",()=>{o()}))}function s(){if(!e)return;let t=document.querySelector("#root");if(!t)return;t.innerHTML=`
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
            <div id="participants-list" class="participants-list">
              <!-- clickable user chips will be rendered here -->
            </div>
            <small class="hint">Kliknij nazwę użytkownika lub zdjęcie, aby dodać lub usunąć go z listy uczestnik\xf3w</small>
          </div>

          <div id="score-inputs" class="form-group">
            <!-- dynamic score inputs will be rendered here -->
          </div>

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
  `,document.getElementById("logout-btn")?.addEventListener("click",p),document.getElementById("profile-btn")?.addEventListener("click",()=>{o()}),document.getElementById("view-events-btn")?.addEventListener("click",()=>{u()}),document.getElementById("post-event-btn")?.addEventListener("click",()=>{s()});let a=document.getElementById("participants-list");if(a){if(a.innerHTML=n().map(e=>`
      <button type="button" class="participant-chip" data-user-id="${e.id}" title="${m(e.email)}" aria-pressed="false">
        <img src="${m(e.picture)}" alt="${m(e.name)}" class="chip-avatar" loading="lazy" decoding="async" />
        <span class="chip-name">${m(e.name)}</span>
      </button>
    `).join(""),Array.from(a.querySelectorAll(".participant-chip")).forEach(e=>{e.addEventListener("click",()=>{let t=e.classList.toggle("selected");e.setAttribute("aria-pressed",String(t)),e.classList.add("chip-animate"),window.setTimeout(()=>e.classList.remove("chip-animate"),260),c(r())}),e.addEventListener("keydown",t=>{("Enter"===t.key||" "===t.key)&&(t.preventDefault(),e.click())})}),e){let t=a.querySelector(`.participant-chip[data-user-id="${e.id}"]`);t&&(t.classList.add("selected"),t.setAttribute("aria-pressed","true"))}c(r())}let i=document.getElementById("event-form");i?.addEventListener("submit",t=>{t.preventDefault(),function(){if(!e)return;let t=document.getElementById("event-date").value,a=document.getElementById("event-time").value,i=document.getElementById("event-location").value,l=document.getElementById("event-games").value,o=r();if(!t||!a||!i)return alert("Please fill in all required fields");if(0===o.length)return alert("Please select at least one participant");let s=n(),c=o.map(e=>{let t=s.find(t=>t.id===e),n=document.getElementById(`score-${e}`),a=n?parseInt(n.value,10):NaN,i=isNaN(a)?null:a;return t?{id:t.id,name:t.name,email:t.email,picture:t.picture,score:i}:{id:e,name:e,email:"",score:i}}),d={id:"event-"+Date.now(),date:t,time:a,location:i,participants:c,games:l,createdBy:e.name,createdAt:new Date().toISOString()},p=[],m=localStorage.getItem("gameEvents");m&&(p=JSON.parse(m)),p.push(d),localStorage.setItem("gameEvents",JSON.stringify(p)),alert("Event posted successfully!"),u()}()})}function r(){let e=document.getElementById("participants-list");return e?Array.from(e.querySelectorAll(".participant-chip.selected")).map(e=>e.getAttribute("data-user-id")||"").filter(Boolean):[]}function c(e){let t=document.getElementById("score-inputs");if(!t)return;let a=n();if(t.innerHTML="",0===e.length){t.innerHTML='<p class="hint">Wybierz uczestników, aby ustawić wyniki.</p>';return}if(2===e.length){let n=a.find(t=>t.id===e[0]),i=a.find(t=>t.id===e[1]),l=n?m(n.name):m(e[0]),o=i?m(i.name):m(e[1]);t.innerHTML=`
      <label>Wynik meczu</label>
      <div class="score-inline compact">
        <span class="score-name">${l}</span>
        <input id="score-${e[0]}" class="score-input tiny" type="number" min="0" max="99" step="1" value="0" inputmode="numeric" />
        <span class="score-sep">:</span>
        <input id="score-${e[1]}" class="score-input tiny" type="number" min="0" max="99" step="1" value="0" inputmode="numeric" />
        <span class="score-name">${o}</span>
      </div>
      <small class="hint">Wprowadź kr\xf3tką liczbę (0–99). Kliknij nazwę lub zdjęcie, aby dodać/usuwać uczestnik\xf3w.</small>
    `,d(`score-${e[0]}`),d(`score-${e[1]}`);return}let i=e.map(e=>{let t=a.find(t=>t.id===e),n=t?m(t.name):m(e);return`
      <div class="participant-score-row">
        <label for="score-${e}" class="participant-score-label">${n}</label>
        <input id="score-${e}" class="score-input tiny" type="number" min="0" max="99" step="1" value="0" inputmode="numeric" />
      </div>
    `}).join("");t.innerHTML=`
    <label>Wyniki</label>
    <div class="scores-list">
      ${i}
    </div>
    <small class="hint">Wprowadź kr\xf3tkie liczby (0–99) dla każdego uczestnika.</small>
  `,e.forEach(e=>d(`score-${e}`))}function d(e){let t=document.getElementById(e);t&&(t.addEventListener("input",()=>{t.value=t.value.replace(/[^\d]/g,"");let e=parseInt(t.value||"0",10);isNaN(e)&&(e=0),e<0&&(e=0),e>99&&(e=99),t.value=String(e)}),t.addEventListener("blur",()=>{""===t.value&&(t.value="0")}))}function u(){let e=document.querySelector("#root");if(!e)return;let t=[],n=localStorage.getItem("gameEvents");n&&(t=JSON.parse(n));let a="";a=0===t.length?'<p class="no-events">No events posted yet. Be the first to post!</p>':t.map(e=>{let t=(()=>{if(!e.participants||0===e.participants.length)return"—";if(2===e.participants.length){let[t,n]=e.participants,a="number"==typeof t.score?String(t.score):"—",i="number"==typeof n.score?String(n.score):"—";return`${m(t.name)} ${m(a)} : ${m(i)} ${m(n.name)}`}return e.participants.map(e=>`${m(e.name)}${"number"==typeof e.score?` ${m(String(e.score))}`:""}`).join(", ")})();return`
      <div class="event-card">
        <div class="event-header">
          <h3>${m(e.location)}</h3>
          <p class="event-meta">Posted by ${m(e.createdBy)}</p>
        </div>
        <div class="event-details">
          <p><strong>Date:</strong> ${new Date(e.date).toLocaleDateString()}</p>
          <p><strong>Time:</strong> ${m(e.time)}</p>
          <p><strong>Participants:</strong> ${t}</p>
          <p><strong>Match:</strong> ${m(e.games||"—")}</p>
        </div>
      </div>
    `}).join(""),e.innerHTML=`
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

      <section class="events-section">
        <h2>Upcoming Events</h2>
        <div class="events-list">
          ${a}
        </div>
      </section>
    </main>
  `,document.getElementById("logout-btn")?.addEventListener("click",p),document.getElementById("profile-btn")?.addEventListener("click",()=>{o()}),document.getElementById("post-event-btn")?.addEventListener("click",()=>{s()}),document.getElementById("view-events-btn")?.addEventListener("click",()=>{u()})}function p(){localStorage.removeItem("userInfo"),e=null,window.google?.accounts.id.disableAutoSelect(),i()}function m(e){return e?String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"):""}!async function(){let n=localStorage.getItem("userInfo");if(n)try{(e=JSON.parse(n))&&a(e),o()}catch(e){console.error("Failed to parse user info:",e),await t(),i()}else await t(),i()}()})();