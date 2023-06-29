import { ApolloServerOptions } from "@apollo/server";

declare module "@apollo/server" {
  export class ApolloServer<TContext> {
    constructor(config: ApolloServerOptions<TContext>);

    public startInBackgroundHandlingStartupErrorsByLoggingAndFailingAllRequests(): void;
  }
}
