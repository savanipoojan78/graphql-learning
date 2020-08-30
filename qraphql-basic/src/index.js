import { GraphQLServer,PubSub } from 'graphql-yoga'

import db from './db'
import Query from '../resolvers/Query'
import Mutation from '../resolvers/Mutation'
import Comment from '../resolvers/Comment'
import Post from '../resolvers/Post'
import User from '../resolvers/User'
import Subscription from '../resolvers/subscription'

const pubsub=new PubSub();
const server = new GraphQLServer({
    typeDefs:'./src/schema.graphql',
    resolvers:{
        Query,
        Comment,
        Subscription,
        Post,
        User,
        Mutation
    },
    context:{
        db,
        pubsub
    }
})

server.start(() => {
    console.log('The server is up!')
})