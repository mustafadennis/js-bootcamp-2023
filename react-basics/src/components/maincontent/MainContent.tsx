import MainContentItem from "../maincontentItem/MainContentItem";
import "./MainContent.css";

const MainContent = () => {
  return (
    <div className="MainContent">
      <MainContentItem
        title="Cool cat"
        text="text1 lorem lorem lorem"
        image="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQ5pAUkFjASncLgVEsqVbwyTj0LP1ObO85jakWZEibYYmjHzzQux9-C1zQ2DXiZnAldF_l5_EXyZXQqQf4"
      />
      <MainContentItem
        title="Oreo"
        text="text2 lorem lorem lorem"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS28bmpsKW9L-VGatpQkN0o76KwZr0vcvFnSL9jowX5I31cR9LB9h48uGU-vuP5ddsnFm_e&s"
      />
      <MainContentItem
        title="Lukum"
        image="https://www.purina.ee/sites/default/files/styles/ttt_image_510/public/2021-02/CAT%20BREED%20Hero%20Mobile_0013_Ragdoll.jpg?itok=LaJ17-Js"
        text="text3 lorem lorem lorem"
      />
    </div>
  );
};

export default MainContent;
