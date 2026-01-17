import { Link, useLocation } from "react-router-dom"

const SuccessBookingPage = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const bookingTrxId = queryParams.get("trx_id");
    const email = queryParams.get("email");

    return (
        <div>
            <main className="relative mx-auto min-h-screen w-full max-w-[640px] bg-[#F4F5F7] pb-[30px]">
                <div id="Background" className="absolute left-0 right-0 top-0">
                    <img
                        src="/assets/images/backgrounds/orange.png"
                        alt="image"
                        className="h-[480px] w-full object-cover object-bottom"
                    />
                </div>
                <section
                    id="NavTop"
                    className="fixed left-0 right-0 top-[16px] z-30 transition-all duration-300"
                >
                    <div className="relative mx-auto max-w-[640px] px-5">
                        <div
                            id="ContainerNav"
                            className="relative flex h-[68px] items-center justify-center rounded-[22px] transition-all duration-300"
                        >
                            <h2
                                id="Title"
                                className="font-semibold text-white transition-all duration-300"
                            >
                                Finished Booking
                            </h2>
                        </div>
                    </div>
                </section>
                <section id="ProgressBar" className="relative px-5 pt-[92px]">
                    <div className="flex items-center">

                        {/* STEP 1 - DONE */}
                        <div className="flex flex-1 flex-col items-center">
                            <div className="h-2 w-full rounded-full bg-white"></div>
                            <div className="-mt-[18px] flex flex-col items-center gap-1">
                                <div className="flex h-[25px] w-[25px] items-center justify-center rounded-full bg-white text-xs font-bold text-shujia-orange">
                                    1
                                </div>
                                <p className="text-xs font-semibold text-white">Booking</p>
                            </div>
                        </div>

                        {/* STEP 2 - DONE */}
                        <div className="flex flex-1 flex-col items-center">
                            <div className="h-2 w-full rounded-full bg-white"></div>
                            <div className="-mt-[18px] flex flex-col items-center gap-1">
                                <div className="flex h-[25px] w-[25px] items-center justify-center rounded-full bg-white text-xs font-bold text-shujia-orange">
                                    2
                                </div>
                                <p className="text-xs font-semibold text-white">Payment</p>
                            </div>
                        </div>

                        {/* STEP 3 - ACTIVE */}
                        <div className="flex flex-1 flex-col items-center">
                            <div className="h-2 w-full rounded-full bg-white"></div>
                            <div className="-mt-[18px] flex flex-col items-center gap-1">
                                <div className="flex h-[25px] w-[25px] items-center justify-center rounded-full bg-white text-xs font-bold text-shujia-orange">
                                    3
                                </div>
                                <p className="text-xs font-semibold text-white">Delivery</p>
                            </div>
                        </div>

                    </div>
                </section>
                <div className="relative mt-[44px] px-5">
                    <img
                        src="/assets/images/icons/note-finished.svg"
                        alt="icon"
                        className="h-[70px] w-[70px] shrink-0"
                    />
                    <header className="mt-[19px] flex flex-col gap-[6px]">
                        <h1 className="text-[26px] font-extrabold leading-[39px] text-white">
                            Booking Finished
                        </h1>
                        <p className="leading-[30px] text-white">
                            Kami akan memeriksa pembayaran Anda silahkan periksa status secara
                            berkala
                        </p>
                    </header>
                    <section
                        id="BookingDetails"
                        className="mt-[30px] flex flex-col gap-4 rounded-3xl border border-shujia-graylight bg-white px-[14px] py-[14px]"
                    >
                        <label className="flex flex-col gap-2">
                            <h4 className="font-semibold">Booking TRX ID</h4>
                            <div className="flex h-[52px] w-full items-center gap-3 overflow-hidden rounded-full border border-shujia-graylight bg-[#F4F5F7] px-4">
                                <img
                                    src="/assets/images/icons/note-id-finished.svg"
                                    alt="icon"
                                    className="h-6 w-6 shrink-0"
                                />
                                <input
                                    readOnly
                                    defaultValue={`${bookingTrxId}`}
                                    className="h-full w-full bg-transparent font-semibold leading-6 focus:outline-none"
                                    placeholder="Booking ID"
                                    type="text"
                                />
                            </div>
                        </label>
                        <label className="flex flex-col gap-2">
                            <h4 className="font-semibold">Email Address</h4>
                            <div className="flex h-[52px] w-full items-center gap-3 overflow-hidden rounded-full border border-shujia-graylight bg-[#F4F5F7] px-4">
                                <img
                                    src="/assets/images/icons/amplop-booking-form.svg"
                                    alt="icon"
                                    className="h-6 w-6 shrink-0"
                                />
                                <input
                                    readOnly
                                    defaultValue={`${email}`}
                                    className="h-full w-full bg-transparent font-semibold leading-6 focus:outline-none"
                                    placeholder="Write your email"
                                    type="email"
                                />
                            </div>
                        </label>
                        <hr className="border-shujia-graylight" />
                        <div className="flex gap-[10px]">
                            <img
                                src="/assets/images/icons/penting-finished.svg"
                                alt="icon"
                                className="h-[40px] w-[40px] shrink-0"
                            />
                            <div>
                                <p className="text-sm leading-[21px] text-shujia-gray">
                                    Penting Diingat:
                                </p>
                                <strong className="font-semibold">
                                    Jaga data di amet untuk dolor
                                </strong>
                            </div>
                        </div>
                    </section>
                    <section id="Btn" className="mt-[54px] flex flex-col gap-[14px]">
                        <Link to={`/`}>
                            <p className="w-full rounded-full bg-shujia-orange py-[14px] text-center font-semibold text-white transition-all duration-300 hover:shadow-[0px_4px_10px_0px_#D04B1E80]">
                                Order Service Again
                            </p>
                        </Link>
                        <Link to={`myBooking`}>
                            <p className="w-full rounded-full bg-shujia-black py-[14px] text-center font-semibold text-white">
                                View My Booking Details
                            </p>
                        </Link>
                    </section>
                </div>
            </main>

        </div>
    )
}

export default SuccessBookingPage
