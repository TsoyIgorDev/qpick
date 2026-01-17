import Card from '../components/Card'
import { headphones, wirelessHeadphones } from '../constants'

const Page = () => {
    return (
        <section className='max-container w-full mt-[28px] min-h-[calc(100vh-216px)]'>
            <h2 className='text-[#838383] font-semibold text-[20px] mb-[20px]'>Наушники</h2>
            <div className='grid max-lg:grid-cols-2 max-md:grid-cols-2 max-sm:grid-cols-1 grid-cols-3 gap-7'>
                {headphones.map((headphone) => (
                    <Card key={headphone.id} id={headphone.id} imgURL={headphone.imgURL} title={headphone.title} price={headphone.price} rate={headphone.rate} oldprice={headphone.oldprice} />
                ))}
                {headphones.map((headphone) => (
                    <Card key={headphone.id} id={headphone.id} imgURL={headphone.imgURL} title={headphone.title} price={headphone.price} rate={headphone.rate} oldprice={headphone.oldprice} />
                ))}
            </div>
            <h2 className='text-[#838383] font-semibold text-[20px] mb-[20px] mt-[28px]'>Беспроводные наушники</h2>
            <div className='grid max-lg:grid-cols-2 max-md:grid-cols-2 max-sm:grid-cols-1 grid-cols-3 gap-7 mb-[20px]'>
                {wirelessHeadphones.map((headphone) => (
                    <Card key={headphone.id} id={headphone.id} imgURL={headphone.imgURL} title={headphone.title} price={headphone.price} rate={headphone.rate} />
                ))}
            </div>
        </section>
    )
}

export default Page

// max-xl:justify-start flex flex-wrap gap-[30px]