import { Link } from "react-router-dom";
import DeletePortfolio from "../DeletePortfolio/DeletePortfolio";

interface Props {
  portfolioValue: string;
  onPortfolioDelete: (e: string) => void;
}
const CardPortfolio: React.FC<Props> = ({
  portfolioValue,
  onPortfolioDelete,
}) => {
  return (
    <div className="flex flex-col w-full p-8 space-y-4 text-center rounded-lg shadow-lg md:w-1/3">
      <Link
        to={`/company/${portfolioValue}`}
        className="pt-6 text-xl font-bold"
      >
        {portfolioValue}
      </Link>
      <DeletePortfolio
        onPortfolioDelete={onPortfolioDelete}
        portfolioValue={portfolioValue}
      />
    </div>
  );
};
export default CardPortfolio;