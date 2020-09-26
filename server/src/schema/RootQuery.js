const {
    GraphQLID,
    GraphQLList,
    GraphQLObjectType,
  } = require("graphql");
const Product = require("../models/product");
const ProductType = require("./ProductType");

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        product: {
            type: ProductType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Product.findById(args.id);
            }
        },
        products: {
            type: new GraphQLList(ProductType),
            resolve(parent, args) {
                return Product.find({});
            }
        }
    }
});

module.exports = RootQuery;