import Link from "next/link";
import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

// MIDDLE LINKS DATA
interface ProductType {
  id: number;
  section: string;
  link: string[];
}

const products: ProductType[] = [
  {
    id: 1,
    section: "Company",
    // link: ['About us', 'Blog', 'Contact us', 'Pricing', 'Testimonials'],
    link: ['About us', 'Blog', 'Contact us', 'Testimonials'],
  },
  {
    id: 2,
    section: "Support",
    link: ['Help center', 'Terms of service', 'Legal', 'Privacy Policy', 'Status']
  }
]

const footer = () => {
  return (
    <div className="bg-black -mt-64" id="first-section">
      <div className="mx-auto max-w-2xl pt-64 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">

          {/* COLUMN-1 */}
          <div className='col-span-4'>
            <img src={'/assets/logo/Logo3.svg'} alt="logo" className='pb-4' />
            <h3 className='text-white text-lg font-medium leading-9 mb-4 lg:mb-20'> Empowering Minds, <br /> Envisioning Futures. </h3>
            <div className='flex gap-4'>
              <Link href="/"><img src={'/assets/footer/insta.svg'} alt="instagram" className='footer-icons' /></Link>
              <Link href="/"><img src={'/assets/footer/dribble.svg'} alt="dribble" className='footer-icons' /></Link>
              <Link href="/"><img src={'/assets/footer/twitter.svg'} alt="twitter" className='footer-icons' /></Link>
              <Link href="/"><img src={'/assets/footer/youtube.svg'} alt="youtube" className='footer-icons' /></Link>
            </div>
          </div>

          {/* CLOUMN-2/3 */}

          {/* {products.map((product) => (
                        <div key={product.id} className="group relative col-span-2">
                            <p className="text-white text-xl font-semibold mb-9">{product.section}</p>
                            <ul>
                                {product.link.map((link: string, index: number) => (
                                    <li key={index} className='mb-5'>
                                        <Link href="/" className="text-offwhite text-sm font-normal mb-6 space-links">{link}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))} */}

          {products.map((product) => (
            <div key={product.id} className="group relative col-span-2">
              <p className="text-white text-xl font-semibold mb-9">{product.section}</p>
              <ul>
                {product.link.map((link: string, index: number) => {
                  // Define hrefs for different links
                  let href = "/";
                  switch (link.toLowerCase()) {
                    case "about us":
                      href = "#aboutus-section";
                      break;
                    case "contact us":
                      href = '#contact-us';
                      break;
                    case "blog":
                      href = "/undermaintenance";
                      break;
                    case "testimonials":
                      href = "#testimonials";
                      break;
                    default:
                      href = "/";
                  }

                  return (
                    <li key={index} className="mb-5">
                      <Link href={href} className="text-offwhite text-sm font-normal mb-6 space-links">
                        {link}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}


          {/* CLOUMN-4 */}

          {/* <div className='col-span-4'>
                        <h3 className='text-white text-xl font-semibold mb-6'>Stay up to date</h3>
                        <div className="relative text-white focus-within:text-white flex flex-row-reverse">
                            <input type="Email address" name="q" className="py-4 text-sm w-full text-white bg-gray-900 rounded-md pl-4 focus:outline-none bg-emailbg focus:text-white" placeholder="Your email address" autoComplete="off" />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                                <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                                    <img src={'/assets/footer/inputIcon.svg'} alt="inputicon" />
                                </button>
                            </div>
                        </div>
                    </div> */}
          <div className='col-span-4 ml-20'>

            {/* <Carousel className="w-full max-w-xs">
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-4xl font-semibold">{index + 1}</span>
                          <img
                            src={`https://via.placeholder.com/300x300?text=Image+${index + 1}`} // Example image URL
                            alt={`Carousel Item ${index + 1}`} // Alt text for the image
                            className="object-cover w-full h-full" // Ensures the image fits the card properly
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel> */}

<Carousel className="w-full max-w-sm h-[350px]">
  <CarouselContent>
    {Array.from({ length: 5 }).map((_, index) => (
      <CarouselItem key={index}>
        <div className="p-1">
          <Card>
            <CardContent className="flex aspect-square items-center justify-center p-6">
              <img
                src={`/assets/carousel/img${index + 1}.jpg`} // Dynamic path for each image
                alt={`Carousel Item ${index + 1}`} // Alt text for accessibility
                className="object-cover w-full h-full" // Ensures proper scaling
              />
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>



          </div>


        </div>
      </div>

      {/* All Rights Reserved */}

      <div className='pb-24 px-4'>

        <h3 className='text-center text-offwhite'>@2024 - All Rights Reserved by <Link href='/' >Eduwedo.in</Link></h3>



      </div>

    </div>
  )
}

export default footer;
