import { useNavigate } from 'react-router-dom';
import { AiFillHeart, AiOutlineUser } from 'react-icons/ai';

import {
  GatheringTitle,
  ItemBlock,
  TagWrapper,
  Writer,
  Top,
  Date,
  Middle,
  Location,
  Bottom,
  Thumbnail,
} from './GatheringItem.style';

function GatheringItem({ info }) {
  const navigate = useNavigate();
  return (
    <ItemBlock onClick={() => navigate(`/gathering/${info.partyId}`)}>
      <Thumbnail>
        <Location>{info.location}</Location>
      </Thumbnail>
      <Top>
        <Writer>
          <div className="ico-user">
            <AiOutlineUser />
          </div>
          <span className="nickname">{info.nickname}</span>
        </Writer>
        <Date>{`${info.startDt} ~ ${info.endDt}`}</Date>
      </Top>
      <Middle>
        <GatheringTitle>{info.partyName}</GatheringTitle>
        <div className="count">
          <span>
            {info.partyPeople}{' '}
            <span className="big">/ {info.numberPeople}</span>
          </span>
        </div>
      </Middle>
      <Bottom>
        <TagWrapper>
          {info.tagNameList.map((tag) => (
            <span key={tag}>#{tag.replace('#', '')}</span>
          ))}
        </TagWrapper>
        <div className="ico-like">{info.partyLike ? <AiFillHeart /> : ''}</div>
      </Bottom>
    </ItemBlock>
  );
}

export default GatheringItem;
