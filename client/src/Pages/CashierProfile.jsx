import Nav from "../Component/Nav"
import Button from "../Component/Button"
import Input from "../Component/Input"

const CashierProfile = () => {
    return (
        <div>
            <div className="flex h-[screen]">
                <Nav />


                <div>
                    <div className="text-5xl font-black p-10">Cashier Profile</div>

                    <div className="pl-10 w-[1200px] justify-between flex">

                        <div className="w-[400px] border bg-green-200 rounded-xl">

                        </div>

                        <div className="flex flex-col gap-20 w-[700px] text-2xl">
                            <div className="flex justify-between border-4 border-white border-b-green-600">
                                <div>Username</div>
                                <div className="mb-3">Andre</div>
                            </div>

                            <div className="flex justify-between border-4 border-white border-b-green-600">
                                <div>Email</div>
                                <div className="mb-3">adidu@gmail.com</div>
                            </div>

                            <div className="flex justify-between border-4 border-white border-b-green-600">
                                <div className="flex items-center">profile image</div>
                                <div className="border mb-3"><Input type={"file"} style={"file-input w-[250px] border"} />
                                </div>

                            </div>

                            <div className="flex justify-between border-4 border-white border-b-green-600">
                                <div className="flex items-center">password</div>
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