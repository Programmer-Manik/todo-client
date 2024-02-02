import { ReactNode } from "react";
type tContainer = {
   children:ReactNode;
}
const Container = ({children}:tContainer) => {
  return (
    <div className="h-screen w-full max-w-7xl mx-auto">
      {children}
    </div>
  );
};

export default Container;
