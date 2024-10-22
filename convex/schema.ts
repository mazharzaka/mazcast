import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  podcasts: defineTable({
    user: v.id("user"),
    podcasttitle: v.string(),
    podcastdes: v.string(),
    author: v.string(),
    authorid: v.string(),
    viocepromt: v.string(),
    imagepromt: v.string(),
    type: v.string(),
    authorimage: v.string(),
    aduio: v.optional(v.string()),
    Podcastid: v.optional(v.id("_storge")),
    image: v.optional(v.id("_storge")),
    Podcastimage: v.optional(v.string()),
    audioduretion: v.number(),
    views: v.number(),
  })
    .searchIndex("search_author", { searchField: "author" })
    .searchIndex("search_podcasttitle", { searchField: "podcasttitle" })
    .searchIndex("search_body", { searchField: "podcastdes" }),
  users: defineTable({
    email: v.string(),
    imageUrl: v.string(),
    name: v.string(),
    clerkId: v.string(),
  }),
});
