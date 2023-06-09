const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utils/auth");
  
const resolvers = {
    
    Query: {
      me: async (parent, args, context) => {
        if (context.user) {
          const userData = await User.findOne({ _id: context.user._id }).select("-__v -password");
          return userData;
        }
        throw new AuthenticationError("Oops! You need to be logged in!");
      },
    },
    
    Mutation: {
      addUser: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);
        return { token, user };
      },
      
      login: async (parent, { email, password }) => {
        console.log('testing here')
        const user = await User.findOne({ email });
        const checkPassword = await user.isCorrectPassword(password);
  
        if (!user || !checkPassword) {
          throw new AuthenticationError("Oops! User or password incorrect!");
        }
  
        const token = signToken(user);
        console.log(token);
        return { token, user };
      },
    },
  };
  
  module.exports = resolvers;  