const axios = require('axios');

const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLBoolean,
    GraphQLList, 
    GraphQLSchema
} = require('graphql');

// Launch Type
const LaunchType = new GraphQLObjectType({
name: 'Launch', 
fields: () => ({
    flight_number: {type: GraphQLInt },
    name: {type: GraphQLString },
    details: {type: GraphQLString },
    date_local: {type: GraphQLString },
    success: {type: GraphQLBoolean },
    rocket: {type: RocketType }
})
});

// rocket type
const RocketType = new GraphQLObjectType({
name: 'Rocket', 
fields: () => ({
    Rocket: {type: GraphQLString}
})
});

// root query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        launches: {
            type: new GraphQLList(LaunchType),
            resolve(parent, agrs) {
                return axios.get('https://api.spacexdata.com/v4/launches')
                .then(res => res.data);
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery 
});