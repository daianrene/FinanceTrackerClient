interface Props {
  portfolioValue: string;
  onPortfolioDelete: (e: string) => void;
}
const DeletePortfolio: React.FC<Props> = ({
  onPortfolioDelete,
  portfolioValue,
}) => {
  return (
    <div>
      <button
        className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-red-500 hover:text-red-500 hover:bg-white border-red-500"
        onClick={() => onPortfolioDelete(portfolioValue)}
      >
        X
      </button>
    </div>
  );
};
export default DeletePortfolio;
