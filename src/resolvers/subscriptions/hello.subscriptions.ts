import { Resolver, Subscription, prop, ctx } from "@gustavo0197/graphql-typescript";
import { pubsub } from "@utils";

@Resolver
export default class HelloSubscriptionsResolver {
  @Subscription("Hello")
  public hello(@prop("name") name: string, @ctx("auth") auth: any) {
    console.log("name; ", name);
    console.log("auth: ", auth);

    return pubsub.asyncIterator("HELLO");
  }
}
