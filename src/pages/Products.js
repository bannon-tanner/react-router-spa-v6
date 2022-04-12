import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li><Link to='/products/book'>Book</Link></li>
        <li><Link to='/products/carpet'>Carpet</Link></li>
        <li><Link to='/products/online-course'>Online Course</Link></li>
      </ul>
    </section>
  )
}

export default Products
