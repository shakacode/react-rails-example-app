# Deploying tutorial app on Control Plane

## Overview
This simple example shows how to deploy a simple app on Control Plane using the `cpl` gem.

To maximize simplicity,
this example creates Postgres and Redis as workloads in the same GVC as the app.
In a real app,
you would likely use persistent,
external resources,
such as AWS RDS and AWS ElastiCache.

You can see the definition of Postgres and Redis in the `.controlplane/templates` directory.

## Prerequisites

1. Ensure your
[Control Plane](https://controlplane.com)
account is set up.

2. Set up an `organization` for testing in that account
and modify `aliases.common.cpln_org` in `.controlplane/controlplane.yml`.

3. Install Control Plane CLI (and configure access)
[docs here](https://docs.controlplane.com/quickstart/quick-start-3-cli#getting-started-with-the-cli).
You can update the `cpln` command line with the same command as installation,
`npm install -g @controlplane/cli`.
Then run `cpln login` to ensure access.

4. Install
[Heroku to Control Plane](https://github.com/shakacode/heroku-to-control-plane)
playbook CLI
[`cpl` gem](https://rubygems.org/gems/cpl)
on your project's Gemfile or globally.

5. This project has a `Dockerfile` for Control Plane in this directory.
You can use it as an example for your project.
Ensure that you have Docker running.

## Tips
Do not confuse the `cpl` CLI with the `cpln` CLI.
The `cpl` CLI is the Heroku to Control Plane playbook CLI.
The `cpln` CLI is the Control Plane CLI.

## Project Configuration
See the filese in the `./controlplane` directory.

1. `/templates`: defines the objects created with the `cpl setup` command.
2. `/controlplane.yml`: defines the organization, location, and app name.
3. `Dockerfile`: defines the Docker image used to run the app on Control Plane.
4. `entrypoint.sh`: defines the entrypoint script used to run the app on Control Plane.

## Setup and run

Check if the Control Plane organization and location are correct in `.controlplane/controlplane.yml`.
You should be able to see this information in the Control Plane UI.

```sh
# Note, below commands use `cpl` which is the Heroku to Control Plane playbook script.

# Provision all infrastructure on Control Plane.
# app react-rails-example-app will be created per definition in .controlplane/controlplane.yml
cpl apply-template gvc rails -a react-rails-example-app

# Build and push docker image to Control Plane repository
# Note, may take many minutes. Be patient.
cpl build-image -a react-rails-example-app

# Promote image to app after running `cpl build-image command`
cpl deploy-image -a react-rails-example-app

# See how app is starting up
cpl logs -a react-rails-example-app

# Open app in browser (once it has started up)
cpl open -a react-rails-example-app
```

Notice that in the first attempt to build the image, you may get it interrupted with a message like this:

```
89c3244a87b2: Waiting
80231db1194c: Waiting
f1c1f2298584: Waiting
ccba29d69370: Waiting
unsupported:
***  You are trying to push/pull to your org's private registry in Control Plane.  ***
***  First, grant docker access the registry using the 'cpln' command:             ***

       cpln image docker-login --org react-rails-example-app
```

Run the given command as instructed and repeat the `build-image` command.

## Promoting code upgrades

```sh
# Build and push new image with sequential image tagging, e.g. 'ror-tutorial_123'
cpl build-image -a react-rails-example-app

# OR
# Build and push with sequential image tagging and commit SHA, e.g. 'ror-tutorial_123_ABCD'
cpl build-image -a react-rails-example-app --commit ABCD

# Run database migrations (or other release tasks) with latest image,
# while app is still running on previous image.
# This is analogous to the release phase.
cpl runner rails db:migrate -a react-rails-example-app --image latest

# Pomote latest image to app
cpl deploy-image -a react-rails-example-app
```

