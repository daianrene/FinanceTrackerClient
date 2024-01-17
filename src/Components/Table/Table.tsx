import { testIncomeStatementData } from "./testData";

const data = testIncomeStatementData;

type Company = (typeof data)[0];

const configs = [
  {
    label: "Accepted Date",
    render: (company: Company) => company.acceptedDate,
  },
  {
    label: "Cost of revenue",
    render: (company: Company) => company.costOfRevenue,
  },
];

const renderedRows = data.map((company) => (
  <tr key={company.cik}>
    {configs.map((c) => (
      <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-800">
        {c.render(company)}
      </td>
    ))}
  </tr>
));

const renderedHeaders = configs.map((c) => (
  <th
    className="p-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
    key={c.label}
  >
    {c.label}
  </th>
));

const Table = () => {
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
