import { Table } from "flowbite-react";
import moment from "moment";

function MyRecoveredTableRow({ item }) {
  return (
    <>
      {item && (
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className=" text-sm  dark:text-white">
            {item.name}
          </Table.Cell>
          <Table.Cell>{item.location}</Table.Cell>
          <Table.Cell>
            {item.date && moment(item.date).format("DD/MM/YYYY")}
          </Table.Cell>
        </Table.Row>
      )}
    </>
  );
}

export default MyRecoveredTableRow;

// {moment(date).format("DD/MM/YYYY")}
