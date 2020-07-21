//const populate = ``;

function changeTheme() {

   document.getElementById('container').style.color = 'red';

   document.getElementById('dynamic-main').style.backgroundColor = "aliceblue";
   document.getElementById('dynamic-main').style.backgroundImage = "none";
   document.getElementById("footer").style.backgroundColor = "aliceblue";

   document.getElementById("full-head").style.backgroundColor = "aliceblue";

   document.getElementById("full-head").style.backgroundImage = "none";

}

function stepOne() {

   const populate = `

      <h3>Welcome to the Constellation Project</h3>

      <p>Welcome to step #1 of getting you prepared to help out with the <strong>Constellation app</strong></p>
      
      <video id="main-vid" width="400" height="250" controls>
               <source src="http://techslides.com/demos/sample-videos/small.ogv" type="video/ogg">
               Your browser doesn't support my bad code
            </video>
   
      <p>This graph below depicts the DevOps workflow which is the Project Management method we use to build this app</p>

      <a target="_blank" href="images/devops.png">
               <img id="main-image" src="images/devops.png" alt="DevOps graph">
            </a>

   <p>To learn more about DevOps, here is this <a href="https://en.wikipedia.org/wiki/DevOps">Wiki article</a>
   
`
   document.getElementById("dynamic-main").innerHTML = " ";

   document.getElementById("dynamic-main").innerHTML = populate;

}

function stepTwo() {

   const populate = `

      <h3>Getting to know your teammates and tools</h3>

      <p>You need to know your team, so here's a bad video of me singing for a class. Dont watch it, I'm just kidding.</p>

      
      <video id="main-vid" width="400" height="250" controls>
               <source src="videos/sing-aladdin.mp4" type="video/mp4">
               Your browser doesn't support my bad code
            </video>

      <p>Here at Constellation we use many online tools to help us acheive. Trello is one such tool</p>
   
      <p>This is a sample image of Trello. Trello is a KanBan board that allows us to visualize our sprints.</p>

      <a target="_blank" href="images/trello-example.jpg">
               <img id="main-image" src="images/trello-example.jpg" alt="DevOps graph">
            </a>

   <p>To learn more about Trello, here is this <a href="https://www.youtube.com/watch?v=l3F3l3psqXY">YouTube video</a>
   
`
   document.getElementById("dynamic-main").innerHTML = " ";

   document.getElementById("dynamic-main").innerHTML = populate;

}

function stepThree() {

   const populate = `

      <h3>How can I participate?</h3>

      <p>It can be daunting starting out to know what you can do to help add value to the Constellation project. Thankfully, we know and have experienced that as well. This video is too give a quick overview of how to participate.</p>

      
      <video id="main-vid" width="400" height="250" controls>
               <source src="" type="video/mp4">
               Your browser doesn't support my bad code
            </video>

      <p>One of the best ways to get going and start participating is to join in on the daily scrum.</p>
   
      <p>These daily scrums take play every weekday from 8:30am to 9:00am. Here is an example image of what a virtual scrum over Zoom looks like.</p>

      <a target="_blank" href="images/scrum-example.jpg">
               <img id="main-image" src="images/scrum-example.jpg" alt="DevOps graph">
            </a>

   <p>To learn more about daily scrums, here is this <a href="https://www.youtube.com/watch?v=xcC0LmkzG9g">YouTube video</a>
   
`
   document.getElementById("dynamic-main").innerHTML = " ";

   document.getElementById("dynamic-main").innerHTML = populate;

}

function stepFour() {

   const populate = `

      <h3>Invite others to come help develop or use Constellation</h3>

      <p>Once you feel comfortable with participating and helping out, it's time to invite friends to participate as well.</p>

      
      <video id="main-vid" width="400" height="250" controls>
               <source src="" type="video/mp4">
               Your browser doesn't support my bad code
            </video>

      <p>Whether they are here just to use the app or to help develop, everyone is needed to help make this project come to pass.</p>
   
      <p>Here is an example of what the Analyst group has come up with when it comes to getting people to use Constellation.</p>

      <a target="_blank" href="images/ModelStorm-External Analysis.png">
               <img id="main-image" src="images/ModelStorm-External Analysis.png" alt="DevOps graph">
            </a>

   <p>Draw.io was used to create this. Here is a link to learn more about draw.io. <a href="https://www.youtube.com/watch?v=Z0D96ZikMkc">YouTube video</a>
   
`
   document.getElementById("dynamic-main").innerHTML = " ";

   document.getElementById("dynamic-main").innerHTML = populate;

}
