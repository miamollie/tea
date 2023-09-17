const resolvers = {
  Query: {
    books: async () => {
      try {
        return [{ title: "a book", author: "person" }];
      } catch (error) {
        throw new Error("Something went wrong");
      }
    },
  },
};

export default resolvers;
