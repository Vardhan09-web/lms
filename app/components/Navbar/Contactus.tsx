import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

const Contactusform = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValues, setInputValues] = useState({
        input1: '',
        input2: '',
        input3: '',
    });

    const handleChange = (e: { target: { name: string; value: string } }) => {
        const { name, value } = e.target;
        setInputValues((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(inputValues),
            });

            if (response.ok) {
                alert('Your message has been sent successfully!');
                setInputValues({ input1: '', input2: '', input3: '' });
                setIsOpen(false);
            } else {
                alert('Failed to send the message. Please try again later.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An error occurred. Please try again later.');
        }
    };

    const isDisabled = Object.values(inputValues).some((value) => value === '');

    const closeModal = () => {
        setIsOpen(false);
    };

    const openModal = () => {
        setIsOpen(true);
    };

    return (
        <>
            <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto md:ml-6 sm:pr-0">
                <div className="md:hidden">
                    <button type="button" className="text-15px font-medium" onClick={openModal}>
                        Contact Us
                    </button>
                </div>
                <div className="hidden md:block">
                    <button
                        type="button"
                        className="text-15px font-medium space-links hover:text-Orange"
                        onClick={openModal}
                    >
                        Contact Us
                    </button>
                </div>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <div className="py-8 lg:py-8 px-4 mx-auto max-w-screen-md">
                                        <img
                                            className="mx-auto h-12 w-auto"
                                            src="/assets/logo/Logo3.svg"
                                            alt="Your Company"
                                        />
                                        <p className="mb-8 lg:mb-16 mt-8 font-light text-center text-Orange sm:text-2xl">
                                            Contact us now? Want to send us feedback?
                                        </p>
                                        <form action="#" className="space-y-8" onSubmit={handleSubmit}>
                                            <div>
                                                <label
                                                    htmlFor="text"
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                                >
                                                    Your Name
                                                </label>
                                                <input
                                                    id="text"
                                                    name="input1"
                                                    value={inputValues.input1}
                                                    onChange={handleChange}
                                                    type="text"
                                                    required
                                                    className="relative block w-full appearance-none rounded-md border border-lightBlue px-3 py-2 hover:border hover:border-Orange sm:text-sm"
                                                    placeholder="Name..."
                                                />
                                            </div>
                                            <div>
                                                <label
                                                    htmlFor="email"
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                                >
                                                    Your email
                                                </label>
                                                <input
                                                    id="email"
                                                    name="input2"
                                                    value={inputValues.input2}
                                                    onChange={handleChange}
                                                    type="email"
                                                    required
                                                    className="relative block w-full appearance-none rounded-md border border-lightBlue px-3 py-2 hover:border hover:border-Orange sm:text-sm"
                                                    placeholder="xyz@email.com"
                                                />
                                            </div>
                                            <div className="sm:col-span-2">
                                                <label
                                                    htmlFor="message"
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                                                >
                                                    Your message
                                                </label>
                                                <textarea
                                                    id="message"
                                                    name="input3"
                                                    value={inputValues.input3}
                                                    onChange={handleChange}
                                                    required
                                                    className="relative block w-full appearance-none rounded-md border border-lightBlue px-3 py-2 hover:border hover:border-Orange sm:text-sm"
                                                    placeholder="Leave a comment..."
                                                ></textarea>
                                            </div>
                                            <button
                                                type="submit"
                                                disabled={isDisabled}
                                                className="py-3 px-5 text-sm font-medium w-full text-center text-white rounded-lg bg-lightBlue hover:bg-Orange"
                                            >
                                                Send message
                                            </button>
                                        </form>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export default Contactusform;

