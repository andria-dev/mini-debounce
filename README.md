# `mini-debounce`

An extremely small and modern debounce library that is supported by all major browsers.

**`mini-debounce`** is only **94 bytes**, that's smaller than _`tiny-debounce`_ by 161 bytes!!!

# Installation:

```bash
yarn add mini-debounce
# or
npm install mini-debounce
```

# Usage:

### Arguments

| Name     | Type     | Description                                     |
| -------- | -------- | ----------------------------------------------- |
| callback | Function | The function to be debounced                    |
| timeout  | number   | The number of milliseconds to wait after called |

### Returns

| Type     | Description                                                                                                      |
| -------- | ---------------------------------------------------------------------------------------------------------------- |
| Function | Returns the new debounced function, once called the previous timeout is cancelled and a new timeout is initiated |

_"Okay but what does that function return?"_

It returns the id from `setTimeout` which allows you to run `clearTimeout` in order to cancel the debounced call.

## First let's import it

The function is not exported as `default` as to provide better intellisense.

```js
import { debounce } from 'mini-debounce';
// or
const { debounce } = require('mini-debounce');
```

## Now let's use it:

```js
// Create the debounced function
const debouncedLog = debounce(x => console.log('[LOG]', x), 1000);

// Use it
debouncedLog('Hello...');
debouncedLog("It's me");
debouncedLog('I was wondering');
debouncedLog('if after all');

// 1000 milliseconds later
// => "[LOG] if after all"

// You can cancel them as well
const id = debouncedLog('This will never appear');
clearTimeout(id);
```

## How about in a React component

Here we'll demonstrate an implementation of a debounced search input.

```jsx
class Search {
  state = { query: '' };

  search = debounce(query => {
    /* this will only be run 1000 milliseconds after no changes */
    fetch(`https://example.com/api?q=${query}`).then(/* do whatever */);
  }, 1000);

  handleChange = event => {
    const query = event.target.value;

    this.setState({ query });
    this.search(query);
  };

  render() {
    return <input value={this.state.query} onChange={this.handleChange} />;
  }
}
```

```jsx
// Now as a function
function Search() {
  const [query, setQuery] = useState('');

  const search = debounce(query => {
    fetch(/* you know */).then(/* do whatever */);
  }, 1000);

  function handleChange(event) {
    const query = event.target.value;

    setQuery(query);
    search(query);
  }

  return <input value={query} onChange={handleChange} />;
}
```

# License

[MIT License](https://github.com/ChrisBrownie55/mini-debounce/blob/master/LICENSE) Copyright © 2018 Christopher Holden Brown
