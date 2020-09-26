const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLFloat
} = require('graphql');

const ProductType = new GraphQLObjectType({
    name: "Product",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        img: { type: GraphQLString },
        price: { type: GraphQLFloat },
        description: { type: GraphQLString },
        category: { type: GraphQLString },
    })
});

module.exports = ProductType;