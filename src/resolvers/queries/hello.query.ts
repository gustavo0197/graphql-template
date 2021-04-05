import { Resolver, Query, prop } from "@gustavo0197/graphql-typescript";

@Resolver
export default class HelloResolver {
  @Query("Hello")
  public hello(@prop("name") name: string, @prop("lastname") lastname: string) {
    if (name || lastname) {
      return `Hi there, ${name} ${lastname}`;
    }

    return "Hi there";
  }
}
