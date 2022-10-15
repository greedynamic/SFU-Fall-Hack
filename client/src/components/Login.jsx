function Login() {
    return (
      <body>
        <div class="login">
            <h1>Login</h1>
            <form>
                <div class="form-group">
                    <label for="email">Email address</label>
                    <input type="email" id="email"></input>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password"></input>
                </div>
                <input type="submit" value="SIGN IN"></input>
            </form>
        </div>
      </body>
       
    );
  }
  
  export default Login;