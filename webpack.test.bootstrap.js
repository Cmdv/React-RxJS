var context = require.context("./src", true, /__test__\/\S+\.js$/);
context.keys().forEach(context);
