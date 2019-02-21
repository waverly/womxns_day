const Mutations = {
  async createWoman(parent, args, ctx, info) {
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
};

module.exports = Mutations;
