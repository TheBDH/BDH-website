import React, { Component } from 'react';

class Questions extends Component {

  render(){

    return (
        <div id="container">
            <h1 className="header">
                <a className="title">Questions and Comments</a>
            </h1>

            <div class="column">
                <p>We want to hear from you!</p>
                <p>Do you have a question about the publication? Would you like to make a suggestion? Please use this form and let us know what's on your mind. Please note that any contact/personal information is entirely optional.</p>
            </div>

            <div id="right" class="column">
            <form method="POST" action="https://formspree.io/herald@browndailyherald.com">
                Name<br/>
                <input class="form" type="text" name="name"/><br/><br/>
                Title/Position<br/>
                <input class="form" type="text" name="title"/><br/><br/>
                Subject<br/>
                <input class="form" type="text" name="subject"/><br/><br/>
                Question (*)<br/>
                <textarea name="Question" rows="7" cols="45" required> </textarea> <br/>
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


export default Questions;
