/* eslint-disable react/prop-types */



export const FieldSet = ({label, children}) => {
    
  return (
    <fieldset className="m-2 border-none  p-0 text-2xl">
    {label && <legend className="text-md font-bold mb-2">{label}</legend>}
    <div className="flex flex-col justify-between self-start">{children}</div>
    </fieldset>
  )
}
