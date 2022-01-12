<p align="center">
  <a href="https://wecancer.com.br/">
    <img src="https://wecancer.com.br/wp-content/uploads/2021/04/wecancer.svg" alt="WeCancer logo" width="200" />
  </a>
</p>

<p align="center">
  Design, build, and create with WeCancer’s design system.
  <br />
  <a href="https://wecancer-design-system.netlify.app/">Live demo</a>
  ·
  <a href="https://github.com/wecancer/design-system/issues/new">Request feature</a>
</p>

<p align="center">
  <img src="https://github.com/wecancer/design-system/actions/workflows/develop.yml/badge.svg" alt="Tests, lint and build" />
  <img src="https://github.com/wecancer/design-system/actions/workflows/main.yml/badge.svg" alt="Deploy" />
</p>

<hr />

## Install

NPM:

```
npm install @wcancer/design-system
```
Yarn:
```
yarn add @wcancer/design-system
```

## Usage

```jsx
import React from 'react'
import { Button, WecancerProvider } from 'wecancer-design-system'

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

### Run the project

Run the command below to install the dependencies:

```
yarn
```

Now, you can run the project demo to explorer the Design System components. Run the command:

```
yarn run demo
```

## License

[MIT](./LICENSE) &copy; [WeCancer](https://wecancer.com.br/)
