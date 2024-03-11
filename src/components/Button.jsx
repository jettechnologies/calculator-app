/* eslint-disable react/prop-types */
const Button = ({value, handleAction, theme}) => {
  return (
    <button 
      className=  {`primary-btn-theme-${theme} min-w-full w-[3rem] lg:w-[5rem] h-[4rem] fluid-typography capitalize text-center`} 
      value={value}
      onClick={(e) => handleAction(e.target.value)}>
        {value}
      </button>
  )
}

export default Button