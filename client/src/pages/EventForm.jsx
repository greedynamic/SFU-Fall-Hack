function Login() {
    return (
      <body>
        <div class="login">
            <h1>Event Form</h1>
            <form>
                <div class="eventForm-group">
                    <label for="ticketName">Ticket Name: </label>
                    <input type="ticketName" id="ticketName"></input>
                </div>
                <div class="eventForm-group">
                    <label for="Location">Location: </label>
                    <input type="location" id="location"></input>
                </div>
                <div class="eventForm-group">
                    <label for="timeDate">Time/Date : </label>
                    <input type="timeDate" id="timeDate"></input>
                </div>
                <div class="eventForm-group">
                    <label for="originalCost">Original Cost: </label>
                    <input type="originalCose" id="originalCost"></input>
                </div>
                <div class="eventForm-group">
                    <label for="contact">Prefered way to contact: </label>
                    <input type="contact" id="contact" placeholder="@example"></input>
                </div>
                <input type="submit" value="POST"></input>
            </form>
        </div>
      </body>
       
    );
  }
  
  export default Login;
