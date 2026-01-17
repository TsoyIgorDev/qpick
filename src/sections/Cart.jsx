import { useState } from 'react'
import CartCard from '../components/CartCard'
import { useCartContext } from '../context/CartContext'
import { Modal, ConfigProvider } from 'antd';
import PaymentModalForm from '../components/PaymentModalForm';

const Cart = () => {
    const { cartItems, getTotal } = useCartContext()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div className='min-h-[calc(100vh-216px)] max-container'>
            <h2 className='text-[#1C1C27] font-semibold text-[20px] mb-[13px]'>Корзина</h2>
            <div className='max-md:w-full max-lg:flex-col max-lg:justify-center max-lg:items-center flex justify-between items-start gap-4'>
                {cartItems.length === 0 && (
                    <p className='text-3xl text-gray-400'>Товары в корзине отсутствуют</p>
                )}
                <div className='flex flex-col max-lg:w-full w-[633px]'>
                    {cartItems.map(item => (
                        <CartCard
                            key={item.id}
                            id={item.id}
                            imgURL={item.imgURL}
                            price={item.price}
                            title={item.title}
                            quantity={item.quantity}
                        />
                    ))}
                </div>

                <div className='flex bg-white rounded-2xl flex flex-col w-[350px] h-[115px] shadow-[0px_0px_20px_1px_rgba(0,0,0,0.1)]'>
                    <div className='flex justify-between items-center font-semibold text-[15px] p-5 pb-3.5'>
                        <p>ИТОГО</p>
                        <p>{getTotal().toLocaleString('ru-RU')} ₽ </p>
                    </div>
                    <button onClick={showModal} className='bg-black w-full h-full text-white rounded-2xl cursor-pointer hover:scale-105 hover:bg-gray-900 transition duration-200 '>Перейти к оформлению</button>
                    <PaymentModalForm
                        isModalOpen={isModalOpen}
                        handleOk={handleOk}
                        handleCancel={handleCancel}
                    />
                </div>
            </div>
        </div>

    )
}

export default Cart