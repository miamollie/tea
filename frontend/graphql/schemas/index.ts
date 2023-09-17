import { readFileSync } from "fs";
export const typeDefs = readFileSync("./graphql/schemas/schema.graphql", { encoding: "utf-8" });
