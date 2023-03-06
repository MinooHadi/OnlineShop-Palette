import React from "react";
import { Link } from "react-router-dom";

import Input from "../input";

import {AiOutlineArrowLeft} from "react-icons/ai"

function Form() {
    return(
        <form className="w-1/3 border-4 rounded-lg border-yellow-400 py-14 m-auto fixed top-1/4 right-1/3 flex flex-col items-center gap-5">
            <div className="self-end pl-12 hover:text-yellow-400">
            <Link to="/" >
                <AiOutlineArrowLeft size="1.5rem" />
            </Link> 
            </div>           
            <Input lable="نام کاربری" type="text" value="" className="border-2 w-96 h-8" />
            <Input lable="رمز عبور" type="password" value="" className="border-2 w-96 h-8" />
            <Input type="submit" value="ورود به پنل ادمین" className="bg-yellow-600 w-44 h-10 text-slate-50 font-semibold rounded-full mt-16" />
        </form>
    )
}

export default Form