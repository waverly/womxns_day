const { prisma } = require("../generated/prisma-client");

const Mutations = {
  async createWoman(parent, args, ctx, info) {
    const slug = args.slug;
    const slugExists = await prisma.$exists.woman({
      slug: slug
    });

    console.log("inside create woman mutation, args should be below");
    console.log(slug, "slug exists should be after this", slugExists);
    console.log(args);

    if (slugExists) {
      console.log("not adding this to DB");
      return null;
    } else {
      console.log("adding this to DB");
      const woman = await ctx.db.mutation.createWoman(
        {
          data: {
            ...args
          }
        },
        info
      );

      return woman;
    }
  }
};

module.exports = Mutations;
