import get from "lodash.get";
import Table from "rsuite/Table";
import "rsuite-table/dist/css/rsuite-table.min.css";

export default function CustomTable({ data, dataColumns, id }) {
  return (
    <Table autoHeight data={data} id={id}>
      {dataColumns.map(({ dataKey, title, width }) => (
        <Table.Column resizable width={width} key={dataKey}>
          <Table.HeaderCell>{title}</Table.HeaderCell>
          <Table.Cell dataKey={dataKey}>
            {(rowData) => get(rowData, dataKey)}
          </Table.Cell>
        </Table.Column>
      ))}
    </Table>
  );
}
