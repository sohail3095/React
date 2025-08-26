import Header from "./Components/Header";
import Card from "./Components/Card";
import CardData from "./Components/CardData";
import "./App.css";
const App = () => {
  return (
    <>
      <Header />
      <div className="card-wrapper">
        {CardData.map((items) => {
          return <Card userImg={items.imgUrl} name={items.name} profile={items.profile} linkdinUrl={items.linkdinUrl} key={items.id} />;
        })}
      </div>
    </>
  );
};

export default App;
