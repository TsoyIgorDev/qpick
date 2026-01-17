import { language } from '../assets/icons'
import { Link } from 'react-router-dom'
import { socialNetworks } from '../constants'

const Footer = () => {
    return (
        <footer className='max-sm:flex-col max-sm:gap-3 max-container bg-white flex justify-between items-start p-[30px] rounded-t-3xl'>
            <Link to={"/"} className='hover:scale-105 transition duration-200'>
                <p className='font-bold text-[25px]'>QPICK</p>
            </Link>
            <nav className='max-sm:w-full'>
                <ul className='max-sm:flex-row max-sm:justify-around flex flex-col gap-2.5 text-[17px]'>
                    <li><a href="">Избранное</a></li>
                    <li><Link to={"/cart"}>Корзина</Link></li>
                    <li><a href="">Контакты</a></li>
                </ul>
            </nav>
            <div className='max-sm:flex-row max-sm:justify-around max-sm:w-full flex flex-col gap-8 text-[17px]'>
                <p>Условия сервиса</p>
                <div className='flex gap-4'>
                    <img src={language} alt="language" />
                    <button className='text-[#FFA542] font-bold text-[15px] cursor-pointer'>Рус</button>
                    <button className='font-medium text-[15px] cursor-pointer'>Eng</button>
                </div>
            </div>
            <div className='max-sm:flex-row max-sm:justify-around max-sm:w-full flex justify-end items-center gap-4'>
                {socialNetworks.map((social) => (
                    <a href={social.href} key={social.label} className='hover:scale-105 transition duration-200'>
                        <img src={social.imgURL} alt={social.label} />
                    </a>
                ))}
            </div>
        </footer>
    )
}

export default Footer