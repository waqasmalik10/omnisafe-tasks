import React from 'react'
import { TailSpin } from  'react-loader-spinner';

interface Props{
    height?: string;
    width?: string;
    color?: string;
    wrapperStyle?: any;
}

const Loader = ({height, width, wrapperStyle, color}: Props) => {

    return(
        <TailSpin
            height = {height || "40"}
            width = {width || "40"}
            radius = "0"
            color = {color || 'blue'}
            wrapperStyle={{...wrapperStyle, display: 'flex', justifyContent: 'center'}}
        />
    )
}

export default Loader;