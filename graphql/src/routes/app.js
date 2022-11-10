const express = require('express');
const app = express();
const rootValue = require('../graphql/rootValue')
const schema = require('../graphql/schema')
const graphqlHTTP = require('express-graphql').graphqlHTTP;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("port", process.env.PORT || 3000);
 
app.use(
    '/',
    graphqlHTTP({   
        schema,
        rootValue, 
        graphiql: true, // support GUI 
    }),
);
app.listen(app.get("port"), () => {
    console.log(`${app.get("port")} port start`);
}); 

