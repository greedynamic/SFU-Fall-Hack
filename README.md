# SFU-Fall-Hack
2022 Fall Hack at SFU
Theme: At the Nick of Time

This is a React project that utilizes bootstrap, mongodb and PWA (Progressive Web Application)

Everyone loves going to events. You spend an exorbitant ammount of money on some tickets for you and your friends, and plan out your activity for the day. Sadly, not everything always goes to plan. When one of your friends has to cancel last minute, you lay there not knowing what to do with your now wasted ticket. Last Menute Ticket acts as the solution for that problem, by allowing users to sell their tickets on our platform! Other users will then get notifications whenever a new ticket may be interested is available, and our platform will then allow users to see a dashboard of events and how to get into contact with the person selling that ticket!


## Setting up the environment

Running the Front-end
```bash
cd ./SFU-Fall-Hack/client
npm i                           //install dependencies
npm start                       //run on localhost port:3000       
```

Running the Back-end (on a seperate terminal)
```bash
cd ./SFU-Fall-Hack/backend
npm install express cors mongodb dotenv     //install dependencies
nodemon server                              //run on localhost port:5001
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. (running npm start should automatically open up the tab)
