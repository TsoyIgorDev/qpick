import { cart, like } from '../assets/icons'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'

const Header = () => {
    const { getItemCount } = useCartContext()
    return (
        <header className='w-full max-container py-3.75 h-[60px] flex items-center'>
            <nav className='w-full flex justify-between items-center'>
                <Link to={"/"} className='hover:scale-115 transition duration-200'>
                    <p className='font-bold text-[25px]'>QPICK</p>
                </Link>
                <div className='flex gap-6'>
                    <a href="/" className='relative hover:scale-115 transition duration-200'>
                        <img src={like} alt="like" />
                        <span className='absolute rounded-full bg-[#FFA542] w-4.5 h-4.5 text-center text-[13px] text-white -top-2 -right-2.5'>{2}</span>
                    </a>
                    <Link to={"/cart"} className='relative hover:scale-115 transition duration-200'>
                        <img src={cart} alt="cart" />
                        <span className='absolute rounded-full bg-[#FFA542] w-4.5 h-4.5 text-center text-[13px] text-white -top-2 -right-2'>{getItemCount()}</span>
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Header