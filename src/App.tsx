import "./global.css";
import Card from "./components/Card";
import dataset from "./data.json"


function App() {
  return (
    <div className="bg-color3 h-screen  flex flex-col font-Tomorrow text-base align-center justify-center">
      <div className="relative flex flex-row justify-between w-[200px]">
        <div className=" w-[13.33px] h-[13.33px]"></div>
        <img src="activity.png" className="ml-8" alt="activity" />
        <h2 className="text-white w-[215px] h-[32px] flex justify-center items-center ml-2">
          Trending assets
        </h2>
      </div>
      <div className="w-screen flex flex-row justify-around items-center">
        {dataset.map((data) => {
          return (
            <Card
              title={data.title}
              price={data.price}
              profit={data.profit}
              val={data.TVL}
              serial={data.serial}
              icon={data["asset-icon"]}
              pairs={data.pairs}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
