import React from "react";

interface CustomInputProps {
  label?: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  className = "",
}) => {
  return (
    <div className="flex flex-col">
      {label && <label className="mb-1 text-sm font-medium">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none ${className}`}
      />
    </div>
  );
};

export default CustomInput;