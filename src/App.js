import React, { useEffect, useState } from "react";

function FetchRecord() {
  const [record, setRecord] = useState([]);

  useEffect(() => {
   // fetch("https://data.police.uk/api/crime-categories")
    fetch("https://data.police.uk/api/forces")  
  // fetch("https://data.police.uk/api/crimes-no-location?category=all-crime&force=leicestershire")  
   .then((response) => response.json())
      .then((data) => setRecord(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <table>
        <tr>  
        <td>
          {record.map((list, index) => (
            <li key={index}>{list.name}</li>
          ))}
          ;
        </td>
        </tr>
      </table>
    </div>
  );
}
export default FetchRecord;
