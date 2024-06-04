## Frontend and Backend Workflow
```
When we create a website, remember there is always a client and a server.
```
### Static Website:
Developer upload ready to server web files to the server. These files contain html, css, JavaScript and images of the websites.These are the actual files which server send to the client or browser during the request made to it. Then, browser render this as a web page. Remember that, there is no backend code , no backend server work and no application is running in the backend. The server simply serving static files HTML, CSS, JavaScrip etc. Wait you might think, when there is javaScript you might think the use javascript make an effect of Animations and other things. That dynamic which you mean is the context of Frontend development. For example, showing images in web page, handling events in the front-end.
```
Note: Dynamic means how the web pages generated in the server. In the case of static website, ther server serves the static files like HTML,javaScript etc.
```
### Dynamic Website:
Dynamic website are the dynamic because they are usually built with the server. Dynamic website consist of database, a backend application which is developed using backend technology, Backend technology might be Java, PHP, Csharp etc. This backend application fetches data from the database, together with predefined templates, it builds each page that user request dynamically, dynamic data coming from the database. So, here we are not serving static HTML, CSS and javascript. Here, we are building the website, generating the templates which contains html, css and javascripts but also contain the data which we retrieve from the database. Each time the browser request the page, the webpage build HTML, CSS, JavaScript. It sent back to the browser. Browser renders the dynamically generated HTML CSS and JavaScript and shows it to the User. Now, this whole process called Server side rendering. The browser which is rendered in the browser it is created in the server. This type of website is called Dynamic website because the website is built through the content coming out from the database. This content can be changed everytime when content of the database changes or user action in the webpages

Lets take a example of twitter, the tweets that is shown to you during logged in is completely different than others. Even you also see different tweets afte some time as well.

### How API Powered website work? How NodeJS is used for creating API powered website ?

An API allows two or more software to talk to each other. As a dynamic website, we also have database in the API Powered server. it works same like dynamic website but the big difference is that we send the Data in response based on the request made by the client. We don’t send the HTML in the response, this response of the data which we send to the client usually on the json format.
```
In case of web API powered website development, there are two major steps.
1.Building an API
2.Consuming that API on the client side
```
The proper front end is built based on the API. So, it is most often called client side rendered whereas Dynamic website called Server side rendered.

The main advantage of API is that it is not consumed by browser, it can be consumed by IOS App and Android App.

suppose lets take a example: 

```www.nirajanacharya.com/api/course```

when user hits this url request, the server will reponse with data in the json.

The possibility is endless when we build API powered website.

