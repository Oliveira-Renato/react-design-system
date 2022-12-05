import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';

export interface CheckboxProps extends CheckboxPrimitive.CheckboxProps{}

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root className='w-6 h-6 p-[2px] rounded bg-gray-800' {...props}>
      <CheckboxPrimitive.Indicator asChild>
        <Check weight='bold' className='text-cyan-500 h-5 w-5'/>
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}