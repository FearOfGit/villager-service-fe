import { PreviewBlock, List } from './Preview.style';

function Preview({ title }) {
  return (
    <PreviewBlock>
      <div className="title">
        <h3>{title}</h3>
        <div className="details" />
      </div>
      <List>
        <li className="item">
          가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사
        </li>
        <li className="item">
          가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사
        </li>
        <li className="item">
          가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사
        </li>
      </List>
    </PreviewBlock>
  );
}

export default Preview;
