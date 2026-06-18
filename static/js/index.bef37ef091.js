(()=>{"use strict";function e(){let e,n,i,l,a=document.querySelector("#root");a&&(a.innerHTML=`
    <main class="page-shell">
      <section class="hero-card">
        <div class="brand">
          <span class="brand-mark">M</span>
          <div>
            <h1>Malpigaj</h1>
            <p>Simple responsive homepage with Google login and registration.</p>
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
  `,(e=document.getElementById("google-signin-button"))&&window.google?(window.google.accounts.id.initialize({client_id:"520549623097-9oegvlig2kc1dbr9c5o9bu3dah38coll.apps.googleusercontent.com",callback:o}),window.google.accounts.id.renderButton(e,{theme:"outline",size:"large",width:"100%",text:"signin_with"})):console.error("Google Sign-In button container or google object not found"),n=document.getElementById("toggle-register"),i=document.getElementById("register-form"),l=document.querySelector(".auth-actions"),n?.addEventListener("click",()=>{i?.style.display==="none"?(i.style.display="grid",l.style.display="none"):(i.style.display="none",l.style.display="grid")}),i?.addEventListener("submit",e=>{e.preventDefault();let o=document.getElementById("name")?.value,n=document.getElementById("email")?.value;if(o&&n){let e={id:"manual-"+Date.now(),name:o,email:n,picture:`https://ui-avatars.com/api/?name=${encodeURIComponent(o)}`,loginMethod:"manual",loginTime:new Date().toISOString()};localStorage.setItem("userInfo",JSON.stringify(e)),t(e)}}))}function o(e){let o=function(e){try{let o=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),t=decodeURIComponent(atob(o).split("").map(e=>"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)).join(""));return JSON.parse(t)}catch(e){return console.error("Failed to decode JWT:",e),null}}(e.credential);if(!o)return void console.error("Failed to decode token");console.log("Google Sign-In successful:",o);let n={id:o.sub,name:o.name,email:o.email,picture:o.picture,loginMethod:"google",loginTime:new Date().toISOString()};localStorage.setItem("userInfo",JSON.stringify(n)),t(n)}function t(e){let o=document.querySelector("#root");o&&(o.innerHTML=`
    <main class="page-shell">
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

        <button class="button button-primary" id="logout-btn" type="button">Logout</button>
      </section>
    </main>
  `,document.getElementById("logout-btn")?.addEventListener("click",n))}function n(){localStorage.removeItem("userInfo"),window.google?.accounts.id.disableAutoSelect(),e()}let i=localStorage.getItem("userInfo");if(i)try{let e=JSON.parse(i);t(e)}catch(o){console.error("Failed to parse user info:",o),e()}else e()})();