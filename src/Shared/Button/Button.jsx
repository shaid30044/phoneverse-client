import "./button.css";

const Button = ({ type }) => {
  return (
    <button className="btn btn-sm normal-case btn-custom bg-transparent hover:bg-transparent shadow-none border-none text-lg font-normal rounded-none h-10 px-6">
      <span> {type}</span>
    </button>
  );
};

export default Button;
