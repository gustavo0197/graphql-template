import { Resolver, Query, Mutation, Subscription, prop, ctx } from "@gustavo0197/graphql-typescript";
import { pubsub } from "@utils";

@Resolver
export default class HelloResolver {
  @Query("HelloQuery")
  public helloQuery(@prop("name") name: string, @prop("lastname") lastname: string) {
    return `Hi there ${name ? name : ""} ${lastname ? lastname : ""}`;
  }

  @Mutation("HelloMutation")
  public helloMutation(@prop("name") name: string) {
    pubsub.publish("HELLO", { Hello: name });
    return `Hi there, ${name} from Hello mutation`;
  }

  @Subscription("HelloSubscription")
  public helloSubscription(@prop("name") name: string, @ctx("auth") auth: any) {
    console.log("name; ", name);
    console.log("auth: ", auth);

    return pubsub.asyncIterator("HELLO");
  }
}
