const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
  _id: ID
  username: String
  email: String
  bookCount: Int
  savedBooks: [Book]
}

type Book {
bookId: Int
authors: [] - not sure on this one
description: String
title: String
image:
link: 
}

type Auth {
  token: Int
  user: User
}

type Query {
me: User
}

type Mutation {
login:
addUser
saveBook
removeBook
}
`;

module.exports = typeDefs;
