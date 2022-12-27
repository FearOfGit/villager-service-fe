/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { BsBoxArrowInRight } from 'react-icons/bs';
import { getUserGatheringAPI } from '../../api/gathering';
import { MyListWrapper, Title } from './MyGatheringList.style';

function MyGatheringList() {
  const navigate = useNavigate();
  const { data, refetch } = useQuery(
    ['getUserGathering'],
    () => getUserGatheringAPI(),
    {
      suspense: true,
      refetchOnWindowFocus: false,
      retry: false,
    },
  );

  useEffect(() => {
    console.log(data.data);
  }, [data]);

  return (
    <MyListWrapper>
      <Title>내 모임 목록</Title>
      <ul>
        {data.data.map((gathering) => (
          <li
            key={gathering.partyId}
            onClick={() => navigate(`/gathering/${gathering.partyId}`)}
          >
            <div>
              <span className="location">{gathering.location}</span>
              <h3 className="name">{gathering.partyName}</h3>
            </div>
            <div className="ico">
              <BsBoxArrowInRight />
            </div>
          </li>
        ))}
      </ul>
    </MyListWrapper>
  );
}

export default MyGatheringList;
