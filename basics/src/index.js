import { GraphQLServer } from 'graphql-yoga'

// Type definitions (Schema)
const typeDefs = `
    type Query {
        welcome: String!
        name: String!
    }
`

// Resolvers
const resolvers = {
    Query: {
        welcome() {
            return "Welcome to GraphQL!!!"
        },
        name() {
            return "Richie"
        }
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start(() => {
    console.log("Server is running...")
})