import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  label?: string;
}

export const Input = ({ placeholder, label, ...rest }: InputProps) => {
  return (
    <div className="flex flex-col gap-2 relative">
      <input
        placeholder={placeholder || label}
        className="peer rounded-2 py-2 px-4 border-core-white-30 border-thin bg-core-grey-800 text-core-white-100 text-base placeholder-core-transparent"
        {...rest}
      />

      <label className="font-hind text-sm text-core-white-50 absolute left-0 -top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-core-white-50 peer-placeholder-shown:top-3 peer-placeholder-shown:left-4 transition-all">
        {label}
      </label>
    </div>
  );
};
