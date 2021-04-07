import { fileLoader } from "merge-graphql-schemas";
import { join } from "path";
import { getResolvers } from "@gustavo0197/graphql-typescript";

const resolvers = fileLoader(join(`${__dirname}/*.resolver.ts`), {
  extensions: [".ts"],
});

export default getResolvers(resolvers);
