import React, { ReactNode } from "react";

interface ContainerProps {
  className?: string;
  children?: ReactNode;
}
const Container: React.FC<ContainerProps> = ({ className, children }) => {
  return (
    <div className={`px-4 mx-auto max-w-7xl w-full ${className}`}>
      {children}
    </div>
  );
};

export default Container;
