# React-Rails Demo Application

This repo is an example of a simple working Rails 7, Shakapacker 7, React-Rails 3 application.

Where generators are used, the git commit will be the command run to get to the current application state so it will hopefully be easy to follow along at home.

For migration to `react_on_rails`, please read the [migration guide](./docs/react-rails-migration-to-react-on-rails.md).

## How to test the Demo Application

#### 1) Install the JS packages:

```sh
yarn install # or npm install
```

#### 2) Install GEM packages:

```sh
bundle install
```

#### 3) In one terminal run the rails server:

```sh
rails s
```

#### 4) In another terminal run the webpack server:

```sh
./bin/webpack-dev-server
```

#### 5) Visit the welcome page

[localhost:3000](http://localhost:3000)

## Branches

This repo contains two trees, one Webpacker and one Sprockets.

Each branch illustrates a react-rails ability.

* [`master`](https://github.com/shakacode/react-rails-example-app) -> Webpacker 3
* [react-rails-to-react-on-rails](https://github.com/shakacode/react-rails-example-app/tree/react-rails-to-react-on-rails) -> An example of migration from `react-rails` v3 to `react_on_rails` v13.4.
* [`sprockets`](https://github.com/shakacode/react-rails-example-app/tree/sprockets) -> Sprockets 3
* [`rails-production-version`](https://github.com/shakacode/react-rails-example-app/compare/sprockets...rails-production-version?expand=1) -> Sprockets 3 + serving production prebundled react
* [`rails-assets-sprockets`](https://github.com/shakacode/react-rails-example-app/compare/sprockets...rails-assets-sprockets?expand=1) -> Sprockets 3 + using Rails-Assets.org (failed)
* [`generate-new-component`](https://github.com/shakacode/react-rails-example-app/compare/master...generate-new-component?expand=1) -> Webpacker 3 + new style component
* [`without-ujs`](https://github.com/shakacode/react-rails-example-app/compare/master...without-ujs?expand=1) -> Sprockets 3 + removing UJS and making component globally accessible
* [`jsx-file-example`](https://github.com/shakacode/react-rails-example-app/compare/master...jsx-file-example?expand=1) -> Webpacker 3 + file named .JSX
* [`coffeescript-example`](https://github.com/shakacode/react-rails-example-app/compare/master...coffeescript-example?expand=1) -> Webpacker 3 + Coffeescript WITH JSX
