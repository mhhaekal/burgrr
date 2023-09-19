import Nav from "../Component/Nav"
import Button from "../Component/Button"

const CashierProfile = () => {
    return (
        <div>
            <div className="flex h-[screen]">
                <Nav />


                <div>
                    <div className="text-5xl font-black p-10">Cashier Profile</div>

                    <div className="pl-10 w-[1000px] justify-between flex">




                        <div className="w-[400px] border">

                        </div>

                        <div className="flex flex-col gap-20 w-[500px] text-2xl">
                            <div className="flex justify-between border-4 border-white border-b-green-600">
                                <div>Username</div>
                                <div>Andre</div>
                            </div>

                            <div className="flex justify-between border-4 border-white border-b-green-600">
                                <div>Email</div>
                                <div>adidu@gmail.com</div>
                            </div>

                            <div className="flex justify-between border-4 border-white border-b-green-600">
                                <div>profile image</div>
                                <Button text="change image" style="btn mb-3" />
                            </div>

                            <div className="flex justify-between border-4 border-white border-b-green-600">
                                <div>password</div>
                                <Button text="change password" style="btn mb-3" />
                            </div>
                        </div>

                    </div>



                </div>

            </div>
        </div>
    )
}

export default CashierProfile