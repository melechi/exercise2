# Exercise 2

## Criteria

This exercise has the following criteria:

**NOTE**: For this excercise the code DOES need to be working.

1. Using "Create React App" build a react application and update the UI using Bootstrap/MaterialUI

2. Create a mock api from a static json file using either:
	
	* GraphQL: `https://github.com/marmelab/json-graphql-server`
	* REST: `https://github.com/typicode/json-server`

3. Create a view in react that now displays data from your api

4. Now write a search component that allows a user to search for records in the db (client side is ok)

5. Write a higher order component that does some validation on the search page before loading the data. 

## Implementation

1. Completed with Bootstrap 4 and Reactstrap.
2. Completed with the use of Json Server
3. Completed. Two views exist, both in /src/pages.
    * HomePage - Landing page. Nothing special.
    * ArticlesPage - View which uses /src/stores/ArticleStore.js and the json-server to read and render the articles to the page.
4. Completed. The component is in /src/components/Search.js. It filters based on the store it is provided.
5. Completed. ArticlesPage is the HOC and it is passing the store and hooking the validation method "onBeforeFilter".
 
Note that for this I have used mobx. Recently I have moved my projects to use mobx instead of redux as it is simply an amazing react library which simplifes and speeds up development time through the use of HOC wrappers and observables.

It is especially useful for small projects or websites (like this example) where you don't want to burn a lot of time in development.

Typically I don't use "Create React App" as I have my own starter pack that I'm used to using. This also allows mobx to use decorators (not available with Create React App unless you eject!) which simplifes and cleans up the code even more.

## Running

To run this, simply open up two terminals.

In the first type:
`npm run start-server`

In the second type:
`npm start`