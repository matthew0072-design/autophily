import Headphone from './components/Headphone'
import AllProduct from './components/Allproduct'
import Speaker from './components/Speaker'
import AudioGear from './components/Audiogear'

export default async function Home() {
  
  // const productList = await fetch('http://localhost:3000/product/api/')
  // const product = await productList.json()
  // console.log(product)

  return (
    <main className=" ">
      
      <Headphone />
      <AllProduct />
      <Speaker />
      <AudioGear />
    </main>
  )
}
