import React from "react";

type Text = {
    title: string;
}

export const TitlePrimary: React.FC<Text> = ({ title }) => {
    return(
        <h1 className="font-extrabold text-4xl text-slate-500">
            { title }
        </h1>
    )
}