# Kodify Technical Test

## Getting started

Fork the repo into your own github account and clone it onto your development environment. 
Make sure you have [docker](https://docs.docker.com/get-docker/) and [docker compose](https://docs.docker.com/compose/install/) installed. 

You can start the project by running the command below in your terminal at the root of the project. This will start 4 containers, the client side React application, the server side Express application, a mongodb instance and a script to seed the database with some dummy data. 

```
docker-compose up
```

## The codebase

In the [packages](/packages) you'll see a [React App](/packages/client) that contains a video player component and the parent App component. On render the App calls our [server](/packages/server) with the videoId of `12345` returning a Video with it's sources. We then send our Video to the token endpoint to sign it's sources. We update the players props, which in turn causes the player to load the video, enabling it to be played.

### Tasks

We would like you to complete the following tasks:

*Push each task as a commit to the forked repo. Please submit the repo to the recruiter via email.*

### Task 1

Troubleshoot and fix the `/video/12345` request in the App component. 

### Task 2

Create the endpoint for the url signing. The hash should be generated using the instructions below and appended to each source url.

For the cdn to accept the request, the url needs to contain a query param called `token` that is equal to a md5 hex encoded hash of the uri with a `secret` query param set to the following key: `U5e0IskwtIfA`. 

For example `http://www.cdn.com/big_buck_bunny.mp4` would require a hash encoding of ``/big_buck_bunny.mp4?secret=U5e0IskwtIfA`` resulting in the following call to the cdn: ``http://www.cdn.com/big_buck_bunny.mp4?token=0173c224ab73ad8ac23fb0f08155d83d``

### Task 3

Refactor the `/video/:videoId` controller on the server to decouple the video viewed tracking.

## Bonus points

Can you improve this test? Or have you spotted a typo? Open an issue or submit a pull request.

## Thanks

Thank you for taking the team to do this test, we look forward to reviewing it.

*If you have any questions or you're having trouble getting started, please get in touch with the recruiter*