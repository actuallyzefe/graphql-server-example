import Influencer from "./models/influencer.model.js";
import Post from "./models/post.model.js";
import Product from "./models/product.model.js";

export const typeDefs = `#graphql
  type Influencer {
    id: ID
    name: String
    surname: String
    nickname: String
    gender: String
  }

  type Post {
    id: ID
    socialMedia: String
    influencerId: ID
    description: String
    image: String
    likes: Int
    comments: Int
    takenAt: String
  }

  type Product {
    id: ID
    attributes: [Attribute]
    colors: [Color]
    clothe: String
    postId: ID
  }

  type Attribute {
    key: String
    value: String
  }

  type Color {
    main: String
    hexCode: String
    code: String
  }


  type Mutation {
    createInfluencer(name: String!, surname: String!, nickname: String!, gender: String!): Influencer
    createPost(socialMedia: String!, influencerId: ID!, description: String!, image: String!, likes: Int!, comments: Int!, takenAt: String!): Post
    createProduct(attributes: [AttributeInput]!, colors: [ColorInput]!, clothe: String!, postId: ID!): Product
  }

  type Query {
    influencers: [Influencer]
    posts: [Post]
  }

   input AttributeInput {
    key: String
    value: String
  }

  input ColorInput {
    main: String
    hexCode: String
    code: String
  }
`;
export const resolvers = {
  Query: {
    influencers: async () => {
      try {
        const influencers = await Influencer.find();
        return influencers;
      } catch (err) {
        console.log(err);
        return null;
      }
    },

    posts: async () => {
      try {
        const posts = await Post.find();
        return posts;
      } catch (err) {
        console.log(err);
        return null;
      }
    },
  },

  Mutation: {
    createInfluencer: async (_, { name, surname, nickname, gender }) => {
      try {
        const influencer = new Influencer({ name, surname, nickname, gender });

        return influencer;
      } catch (err) {
        console.log(err);
        return null;
      }
    },

    createPost: async (
      _,
      {
        socialMedia,
        influencerId,
        description,
        image,
        likes,
        comments,
        takenAt,
      }
    ) => {
      try {
        const post = new Post({
          socialMedia,
          influencerId,
          description,
          image,
          likes,
          comments,
          takenAt,
        });
        return post;
      } catch (err) {
        console.log(err);
        return null;
      }
    },

    createProduct: async (_, { attributes, colors, clothe, postId }) => {
      try {
        const product = new Product({
          attributes,
          colors,
          clothe,
          postId,
        });

        return product;
      } catch (err) {
        console.log(err);
        return null;
      }
    },
  },
};
