import { star } from '../assets/icons'
import { useCartContext } from '../context/CartContext'

const Card = ({ id, imgURL, title, rate, price, oldprice }) => {
    const { addToCart, isInCart } = useCartContext()
    const inCart = isInCart(id)

    const handleAdd = () => {
        const product = {
            id,
            imgURL,
            title,
            price,
            rate
        }
        addToCart(product)
    }
    return (
        <div className='bg-white w-full h-101.75 max-md:h-auto rounded-3xl max-md:rounded-md shadow-[0px_0px_20px_1px_rgba(0,0,0,0.1)] pt-3.75 px-4.5 pb-6.5 max-md:p-1 flex items-center flex-col justify-center gap-14 hover:scale-105 max-md:hover:scale-100 transition duration-200'>
            <div className='flex justify-center items-center h-full'>
                <img src={imgURL} alt="" className='object-contain w-full h-full' />
            </div>
            <div className='flex justify-between items-center w-full'>
                <div className='flex justify-between flex-col '>
                    <p className='font-semibold text-[17px] mb-[25px]'>{title}</p>
                    <div className='flex items-center gap-2'>
                        <img src={star} alt="Рейтинг" />
                        <p className='font-semibold text-[#838383] text-[17px]'>{rate}</p>
                    </div>
                </div>
                <div className='flex flex-col justify-between items-end h-full'>
                    <div className='flex flex-col justify-between items-center'>
                        <p className='font-semibold text-[17px] text-[#FFA542]'>{price} ₽</p>
                        {oldprice && (
                            <span className='text-[#FFCE7F] font-semibold line-through text-[13px]'>{oldprice}  ₽</span>
                        )}
                    </div>
                    <button className='font-semibold text-[17px] rounded-full p-1.5 cursor-pointer hover:scale-105 hover:bg-[#FFCE7F] active:bg-amber-600 transition duration-300' onClick={handleAdd}>Купить</button>
                </div>
            </div>
        </div>
    )
}

export default Card