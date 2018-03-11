// te acuerdas que hablamos de `connect` al comienzo de la lección?
// Finalmente esta aquí!!!
import { connect } from 'react-redux';
// Y el componente puramente presentacional de Main, ya sin hack
import MainComponent from './components/Main';

const MainWithRedux = connect(
  // `connect` recibe dos parámetros. El primero de ellos es
  // `mapStateToProps` que justamente lo que haces es mapear valores del state
  // a props que recibirá `MainComponent`
  function mapStateToProps(state) {
    // buscamos los 3 valores que nos interesan
    const {
      filteredProducts
    } = state.AppReducer;

    // console.log(products);

    // y devolvemos las nuevas props
    return {
      // fijate q los productos filtrados en el state se llaman `filteredProducts`
      // pero que la props del componente `Main` se llama `products`
      products: filteredProducts
    };
  }
)(MainComponent);

export default MainWithRedux;
