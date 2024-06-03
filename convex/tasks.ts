import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getTask = query({
  args: {},
  handler: async (ctx, arg) => {
    await ctx.db.query("tasks").collect();
  },
});

export const addTask = mutation({
  args: {
    text: v.string(),
  },
  handler: async (ctx, args) => {
    const taskId = await ctx.db.insert("tasks", {
      text: args.text,
      completed: false,
    });
    return taskId;
  },
});
