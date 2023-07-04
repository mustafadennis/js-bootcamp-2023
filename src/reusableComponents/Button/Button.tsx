import "./Button.css";

interface ButtonProps {
  icon?: string;
  text: string;
  buttonColor?: "red" | "blue" | "green";
}

const Button = ({ icon, text, buttonColor }: ButtonProps) => {
  return (
    <button
      style={
        buttonColor
          ? { backgroundColor: buttonColor }
          : { backgroundColor: "gray" }
      }
      className="SharedButton"
    >
      {text} {icon && <img className="ButtonIcon" src={icon} alt="" />}
    </button>
  );
};

export default Button;
