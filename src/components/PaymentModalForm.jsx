import { useState } from 'react';
import { Form, Input, Checkbox, Modal, ConfigProvider } from 'antd';
const PaymentModalForm = ({ isModalOpen, handleOk, handleCancel }) => {
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log('Success:', values);
        handleOk();
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#000000',
                },
            }}
        >
            <Modal
                title="Оформление заказа"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                okText="Подтвердить"
                cancelText="Отмена"
                onOk={handleOk}
                onCancel={handleCancel}
                okButtonProps={{
                    className: 'bg-black border-black hover:bg-gray-800 hover:border-gray-800 hover:scale-105 hover:bg-gray-900 transition duration-200'
                }}
                cancelButtonProps={{
                    className: 'text-red-500 border-red-500 hover:text-red-600 hover:border-red-600 hover:scale-105 transition duration-200'
                }}
            >
                <Form
                    name="basic"
                    style={{ maxWidth: 1000 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout="vertical"
                >
                    <Form.Item
                        label="Имя пользователя:"
                        name="username"
                        rules={[{ required: true, message: 'Введите имя пользователя!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Пароль"
                        name="password"
                        rules={[{ required: true, message: 'Введите пароль!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked" label={null}>
                        <Checkbox>Запомнить меня</Checkbox>
                    </Form.Item>
                </Form>
            </Modal>
        </ConfigProvider>
    )
}

export default PaymentModalForm