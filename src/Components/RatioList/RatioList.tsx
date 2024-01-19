interface Props<T> {
  data: T;
  config: {
    label: React.ReactNode;
    render: (data: T) => React.ReactNode;
    subTitle?: string;
  }[];
}

const RatioList = <T,>({ data, config }: Props<T>) => {
  return (
    <div className="bg-white shadow rounded-lg m-4 p-4 sm:p-6 w-full">
      <ul className="divide-y divide-gray-200">
        {config.map((row) => (
          <li className="py-3 sm:py-4 ">
            <div className="flex items-center center space-x-4">
              <div className="flex-1 min-w-0">
                <p className="p text-sm font-medium text-gray-800 truncate">
                  {row.label}
                </p>
                <p className="text-sm text-gray-400 truncate">{row.subTitle}</p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-800">
                {row.render(data)}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RatioList;
