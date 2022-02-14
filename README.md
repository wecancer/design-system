<p align="center">
  <a href="https://wecancer.com.br/">
    <img src="https://wecancer.com.br/wp-content/uploads/2021/04/wecancer.svg" alt="WeCancer logo" width="200" />
  </a>
</p>

<p align="center">
  Design, build, and create with WeCancer’s design system.
  <br />
  <a href="https://wecancer-design-system.netlify.app/" target="_blank">Live demo</a>
  ·
  <a href="https://github.com/wecancer/design-system/issues/new" target="_blank">Request feature</a>
</p>

<p align="center">
  <img src="https://github.com/wecancer/design-system/actions/workflows/develop.yml/badge.svg" alt="Tests, lint and build" />
  <img src="https://github.com/wecancer/design-system/actions/workflows/main.yml/badge.svg" alt="Deploy" />
</p>

<hr />

## Install

NPM:
```
npm install @wecancer/design-system
```

Yarn:
```
yarn add @wecancer/design-system
```

## Usage

Before starting to use the Design System, you must add the `WecancerProvider` provider at the beginning of your application.

```jsx
import { WecancerProvider, Button } from '@wecancer/design-system'

function App() {
  return (
    <WecancerProvider>
      <Button primary>Submit</Button>
    </WecancerProvider>
  )
}
```


## Contributing

You need the `nodejs` and `yarn` instaled on your device to run this project in development.

**To run the project**, go to the project path, run the command below to install the dependencies:

```
yarn install
```

Now, you can run the project demo to explorer the Design System components. Run the command:

```
yarn start
```

**Using patterns** to write and create resources:

- File names with the kebab-case (exp: `my-file-name.ts`)
- we're using the AirBnB eslint patterns
- To create a component:
  - Create component file: `component/{component-name}/index.tsx`
  - Create test file: `component/{component-name}/{component-name}.test.tsx`
  - Create demo file: `component/{component-name}/{component-name}.stories.tsx` (we're using the StoryBook)

**Checking** the truth of the code with the command:

```
yarn run check
```

## Building

Building to publish the project:

```
yarn build
```

Building demo:

```
yarn build:demo
```

## License

[MIT](./LICENSE) &copy; [WeCancer](https://wecancer.com.br/)
