import { useState } from 'react';
import { MdCheck } from 'react-icons/md';
import {
  TownSetupModal,
  Inner,
  Header,
  MyTownList,
  TownItemBlock,
  ButtonGroup,
  EditorBlock,
} from './TownSetup.style';
import Button from '../../common/Button';

const tempTownList = [
  {
    id: '1',
    name: '연남동',
    nickname: 'HOME',
  },
  {
    id: '2',
    name: '산본동',
    nickname: 'OTHER',
  },
];

function Editor({ id, editValue, setEditValue, setEditing, onEdit }) {
  const handleEdit = () => {
    onEdit(id, editValue);
    setEditing(null);
  };
  return (
    <EditorBlock>
      <div className="input">
        <input
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
        />
        <Button className="btn--edit" onClick={handleEdit}>
          수정
        </Button>
      </div>
      <div className="map">지도</div>
      <div className="created-date">날짜</div>
    </EditorBlock>
  );
}

function TownItem({
  town,
  currentTownId,
  setCurrentTownId,
  removeTown,
  isEditing,
  setEditing,
  updateTownNickname,
}) {
  const [editValue, setEditValue] = useState(town.nickname);

  return (
    <TownItemBlock>
      <div className="item">
        {town.id === currentTownId && <MdCheck className="ico-check" />}
        <div className="name">
          <label htmlFor={town.id}>{`${town.nickname}(${town.name})`}</label>
          <input
            className="hidden"
            type="radio"
            id={town.id}
            name="town"
            checked={currentTownId === town.id}
            onChange={() => setCurrentTownId(town.id)}
          />
        </div>
        <ButtonGroup>
          <Button
            className="btn--edit"
            onClick={() => setEditing(isEditing ? null : town.id)}
          >
            {!isEditing ? '별칭수정' : '취소'}
          </Button>
          <Button className="btn--remove" onClick={() => removeTown(town.id)}>
            삭제
          </Button>
        </ButtonGroup>
      </div>
      {isEditing && (
        <Editor
          id={town.id}
          editValue={editValue}
          setEditValue={setEditValue}
          onEdit={updateTownNickname}
          setEditing={setEditing}
        />
      )}
    </TownItemBlock>
  );
}

function TownSetup({ show, onClose }) {
  const [myTownList, setMyTownList] = useState(tempTownList);
  const [currentTownId, setCurrentTownId] = useState('1');
  const [editingId, setEditingId] = useState(null);

  const updateTownNickname = (id, nickname) => {
    const newTowns = myTownList.map((town) =>
      town.id === id ? { ...town, nickname } : town,
    );
    setMyTownList(newTowns);
  };

  const removeTown = (id) => {
    const newTowns = myTownList.filter((town) => town.id !== id);
    setMyTownList(newTowns);
  };

  return (
    <TownSetupModal show={show}>
      <Header>
        <Inner className="header__inner">
          <Button className="btn--close" onClick={onClose}>
            X
          </Button>
          <h1 className="header__title">내 동네 설정하기</h1>
        </Inner>
      </Header>
      <MyTownList>
        <Inner>
          {myTownList.map((town) => (
            <TownItem
              key={town.id}
              town={town}
              currentTownId={currentTownId}
              setCurrentTownId={setCurrentTownId}
              removeTown={removeTown}
              isEditing={editingId === town.id}
              setEditing={setEditingId}
              updateTownNickname={updateTownNickname}
            />
          ))}
          <div className="add">
            <Button>+</Button>
          </div>
        </Inner>
      </MyTownList>
    </TownSetupModal>
  );
}

export default TownSetup;
