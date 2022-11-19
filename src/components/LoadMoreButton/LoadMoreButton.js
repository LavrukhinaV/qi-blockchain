import "./LoadMoreButton.css";
import { useRouteMatch } from 'react-router-dom';

function LoadMoreButton() {
  const { path } = useRouteMatch();
  const isMain = path === '/';
  const buttonClassName = (
    `load-more-button  ${isMain ? '' : 'load-more-button_page_history'}`
  );

  return (
    <button type="button" className={buttonClassName}>Load More</button>
  );
}

export default  LoadMoreButton;