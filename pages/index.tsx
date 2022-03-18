import axios from "axios";
import { useEffect, useState } from "react";
import { MockDataProps } from "../utils/data";
import DataTable from "../components/table";

export default function Home() {
  const [mockData, setMockData] = useState<MockDataProps[]>([]);
  const [filteredData, setFilteredData] = useState(mockData);

  const getData = async () => {
    const { data } = await axios.get("/api/table_data");
    setMockData(data?.data);
    setFilteredData(data?.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="mb-3 mt-5">
      <input
        type="text"
        className="outline-none p-2  border-2 border-[#dddddd]"
        placeholder="Search"
        onChange={(e) =>
          setFilteredData(
            mockData.filter(
              (item) =>
                item.name
                  .toLowerCase()
                  .includes(e.target.value.toLowerCase()) ||
                item.place
                  .toLowerCase()
                  .includes(e.target.value.toLowerCase()) ||
                item.animal
                  .toLowerCase()
                  .includes(e.target.value.toLowerCase()) ||
                item.food
                  .toLowerCase()
                  .includes(e.target.value.toLowerCase()) ||
                item.thing.toLowerCase().includes(e.target.value.toLowerCase())
            )
          )
        }
      />

      <DataTable mockData={filteredData} />
    </div>
  );
}
