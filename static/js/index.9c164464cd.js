(()=>{"use strict";let e=null;function t(){return new Promise(e=>{if(window.google)e();else{let t=0,n=setInterval(()=>{window.google&&(clearInterval(n),e()),++t>50&&(clearInterval(n),console.error("Google API failed to load"),e())},100)}})}function n(){let t,n,l,i,s=document.querySelector("#root");s&&(s.innerHTML=`
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
  `,t=document.getElementById("toggle-register"),n=document.getElementById("register-form"),l=document.querySelector(".auth-actions"),t?.addEventListener("click",()=>{n?.style.display==="none"?(n.style.display="grid",l.style.display="none"):(n.style.display="none",l.style.display="grid")}),n?.addEventListener("submit",t=>{t.preventDefault();let n=document.getElementById("name")?.value,o=document.getElementById("email")?.value;if(n&&o){let t={id:"manual-"+Date.now(),name:n,email:o,picture:`https://ui-avatars.com/api/?name=${encodeURIComponent(n)}`,loginMethod:"manual",loginTime:new Date().toISOString()};localStorage.setItem("userInfo",JSON.stringify(t)),e=t,a()}}),(i=document.getElementById("google-signin-button"))?window.google?(window.google.accounts.id.initialize({client_id:"520549623097-9oegvlig2kc1dbr9c5o9bu3dah38coll.apps.googleusercontent.com",callback:o}),window.google.accounts.id.renderButton(i,{theme:"outline",size:"large",width:"100%",text:"signin_with"})):console.error("Google object not available"):console.error("Google Sign-In button container not found"))}function o(t){let n=function(e){try{let t=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),n=decodeURIComponent(atob(t).split("").map(e=>"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)).join(""));return JSON.parse(n)}catch(e){return console.error("Failed to decode JWT:",e),null}}(t.credential);if(!n)return void console.error("Failed to decode token");console.log("Google Sign-In successful:",n);let o={id:n.sub,name:n.name,email:n.email,picture:n.picture,loginMethod:"google",loginTime:new Date().toISOString()};localStorage.setItem("userInfo",JSON.stringify(o)),e=o,a()}function a(){if(!e)return;let t=document.querySelector("#root");t&&(t.innerHTML=`
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
  `,document.getElementById("logout-btn")?.addEventListener("click",s),document.getElementById("post-event-btn")?.addEventListener("click",()=>{l()}),document.getElementById("view-events-btn")?.addEventListener("click",()=>{i()}),document.getElementById("profile-btn")?.addEventListener("click",()=>{a()}))}function l(){if(!e)return;let t=document.querySelector("#root");if(!t)return;t.innerHTML=`
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
            <label for="event-participants">Number of Participants</label>
            <input id="event-participants" name="participants" type="number" placeholder="e.g., 4" min="1" required />
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="event-games">Games</label>
              <input id="event-games" name="games" type="number" placeholder="e.g., 3" min="1" required />
            </div>
            <div class="form-group">
              <label for="event-sets">Sets per Game</label>
              <input id="event-sets" name="sets" type="number" placeholder="e.g., 2" min="1" required />
            </div>
          </div>

          <button class="button button-primary" type="submit">Post Event</button>
        </form>
      </section>
    </main>
  `,document.getElementById("logout-btn")?.addEventListener("click",s),document.getElementById("profile-btn")?.addEventListener("click",()=>{a()}),document.getElementById("view-events-btn")?.addEventListener("click",()=>{i()}),document.getElementById("post-event-btn")?.addEventListener("click",()=>{l()});let n=document.getElementById("event-form");n?.addEventListener("submit",t=>{t.preventDefault(),function(){if(!e)return;let t=document.getElementById("event-date").value,n=document.getElementById("event-time").value,o=document.getElementById("event-location").value,a=document.getElementById("event-participants").value,l=document.getElementById("event-games").value,s=document.getElementById("event-sets").value;if(!t||!n||!o||!a||!l||!s)return alert("Please fill in all fields");let r={id:"event-"+Date.now(),date:t,time:n,location:o,participants:a,games:l,sets:s,createdBy:e.name,createdAt:new Date().toISOString()},d=[],c=localStorage.getItem("gameEvents");c&&(d=JSON.parse(c)),d.push(r),localStorage.setItem("gameEvents",JSON.stringify(d)),alert("Event posted successfully!"),i()}()})}function i(){let e=document.querySelector("#root");if(!e)return;let t=[],n=localStorage.getItem("gameEvents");n&&(t=JSON.parse(n));let o="";o=0===t.length?'<p class="no-events">No events posted yet. Be the first to post!</p>':t.map(e=>`
      <div class="event-card">
        <div class="event-header">
          <h3>${e.location}</h3>
          <p class="event-meta">Posted by ${e.createdBy}</p>
        </div>
        <div class="event-details">
          <p><strong>Date:</strong> ${new Date(e.date).toLocaleDateString()}</p>
          <p><strong>Time:</strong> ${e.time}</p>
          <p><strong>Participants:</strong> ${e.participants}</p>
          <p><strong>Games:</strong> ${e.games}</p>
          <p><strong>Sets per Game:</strong> ${e.sets}</p>
        </div>
      </div>
    `).join(""),e.innerHTML=`
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
          ${o}
        </div>
      </section>
    </main>
  `,document.getElementById("logout-btn")?.addEventListener("click",s),document.getElementById("profile-btn")?.addEventListener("click",()=>{a()}),document.getElementById("post-event-btn")?.addEventListener("click",()=>{l()}),document.getElementById("view-events-btn")?.addEventListener("click",()=>{i()})}function s(){localStorage.removeItem("userInfo"),e=null,window.google?.accounts.id.disableAutoSelect(),n()}!async function(){let o=localStorage.getItem("userInfo");if(o)try{e=JSON.parse(o),a()}catch(e){console.error("Failed to parse user info:",e),await t(),n()}else await t(),n()}()})();