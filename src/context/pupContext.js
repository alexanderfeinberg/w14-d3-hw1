import { createContext, useState, useContext } from "react";
import speedy from "../pups/speedy-pup.jpg";

export const pupContext = createContext();
export const PupProvider = (props) => {
  const [puppyType, setPuppyType] = useState(speedy);
  return (
    <pupContext.Provider value={{ puppyType, setPuppyType }}>
      {props.children}
    </pupContext.Provider>
  );
};

export const usePuppyType = () => {
  return useContext(pupContext);
};
