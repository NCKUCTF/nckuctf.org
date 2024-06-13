import Title from "./Title";
import { useState, useEffect } from "react";
import SubTitle from "./SubTitle";
interface AwardData {
  name: string;
  description: string;
}
export default function Award() {
  const [awards, setAwards] = useState<AwardData[]>([]);

  useEffect(() => {
    fetch("/awards.json")
      .then((response) => response.json())
      .then((data: AwardData[]) => setAwards(data))
      .catch((error) => console.error("Failed to load awards:", error));
  }, []);
  return (
    <>
      <div className="container mx-auto px-4 pt-16" id="award">
        <SubTitle
          className="mt-16 text-center lg:text-xl"
          text="每個獎項後面都有一段故事"
        />
        <Title
          className="mt-1 font-bold text-4xl text-center lg:text-3xl lg:mt-3 mb-8"
          text="獲獎紀錄"
        />
        <div className="container mx-auto mt-10">
          <table className="table-auto w-full">
            <tbody>
              {awards.map((award, index) => (
                <tr key={index} className="">
                  <td className="border-transparent px-4 py-2 text-left">
                    {award.name}
                  </td>
                  <td className="border-transparent px-4 py-2 text-right">
                    {award.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
