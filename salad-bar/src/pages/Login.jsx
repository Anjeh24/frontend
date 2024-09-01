import React from 'react'

function Login() {

 


  return (
    <div>
       <div>
       <div class="loginform">
  <h2>Login to to save points</h2>
  <form>
    <input type="text" title="username" placeholder="username" /><br/>
    <input type="password" title="username" placeholder="password" /><br/>
    <button type="submit" class="btn" onClick={() => alert('login successful')}>Login</button><br/>
    <a class="forgot" href="#">Forgot Username?</a><br/>   {/**Login form for loyal clients. Credits, codepen */}
  </form>
</div>
       </div>
     

    </div>
  )
}

export default Login