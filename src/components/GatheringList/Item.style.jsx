import styled from 'styled-components';

export const ItemBlock = styled.li`
  border: 1px solid black;
  display: block;
  width: 100%;
  border-radius: 10px;
  padding: 1rem;
  padding-right: 3.5rem;
  position: relative;
  .title {
    font-size: 1.3rem;
    font-weight: 700;
  }
  .sub-info {
    margin-top: 0.7rem;
    display: flex;
    justify-content: space-between;
    font-size: 0.8rem;
    color: #303733;
  }
  .content {
    margin-top: 0.5rem;
    background-color: #f7f7f7;
    min-height: 100px;
    padding: 0.5rem;
    border-radius: 10px;
    font-size: 0.8rem;
    color: #303733;
  }
  .extra-info {
    margin-top: 0.7rem;
    display: flex;
    justify-content: space-between;
    width: 100%;
    .location {
      display: flex;
      .text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 0.7rem;
        color: #b1b1b1;
        font-size: 0.7rem;
        span + span {
          display: inline-block;
          margin-top: 0.2rem;
          font-size: 0.9rem;
        }
      }
    }
    .marker {
      width: 40px;
      height: 40px;
      background-color: #4ab7b6;
      border-radius: 50%;
    }
    .etc {
      font-size: 0.7rem;
      .like {
        display: flex;
        justify-content: flex-end;
        margin-top: 0.5rem;
      }
    }
  }

  .btn {
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
  }

  & + li {
    margin-top: 1rem;
  }
`;
