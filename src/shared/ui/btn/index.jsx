import "./index.css";

export const Btn = ({children, onClick, className}) => {

  return <button onClick={onClick} className={className}>{children}</button>
}