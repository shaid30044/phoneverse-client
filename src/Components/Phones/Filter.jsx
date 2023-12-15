import AllPhones from "./AllPhones";

const Filter = () => {
  return (
    <div>
      <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-4">
        <div className="bg-white"></div>

        <div className="md:col-span-2 xl:col-span-3">
          <AllPhones />
        </div>
      </div>
    </div>
  );
};

export default Filter;
