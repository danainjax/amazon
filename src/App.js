import './App.css'
import Product from './Product'

function App() {
  //return a functional component
  return (
    <div>
      <Product
        name='Eloquent JavaScript 3rd edition'
        description='The bestselling guide to writing JavaScript, 300 pages'
        price={24.99}
      />

      <Product
        name='Japanese Fine Line Markers'
        description='The best precision for your bullet journal and note-taking needs'
        price={12.95}
      />

      <Product
        name='Crime and Punishment'
        description='Russian literature, 10000 pages'
        price={11.95}
      />

      <Product
        name='Chef Danas Best Cookbook and Recipe Builder'
        description='The penultimate home cooking manual, 250 pages'
        price={15.95}
      />

      <Product
        name='Dunderscore'
        description='This is a very poor description'
        price={35.0}
      />
    </div>
  )
}

export default App
