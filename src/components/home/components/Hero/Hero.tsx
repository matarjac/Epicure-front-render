import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Istore } from "../../../../types/interfaces/Istore";
import IUser from "../../../../types/interfaces/IUser";
import './hero.css';
import SearchHero from "./SearchHero";

interface IUserData {
    firstName: string,
    lastName: string,
    userName: string,
    userEmail: string,
}

export const Hero: React.FC = () => {
    const [userName, setUserName] = useState<string>('')
    useEffect(() => {
        const storageUserData = sessionStorage.getItem("user");
        const userData: IUserData | null = storageUserData ? JSON.parse(storageUserData) : null;
        const userFirstName: string = userData ? userData.firstName : '';
        setUserName(userFirstName);
    }, [])

    return (
        <>
            <div className="hero">
                {userName && <div className="hello-div">
                    <span>
                        Hello {userName}!
                    </span>
                </div>
                }
                <SearchHero />
            </div>

        </>
    );
}

export default Hero;