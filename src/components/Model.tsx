import React from "react";
export function Model({children, title}:{children:React.ReactNode, title: string}){
    return(
        <>
            <h2 className="title-weather font-bold text-white text-center mb-4">{title}</h2>
            {children}
        </>
    )

}