# Vue Composition + Typescript Example

The example is similar to `Login-01`, however is completely rewritten with Vue 3 Composition + Typescript in mind. I've kept the visuals the same.

Some additional notes compared to the Vue 2 version:
- Configuration is loaded from `.env` files instead of `.json` files
- `DEFAULT_REDIRECT_CALLBACK` now prefers the use of the Vue Router instead of `window.history.replacestate` as I've found it be more consistent in real-world sites. 
- This example is also applicable to Vue 2 + `@vue/composition-api` consumers, with the imports changed and the alternative router guard used.

I'll add an API example when I get a moment.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
