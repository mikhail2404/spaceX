import { InputHTMLAttributes } from 'react'

import './customInput.css'

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: JSX.Element
  className?: string
}

const CustomInput = ({ icon, className, ...props }: CustomInputProps) => {
  return (
    <div className="custom-input-container">
      {icon && <span className="custom-input-icon">{icon}</span>}
      <input className={`custom-input ${className ? className : ''}`} {...props} />
    </div>
  )
}

export default CustomInput
