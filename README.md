# Filtering products

* instalamos ´create-react-app´

```sh
node install -g create-react-app
```

* ejecutamos

```sh
create-react-app name-app
```

* Instalamos

```sh
yarn add redux react-redux
yarn add -D redux-devtools
```

* creamos `lib/components/Main.js`

```jsx
// lib/components/Main.js

import React from 'react';
import PropTypes from 'prop-types';

// y ahora importamos nuestro componente
import FilterableProductTable from '../FilterableProductTable/components';

// toda los datos que Main necesita, ahora los recibimos como props
const Main = ({ products }) => {
  // TODO: Hack para que renderice. Quitar luego de setear Redux.
  products = []
  asideLinks = []

  return (
    <div>
      <FilterableProductTable products={products} />
    </div>
  )
}

Main.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
}

export default Main
```

* creamos `lib/FilterableProductTable/components/index.js`
```jsx
import React from 'react'

const FilterableProductTable = () => {
  const style = {
    width: '70%',
    float: 'left'
  }
  return (
    <div style={style}>
      <h2>Filterable Product Table</h2>
    </div>
  )
}

export default FilterableProductTable
```

* Y la plantilla generada por `create-react-app` modificamos `App.js`

```jsx
import React, { Component } from 'react';

import Main from './lib/Main';

import './App.css'

class App extends Component {
  render() {
    return (
      <Main />
    );
  }
}

export default App;
```

* `App.css`
```css
body {
  padding: 5px
}
```
