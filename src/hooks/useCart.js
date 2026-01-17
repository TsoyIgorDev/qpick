import { useState, useEffect } from "react";

export const useCart = () => {
    const [cartItems, setCartItems] = useState([]);

    // Загрузка корзины при инициализации
    useEffect(() => {
        try {
            const savedCart = sessionStorage.getItem('cart');
            if (savedCart) {
                setCartItems(JSON.parse(savedCart));
            }
        } catch (error) {
            console.error('Ошибка при загрузке корзины:', error);
        }
    }, []);

    // Сохранение корзины
    useEffect(() => {
        try {
            sessionStorage.setItem('cart', JSON.stringify(cartItems));
        } catch (error) {
            console.error('Ошибка при сохранении корзины:', error);
        }
    }, [cartItems]);

    // Добавление в корзину
    const addToCart = (product) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === product.id);

            if (existingItem) {
                return prevItems.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    };

    // Удаление из корзины
    const removeFromCart = (id) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    // Обновить количество товара
    const updateQuantity = (id, quantity) => {
        if (quantity < 1) {
            removeFromCart(id);
            return;
        }
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, quantity } : item
            )
        );
    };

    // Получить сумму
    const getTotal = () => {
        return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    };

    // Получить количество товаров
    const getItemCount = () => {
        return cartItems.reduce((count, item) => count + item.quantity, 0);
    };

    // Проверить, есть ли товар в корзине
    const isInCart = (id) => {
        return cartItems.some(item => item.id === id);
    };

    return {
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        getTotal,
        getItemCount,
        isInCart
    };
};