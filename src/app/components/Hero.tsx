import Image from "next/image";

export default function Hero() {
  return(
  <div className="flex flex-col md:flex-row pt-10 lg:flex-row text-white w-full">

         {/* left side   */}
    <div className="w-6/12">

       <h1 className="font-bold sm:text-2xl md:text-4xl lg:text-4xl pt-12 pl-16">
        It Is a Time To Create Your Own Business Scheme</h1>

     
 <p className="pt-6 sm:pl-12 md:pl-20 lg:pl-20">
         Welcome to our Learn Development platform, where we empower you to unlock your full potential through innovation
        learning experiences.
       </p>
    
      
         <button className="bg-orange-600 py-3 px-4 ml-24 mt-5 rounded hover:bg-white hover:text-orange-600">Learn More</button>
         </div>


      {/* right side */}
          <div className="w-6/12">
      <div className="pt-20 pl-10 pr-4">
             <Image src={"/image.jpeg"} alt="web-img"
             width={400}
             height={600} 
             
             />
      </div>
      </div>
  <hr></hr>
    </div>
               
  )
}