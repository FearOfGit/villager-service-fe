import { useNavigate } from 'react-router-dom';
import { AiFillHeart } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';

import {
  Text,
  GatheringTitle,
  ItemBlock,
  ContentText,
  LocationWrapper,
  TagWrapper,
  JoinButton,
} from './GatheringItem.style';

function GatheringItem({ info }) {
  const [address1, address2, ...rest] = info.location.split(' ');
  const navigate = useNavigate();
  return (
    <ItemBlock>
      <GatheringTitle>{info.partyName}</GatheringTitle>
      <div className="flex">
        <Text>{`${info.startDt} ~ ${info.endDt}`}</Text>
        <Text>{info.nickname}</Text>
      </div>
      <ContentText className="content">{info.content}</ContentText>
      <div className="flex-2">
        <LocationWrapper>
          <div className="marker">
            <BiMap />
          </div>
          <div className="text">
            <span>
              {address1} {address2}
            </span>
            <span>{rest.length ? rest.join(' ') : ''}</span>
          </div>
        </LocationWrapper>
        <TagWrapper>
          {info.tagNameList.map((tag) => (
            <span key={tag}>#{tag.replace('#', '')}</span>
          ))}

          <div className="like">{info.partyLike ? <AiFillHeart /> : ''}</div>
        </TagWrapper>
      </div>
      <JoinButton onClick={() => navigate(`/gathering/${info.partyId}`)}>
        모임 신청하기
      </JoinButton>
    </ItemBlock>
  );
}

export default GatheringItem;
