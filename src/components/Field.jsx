/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */
import React from 'react';


export const Field = ({label, children, htmlFor, error}) => {
    const id = htmlFor || getChildId(children); 
  return (
    <div className="flex flex-col items-start justify-start mt-3 p-0 w-full mr-2">
        {label && <label className="font-semibold text-purple-600"  htmlFor={id}>{label}</label>}
        {children}
        {!!error && <div className="text-red-500 text-xs">{error.message}</div>}
    </div>
  )
}

function getChildId(children) {
    const child = React.Children.only(children);
    if("id" in child?.props){
        return child.props.id;
    }
}