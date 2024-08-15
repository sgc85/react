import { ReactNode } from "react";
import styles from "./Button.module.css"

interface Props {
  children: ReactNode;
}

const Button = ({ children }: Props) => {
  return (
    <div>
      <button className= {styles.btn} >
        {children}
      </button>
    </div>
  );
};

export default Button;
