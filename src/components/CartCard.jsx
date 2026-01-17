import { deleteB, minus, plus } from "../assets/icons"
import { useCartContext } from "../context/CartContext"

const CartCard = ({ id, imgURL, title, price, quantity }) => {
    const { removeFromCart, updateQuantity } = useCartContext()
    const handleDecrease = () => {
        if (quantity > 1) {
            updateQuantity(id, quantity - 1)
        } else {
            removeFromCart(id)
        }
    }

    const handleIncrease = () => {
        updateQuantity(id, quantity + 1)
    }
    return (
        <div className="w-full max-sm:p-2 flex justify-between items-center  bg-white rounded-2xl w-[633px] h-[218px] p-4.5 shadow-[0px_0px_20px_1px_rgba(0,0,0,0.1)] mb-5">
            <div className=" flex justify-between items-center">
                <div className="flex flex-col justify-between items-center h-full">
                    <div className="w-[146px] h-[136px]">
                        <img src={imgURL} alt="earpods" className="w-[146px] h-[136px] bg-cover" />
                    </div>
                    <div className="flex justify-around w-full">
                        <button className="cursor-pointer hover:scale-105 transition duration-200" onClick={handleDecrease}><img src={minus} alt="minus" /></button>
                        <p className="font-semibold text-[17px]">{quantity}</p>
                        <button className="cursor-pointer hover:scale-105 transition duration-200" onClick={handleIncrease}><img src={plus} alt="plus" /></button>
                    </div>
                </div>
                <div>
                    <p className="font-medium text-[#1C1C27] text-[17px] mb-[12px]">{title}</p>
                    <p className="font-semibold text-[#AAAAAA] text-[15px]">{price} ₽</p>
                </div>
            </div>
            <div className="flex flex-col justify-between h-full items-end">
                <button className="cursor-pointer hover:scale-105 transition duration-200" onClick={() => removeFromCart(id)}><img src={deleteB} alt="" className="h-5" /></button>
                <p className="font-semibold text-[15px] text-[#1C1C27]">{price} ₽</p>
            </div>
        </div>
    )
}

export default CartCard