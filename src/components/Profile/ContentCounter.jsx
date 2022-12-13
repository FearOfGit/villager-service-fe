import { ContentCounterBlock } from './ContentCounter.style';

function ContentCounter({ title, count }) {
  return (
    <ContentCounterBlock>
      <div className="title">{title}</div>
      <div className="count">{count}</div>
    </ContentCounterBlock>
  );
}

export default ContentCounter;
