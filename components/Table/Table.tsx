import * as styles from "./Table.css";

interface TableProps {
  columns: {
    heading: string;
    accessor: string;
  }[];
  data: {
    [key: string]: any;
  }[];
  caption?: string;
}

const Table = ({ columns, data, caption }: TableProps) => {
  return (
    <table className={styles.root}>
      {caption ? <caption>{caption}</caption> : null}
      <thead>
        <tr>
          {columns.map((column, index) => {
            return (
              <th key={index} className={styles.heading}>
                {column.heading}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => {
          return (
            <tr key={index}>
              {columns.map((column, index) => {
                return (
                  <td key={index} className={styles.cell}>
                    {row[column.accessor]}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export { Table };
