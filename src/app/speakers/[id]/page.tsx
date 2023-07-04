import Image from 'next/image'
import AddToCart from '../../components/AddToCart'
import Link from 'next/link'
import AllProduct from '../../components/Allproduct'
import Audiogear from '../../components/Audiogear'


// to get  static path using product id
export async function generateStaticParams() {

    const response = await fetch('http://localhost:3000/headphones/api/')
    const productName = await response.json()
 

    return productName.map((product:any) => ({
        
         id: product.id.toString(),
         
    }))
    
}




   

export default async function Page ({ params } : { params: { id:number }}) {

    


    const productResponse = await fetch('http://localhost:3000/headphones/api/')
    const allProducts = await productResponse.json()
    
    
    const currentProduct = allProducts.find((product:any) => product.id === Number(params.id))


    // Filter the remaining products based on category
const relatedProducts = allProducts.filter((product:any) => product.id  !== currentProduct.id);  




// Function to get a specified number of random elements from an array
function getRandomElements(array:any, numElements:any) {
    const shuffledArray = array.sort(() => 0.5 - Math.random());
    return shuffledArray.slice(0, numElements);
  }


// Select three random related products
const productsYouMayLike = getRandomElements(relatedProducts, 3);









    
    //To fetch a single product by id
    const productDetails = await fetch(`http://localhost:3000/headphones/api/eachPage/?id=${params.id}`)

    const product = await productDetails.json()


    

    
    

    return (
    <main className="flex flex-col w-full justify-center"  >
       
        <div className='mt-4 md:mt-8  md:mb-4' >
        <Link href="/speakers" className='capitalize text-[15px] font-medium leading-[25px] ml-[24px] opacity-50  ' > go back</Link>
        </div>
        <div className='w-full mx-auto flex flex-col md:flex-row md:h-[480px] lg:h-[560px]'>
                <div className="h-[327px] w-[90%] mx-auto rounded-[8px] bg-[#F1F1F1] flex justify-center md:w-[281px] md:h-[480px] lg:h-[560px] lg:w-[540px]">
                    <Image src={product.productImage} width={300} height={300} alt='product Image' className='w-[150px] h-[201px] m-auto lg:h-[386px] lg:w-[349.238px] '  />
                 </div>
            <div className="w-[90%] m-auto  md:w-[339.5px] md:h-[390px] lg:h-[407px] lg:w-[445.5px]" >
          <div>
          <p className='text-[#D87D4A] text-base tracking-[10px] uppercase py-4 ' > {product.status} </p>
            <p className="text-[#000] text-[28px] font-bold tracking-[1px] uppercase mb-2 " > {product.name} </p>
            <p className='text-[#000] text-[15px] font-medium leading-[25px] opacity-50   '> {product.description} </p>
            <p className='text-[#000] text-[18px] font-bold tracking-[1.286px] uppercase py-2 '> {product.price} </p>
            
          </div>
          <AddToCart product={product} />
            </div>
        </div>

        <div className="lg:flex  lg:w-full lg:mx-auto   ">
            <div className="w-[90%] m-auto md:h-[318px]  md:mt-6 flex flex-col md:gap-4 lg:h-[318px] lg:w-[635px] " >
                <p className='uppercase text-[24px] leading-9 tracking-[0.857px] font-bold md:text-[32px] md:tracking-[1.143px] '>features</p>
                <p className=' text-[15px] leading-[25px] opacity-50 '>{product.features} </p>
            </div>

            <div className="h-[217px] mb-8 flex flex-col w-[90%] m-auto justify-between mt-12 md:mt-0 md:ml-[39px] md:h-[157px] md:w-[549px] md:flex-row lg:flex-col lg:h-[225px] lg:w-[350px] lg:mt-6  ">
                <p className='text-[24px] leading-9 tracking-[0.857px] uppercase font-bold md:text-[32px] md:tracking-[1.143px] '>in the box</p>
                
                <div>

      {product.in_the_box.map((item:any, index: number) => (
        <div key={index}>
          {Object.entries(item).map(([key, value]) => {
            const values = Array.isArray(value) ? value : [value];
            return values.map((val, idx) => (
              <div key={`${key}-${idx}`} className="flex  flex-col my-2 justify-between">
                 <div className='flex gap-8 '>
                 <p className='text-[#D87D4A] text-[15px] font-bold lading-[25px] ' >{key}</p>
                 <p className='text-[15px] font-medium leading-[25px] opacity-50 '>{val} </p>   
                 </div>
                    
              </div>
            ));
          })}
        </div>
      ))}
    </div>
  

               
            </div>

         
        </div>

            <div className="h-[680px] grid w-[90%] m-auto place-content-start gap-4 md:my-[5rem] md:place-content-center md:w-[580px] md:h-[368px] md:grid-cols-2 md:justify-around md:grid-flow-col md:grid-rows-2 lg:w-[1100px] lg:h-[592px] " >
            <div><Image src={product.otherImage1} width={300} height={300} alt='product Image'className='md:col-span-2  md:h-[174px] md:w-[277px] lg:w-[445px] lg:h-[280px]' /> </div>
            <div><Image src={product.otherImage2} width={300} height={300} alt='product Image'className='md:col-span-2  md:h-[174px] md:w-[277px] lg:w-[445px] lg:h-[280px]' /></div>
            <div> <Image src={product.otherImage3} width={300} height={300} alt='product Image' className='md:col-span-2  md:h-[368px] md:w-[395px] lg:h-[592px] lg:w-[635px] ' /></div>
            
            </div>        
       <div className="w-full flex flex-col h-[983px] md:h-[563px] md:items-center lg:h-[571px]  lg:mx-auto">
            <p className="text-center text-[24px] leading-9 tracking-[0.857px] font-bold uppercase md:text-[32px] md:tracking-[1.143px] md:py-6 ">you may also like</p>
            <div className='relative  w-full m-auto flex flex-col items-center justify-center h-[907px] md:justify-between md:items-center  md:m-0 md:w-[691px] md:h-[471px] md:flex-row lg:w-[1110px]'>
       {productsYouMayLike.map((product: any) => (
         <div  key={product.id} className='w-full m-auto flex flex-col  gap-6  items-center md:items-start md:justify-between md:m-0 md:gap-0 md:h-[471px] md:w-[223px] lg:items-center lg:w-[350px] lg:h-[471px]'>
            <div className="w-[90%] h-[120px] rounded-[8px] bg-[#F1F1F1] flex justify-center items-center  md:w-[223px] md:h-[318px] lg:w-[350px]">
              <Image src={product.productImage} width={300} height={300} alt='product image' className='w-[73px] h-[95px] md:w-[148.305px] md:h-[193px] ' />
            </div>
            <div className="flex flex-col items-center gap-6 md:justify-between lg:items-center">
              <p className='text-center text-[24px] font-bold tracking-[1.714px] uppercase '> {product.name} </p>
              <Link href={`/${product.category}/${product.id}`}  className="h-[48px] w-[160px] hover:bg-[#FBAF85] bg-[#D87D4A] text-[13px] flex justify-center items-center font-bold tracking-[1px] uppercase text-[#FFF] ">see product </Link>
              </div>
              </div> 
        ))}
        </div>
       </div>
           
        <AllProduct/>
        <Audiogear />
    </main>
    )
}