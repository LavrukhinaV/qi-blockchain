import "./LoadMoreButton.css";

function LoadMoreButton({onClick, buttonClassName}) {

  return (
    <button type="button" className={buttonClassName} onClick={onClick}>Load More</button>
  );
}

export default  LoadMoreButton;