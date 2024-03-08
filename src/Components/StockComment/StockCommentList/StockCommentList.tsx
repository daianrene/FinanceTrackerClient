import { CommentGet } from "../../../Models/Comment";
import StockCommentListItem from "./StockCommentListItem";

interface Props {
  comments: CommentGet[];
}

const StockCommentList = ({ comments }: Props) => {
  return (
    <>
      {comments
        ? comments.map((com) => <StockCommentListItem comment={com} />)
        : ""}
    </>
  );
};
export default StockCommentList;
