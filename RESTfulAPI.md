### Rest API


To build rest API, API that follows rest API architecture we need to follow few principles

we need to seperate our API into logical resources. 
The key abstraction in the REST is resources. Therefore, all the data that we shared through API should be divided into logical resouces. A resouces is a represtentation or object which has some data associate with it. For examples movies, users etc. Any information that is kept with name is called resouces. Remember, it should be the name, not a virb
 Then these resouces then should be exposed, that means they should be available structured resouce based url that the client can send request to.  Here for example : www.proacademy.com/addmovies. This entire address is called the url. This addmovies is the api end points.An api might have different end points like getmovies, deletemovies, update movies and so on. 


Each endpoints send different data back to the clients or perform different actions. These getmovies will get all the movies and return to users. Endpoints perform different actions and provide different data. There is something wrong you can see. As we had studied earlier that endpoints should contain noun not a verb. If you observe this endpoint, you will realize that these all are verb. 


api end points are verb. To perform reading, adding and deleting, the right http request should be used by api. So, end points always contain the resources not a an action to be performed. 



How should we use HTTP method in practice?

lets understand getmovies endpoints, this getmovies endpoints is all about getting data related to movies. Simple we put the endpoints name movies and send the data whenever a get request is made to the end point. If you noticed, there is resources not a verb. We use also HTTP word. In a simple word, whenever a client made request to this end points, we send the details about all the movies in response and just like this we have resource in the url. Verb is in the HTTP method. I call it as movies because it is plural.  

if we want a specific movies or 21th movie, we add another slash /21 or search query or name of the movies instead of ID or we can use some other IDentifier. if client wants to read the data from the database, a get method is invoked, if wants to add then post method is used. 



if made getMovieByuser endpoints to collect the movies pointed by user- for that we can use get http request with api /users/21/Movies as a resource.

The data we send response to the client or the data that we receive from the client body’s. It should be in a json format. 

Before sending the data to the client, we do simple response formatting. There are a couple of standard for this. We are going to follow very simple jsend JSON data format. In jsend JSON data format, we simply create an object with status property which can be success, fail or error to inform the client about the status. Then we create a data property which will contain a original data which we are going to send in the response to the client. We can also add couple of more properties but this is the simple way of formatting our response. 



we have original json data on the left and we have documented jsend json data to be sent on the right. 

As you can see, in Jsend Json formatting we have wrapped the original data with another object and this is called as enveloping. It is common practice to mitigate security issues and other problems. There are other standards that you can look up to like JSON API, or Data Json protocol


Another most import property of Rest API is that they should be stateless

Stateless means all the state handle on the client not on the server. For example, whether user is logged in, whether user is in current page out of other. Server need to remember other request in order to address the current request. 

suppose we are in page 3 and we want to move to the next page 4. For that we have a endpoints /movies/nextPage.Whenver the get request is made, the server should figure where the current page is and based on that send response to the client.Server would have to remember the previous request. That is what exactly we want to avoid in the restful api. To do so, instead of creating endpoints like /movies/nextPage, we can do by /movies/page/4.


in this way, we handle the request of the client. 
