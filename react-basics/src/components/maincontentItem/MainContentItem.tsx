import "./MainContentItem.css";

interface MainContentItemProps {
  title: string;
  text: string;
  image: string;
}

const MainContentItem = ({ title, text, image }: MainContentItemProps) => {
  return (
    <div className="MainContentItem">
      <h1>{title}</h1>
      <p>{text}</p>
      <img src={image} alt="" />
      <button>DONATE</button>
    </div>
  );
};

export default MainContentItem;
