const {
    GraphQLID,
    GraphQLString,
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLFloat
  } = require("graphql");

const Product = require("../models/product");
const ProductType = require('./ProductType');

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addProduct: {
            type: ProductType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                img: { type: new GraphQLNonNull(GraphQLString) },
                price: { type: new GraphQLNonNull(GraphQLFloat) },
                description: { type: new GraphQLNonNull(GraphQLString) },
                category: { type: new GraphQLNonNull(GraphQLID) }
            },
            resolve(parent, args) {
                const { name, img, price, description, category } = args;
                const product = new Product({
                    name,
                    img,
                    price,
                    description,
                    category
                });

                return product.save();
            }
        }
    }
});

module.exports = Mutation;