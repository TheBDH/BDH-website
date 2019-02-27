import React, { Component } from 'react';

class Tips extends Component {

  render(){

    return (
        <div id="container">
            <h1 className="header">
                <a className="title">Tips</a>
            </h1>

            <div class="column">
                <p>Is something going on at Brown that you want us to cover?</p>
                <p> We want to hear from you! Please use this form to let us know if you have any tips for us. You may provide contact information if you want, but the only required field is the message.</p>
            </div>

            <div id="right" class="column">
            <form method="POST" action="https://formspree.io/herald@browndailyherald.com"> 
                Message (*)<br/>
                <textarea name="message" rows="7" cols="45" required> </textarea>
                Name<br/>
                <input class="form" type="text" name="name"/><br/><br/>
                Email Address<br/>
                <input class="form" type="email" name="email"/><br/><br/>
                Phone Number<br/>
                <input class="form" type="phone" name="phone"/><br/><br/>
                <input class="send" type="submit" value="Send"/>
            </form>
            </div>

        </div>
    )
  }
}


export default Tips;
