import React from 'react';
import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

const buttonStyles = {
  base: 'btn transition-transform ', // Transition for smooth hover effect
  variants: {
    default: 'btn-secondary hover:scale-105', // Scale up on hover
    ghost: 'btn-ghost hover:bg-gray-100 hover:scale-105', // Ghost button with hover effect
    dark: 'bg-secondary-dark hover:bg-secondary-dark-hover text-secondary', // Dark button with hover effect
  },
  sizes: {
    default: 'rounded p-2',
    icon: 'rounded-full w-10 h-10 flex items-center justify-center p-2.5', // Adjusted size
  },
};


type ButtonProps = ComponentProps<'button'> & {
  variant?: keyof typeof buttonStyles.variants;
  size?: keyof typeof buttonStyles.sizes;
};

// Button component using ES7 arrow function
const Button: React.FC<ButtonProps> = ({
  variant = 'default',
  size = 'default',
  className,
  ...props
}) => {
  // Combine Tailwind CSS and DaisyUI classes
  const classes = `${buttonStyles.base} ${buttonStyles.variants[variant]} ${buttonStyles.sizes[size]}`;
  return <button {...props} className={twMerge(classes, className)} />;
};

export default Button;
