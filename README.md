## GraphQL `no-cache` issue example

    # npm install
    # npm run start:server
    # npm run start:dev

Open the browser on [`http://localhost:8080`](http://localhost:8080)

## Explaining the issue:

When the policyFetch is not set on the query options as `no-cache`, the apollo-client fetch the correct data defined by the GraphQL.

In the moment you set the policyFetch to `no-cache`, you can see the data coming through the network call, but the React component wrapped by the graphql HOC never receives that data.

Based on my diggings on the code base, the issue is related to the query subscription to the dataStore inside the apollo-client QueryManager. But this is just a superficial idea of the problem, I don't have a full understading of the code base.
