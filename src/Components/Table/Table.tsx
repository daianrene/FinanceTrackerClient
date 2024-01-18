interface Props {
  config: any;
  data: any;
}

const Table = ({ config, data }: Props) => {
  const renderedRows = data.map((company) => (
    <tr key={company.cik}>
      {config.map((c: any) => (
        <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-800">
          {c.render(company)}
        </td>
      ))}
    </tr>
  ));

  const renderedHeaders = config.map((c: any) => (
    <th
      className="p-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
      key={c.label}
    >
      {c.label}
    </th>
  ));

  return (
    <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8">
      <table>
        <thead className="min-w-full divide-y divide=gray-200 m-5">
          {renderedHeaders}
        </thead>
        <tbody>{renderedRows}</tbody>
      </table>
    </div>
  );
};
export default Table;
