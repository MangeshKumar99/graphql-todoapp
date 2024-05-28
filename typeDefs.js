// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
 export const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Todo {
    userId: Int!
    id: Int!
    title: String!
    completed: Boolean!
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "todos" query returns an array of zero or more Todos (defined above).
  type Query {
    todos: [Todo]
  }
  type TodoInput {
    userId: Int!
    title: String!
    completed: Boolean!
  }
  input TodoInput {
    userId: Int!
    title: String!
    completed: Boolean!
  }
  input UpdateTodoInput {
    id: Int!
    title: String!
    completed: Boolean!
  }
  input DeleteTodoInput {
    id: Int!
  }

  type Mutation {
    createTodo(input: TodoInput!): Todo!
    updateTodo(input: UpdateTodoInput!): String!
    deleteTodo(input: DeleteTodoInput!): String!
  }
`;