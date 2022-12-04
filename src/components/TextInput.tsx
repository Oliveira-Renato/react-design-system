import { Slot } from '@radix-ui/react-slot';
import { InputHTMLAttributes, ReactNode } from 'react';


export interface TextInputRootProps{
  children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
  return (
    <div className='flex items-center gap-3 px-4 py-3 rounded transition-colors bg-gray-800 w-full focus-within:ring-2 ring-cyan-300'>
    {props.children}
    </div>
  )
}
TextInputRoot.displayName = 'TextInput.Root';


export interface TextInputIconProps {
  children: ReactNode;
}

function TextInputIcon(props: TextInputIconProps) {
  return (
    <Slot className='w-6 h-4 text-gray-400'>
      {props.children}
    </Slot>
  )
}
TextInputIcon.displayName = 'TextInput.Icon';

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function TextInputInput(props: TextInputInputProps) {;
  return (
    <input 
      className= 'flex-1 outline-none text-xs text-gray-100 placeholder:text-gray-400 bg-transparent'
      {...props}
    />
  )
}
TextInputInput.displayName = 'TextInput.Input';

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon
}