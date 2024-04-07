const items = [
  { title: "Calories", description: "277kcal" },
  { title: "Carbs", description: "0g" },
  { title: "Protein", description: "20g" },
  { title: "Fat", description: "22g" },
];

const Table = () => {
  return items.map((item, i) => (
    <>
      <div
        className={`flex py-4 px-8 ${
          items.length - 1 === i ? "" : "border-b-[0.2px] border-b-light-grey"
        }`}
      >
        <>
          <div className="flex-1">{Object.values(item)[0]}</div>
          <div className="text-primary font-bold flex-1">
            {Object.values(item)[1]}
          </div>
        </>
      </div>
    </>
  ));
};

export default Table;
