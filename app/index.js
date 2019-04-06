const { GraphQLServer } = require('graphql-yoga')
const { importSchema } = require('graphql-import')
const { makeExecutableSchema } = require('graphql-tools') 
const db = require('./utils/DataBase')
const typeDefs = importSchema('./app/schema.graphql')
const resolvers = require('./resolvers')

const PORT = process.env.PORT 

const connection = db.connectDB()

connection.then(() => {
  console.log('DB Connected')
}).catch((err) => {
  console.log(err)
})

const schema = makeExecutableSchema({typeDefs, resolvers})

const options = {
	port: process.env.PORT || 8000,
	cors:{
		origin:"*"
	}
};

const server = new GraphQLServer({schema})

server.start(options, (({port}) => console.log('Server Connected')))

