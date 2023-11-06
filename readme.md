over here we first created a different folders for backend and frontend 
and after creating that jumped into backend and and created a json file 
over there given a typen to module .
by typing in terminal "npm init -y".
installed two dependencies 1. express  2.nodemon
created a index file imported express from express 
and created a config file for port
imported config file to index.js
and used port in the app using app.listen function which has a call back function console the port number.
and our server is running.

///// http route ////

created our first http route using app.get method and "/"  and call back function which takes two arguments request and response

//// add mongodb and mongoose to node.js //// 

signed in with mongo db 
created a databse drives and copied the url and assigned to a variable in config.js
exported to app and used with mongoose.connect.then.cacth
installed mongoose library which is popularly used  for mongodb 

/// create a book model with mongoose ///
quick look at mongoose.com
created a book model in model folder using mongoose.model
and also crated a object mobel for book 

/// save a new book with mongoose ////
lets create a new book (post method)

/// get all books with mongoose ///
applied get method added async and await method to get all books
using books.find method

/// Get one book id with mongoose ///

applied get method with particular id and founded a book according the need 

/// update a book using particular id ///
put method is used to update a book used same method as  filtering the database with particular id 

/// deleting a book usind mongoose library //
delete method using mongoose library 

// refactor Node js with express router //
 as of now we were using it for one model what if we have 8 to more models each models need 5 routes 
 which is not a good practise .
 in this situation we can use express routers.
 then we must create a file for http routes.
 import to index.js and app.use("/books", bookroutes)

 <!-- CORS policy in NOde js and express js -->

 cross origin resource sharing ,
 CORS policy is security mechanism in web browser that restricts ability of the web page to make request to different domain.
 but how can we fix it .. in node its easy
 npm i cors ...
 we can use cross origin resource sharing in two options refer code one is default and other is custom

 <!-- oK NOW We are stepping to create a react project, vite , tailwind CSS  -->

 created frontend react project using vite and react and installed tailwind css . configured and ready to use

 <!-- SPA and add react router dom  -->

 installled react-router-dom and binded in the main.js and in app routes and routed through various pages

 <!-- show book list in react -->
 there was a bug because used cors after endpoints so its shown the bugs .....
 fixed it and reander the data with react ui in frontend....


 <!-- show book details in react  -->

 same as creates a back button component and added a alink to home page.
 using params taken id and using that id fetched the data using axios. reponse data is displayed to the UI using Jsx .

 <!-- create a book using react -->

using axios post method created a new data set to database in create book page...

<!-- edit book in react -->


same as create book first using axios we fetch data with id from the database . the data is rendered in the ui , instead of post method we use put method in handle editBook Function and update the database

<!-- delete a book using react and mongodb -->









