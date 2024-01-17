interface Props {
  onPortfolioCreate: (e: string) => void;
  symbol: string;
}

const AddPortfolio: React.FC<Props> = ({ onPortfolioCreate, symbol }) => {
  return (
    <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
      <button
        className="p-2 px-8 text-white bg-darkBlue rounded-lg hover:opacity-70 focus:outline-none"
        onClick={() => onPortfolioCreate(symbol)}
      >
        Add
      </button>
    </div>
  );
};
export default AddPortfolio;
