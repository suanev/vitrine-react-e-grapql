import { gql } from "apollo-boost";

const getProducts = gql`
  {
    products {
      id
      name
      img
      price
      quantity
      description
      category
    }
  }
`;

const getProductByID = gql`
  query($id: ID!) {
    product(id: $id) {
      id
      name
      img
      price
      quantity
      description
      category
    }
  }
`;

export { getProducts, getProductByID };