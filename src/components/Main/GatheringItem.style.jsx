import styled from 'styled-components';
import palette from '../../lib/palette';

export const ItemBlock = styled.li`
  border: 1px solid #ccc;
  display: block;
  width: 70%;
  border-radius: 10px;
  padding: 1rem 0.7rem;
  position: relative;
  flex-shrink: 0;
  cursor: pointer;
  & + li {
    margin-left: 1rem;
  }
  .big {
    font-size: 1.05rem;
  }
`;

export const Thumbnail = styled.div`
  height: 150px;
  background-color: #4ab7b6;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  border-radius: 10px;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

export const Writer = styled.div`
  display: flex;
  align-items: center;
  .ico-user {
    width: 18px;
    height: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    border-radius: 50%;
  }
  .nickname {
    margin-left: 0.2rem;
    font-size: 0.7rem;
  }
`;

export const Date = styled.span`
  font-size: 0.5rem;
`;

export const Middle = styled.div`
  margin-top: 0.5rem;
  .count {
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    flex-shrink: 0;
  }
`;

export const GatheringTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Location = styled.span`
  font-size: 1rem;
  color: #fff;
  display: block;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Bottom = styled.div`
  margin-top: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .ico-like {
    color: red;
    display: flex;
    justify-content: center;
    font-size: 1.2rem;
  }
`;

export const TagWrapper = styled.div`
  font-size: 0.7rem;
  .like {
    margin-top: 0.5rem;

    color: red;
  }
`;

export const JoinButton = styled.div`
  background-color: #ea7173;
  position: absolute;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  right: -103px;
  top: 100px;
  width: 239px;
  height: 35px;
  transform: rotate(-90deg);
  color: #fff;
  font-size: 0.8rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
