import axios from "axios";
import { useEffect, useState } from "react";
import right from "../public/svgs/arrow-right.svg";
import left from "../public/svgs/arrow-left.svg";
import Image from "next/image";

export default function Home() {
  const [rows, setRows] = useState([]);
  const [defaultRows, setDefaultRows] = useState([]);
  const [mainRows, setMainRows] = useState([]);

  const getData = async () => {
    const response = await axios.get("/api/table_data");
    console.log(response.data);
    setMainRows(response.data?.data);
  };

  const pageLength = 10;

  const [currentPage, setCurrentPage] = useState(0);

  const setPagination = () => {
    var pageNumbers = 0;
    if (defaultRows.length % pageLength === 0) {
      pageNumbers = defaultRows.length / pageLength;
    } else {
      pageNumbers = defaultRows.length / pageLength + 1;
    }
    const numbers = [];
    var x = 1;
    while (x < pageNumbers) {
      numbers.push(x);
      x += 1;
    }
    return { pageNumbers, numbers };
  };

  const { pageNumbers, numbers } = setPagination();

  useEffect(() => {
    setDefaultRows(mainRows);
  }, [mainRows]);
  useEffect(() => {
    if (defaultRows.length > pageLength) {
      listSlicer(1);
    } else {
      setRows(defaultRows);
    }
  }, [defaultRows]);

  const listSlicer = (pageNo) => {
    if (pageNo > 0 && pageNo <= pageNumbers) {
      const start = pageNo * pageLength - pageLength;
      const stop = pageNo * pageLength - 1;
      setRows(defaultRows.slice(start, stop));
      setCurrentPage(pageNo);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="p-3">
        <div className="mb-3">
          <input
            type="text"
            className="outline-none p-2 border-2 border-[#dddddd]"
            placeholder="Search"
            onChange={(e) =>
              setDefaultRows(
                mainRows.filter(
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
                    item.thing
                      .toLowerCase()
                      .includes(e.target.value.toLowerCase())
                )
              )
            }
          />
        </div>
        <table className="text-left w-full border-collapse font-nunito">
          <tbody>
            <tr className="even:bg-[#dddddd]">
              <th className="border-[#dddddd] p-2 border-2">Name</th>
              <th className="border-[#dddddd] p-2 border-2">Place</th>
              <th className="border-[#dddddd] p-2 border-2">Animal</th>
              <th className="border-[#dddddd] p-2 border-2">Food</th>
              <th className="border-[#dddddd] p-2 border-2">Thing</th>
            </tr>

            {rows.map((row, index) => (
              <tr key={index} className="even:bg-[#dddddd]">
                <td className="border-[#dddddd] p-2 border-2">{row.name}</td>
                <td className="border-[#dddddd] p-2 border-2">{row.place}</td>
                <td className="border-[#dddddd] p-2 border-2">{row.animal}</td>
                <td className="border-[#dddddd] p-2 border-2">{row.food}</td>
                <td className="border-[#dddddd] p-2 border-2">{row.thing}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="py-3 ">
          <div className="flex justify-center">
            <div
              className="flex items-center shadow-lg  w-max hover:shadow-inner cursor-pointer"
              onClick={() => listSlicer(currentPage - 1)}
            >
              <Image src={left} alt="" width={30} height={30} />
            </div>
            {numbers.map((number, index) => (
              <div
                key={index}
                className={`flex items-center shadow-lg  w-max hover:shadow-inner cursor-pointer p-3 ${
                  currentPage === number && "shadow-inner"
                }`}
                onClick={() => listSlicer(number)}
              >
                {number}
              </div>
            ))}
            <div
              className="flex items-center shadow-lg w-max hover:shadow-inner cursor-pointer"
              onClick={() => listSlicer(currentPage + 1)}
            >
              <Image src={right} alt="" width={30} height={30} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
