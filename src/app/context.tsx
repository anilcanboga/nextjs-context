"use client"
import React ,{createContext, useContext, useState} from "react";

interface IContext {
    data: any;
    setData: any;
}

const defaultContext: IContext = {
    data: null,
    setData: null,
};

const Context = createContext<IContext>(defaultContext);

export function useAppContext() {
    return useContext(Context);
}

type Props = {
    children: React.ReactNode;
};


export function AppContext({ children }: Props) {
    const [data, setData] = useState<any>("test");
    const sharedState : IContext = {
        data,
        setData,
    }
    return (
        <Context.Provider value={sharedState}>
            {children}
        </Context.Provider>
    );
}