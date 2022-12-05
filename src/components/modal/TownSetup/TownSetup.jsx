import { useState } from 'react';
import { MdCheck } from 'react-icons/md';
import { TownSetupModal, Inner, Header, MyTownList } from './TownSetup.style';
import Button from '../../common/Button';

const townList = [
  {
    id: '1',
    name: '연남동',
    alias: 'HOME',
  },
  {
    id: '2',
    name: '산본동',
    alias: 'OTHER',
  },
];

function TownItem({ town, selectedId, handleChange, removeTown }) {
  const [isEditAlias, setIsEditAlias] = useState(false);
  const [inputValue, setInputValue] = useState(town.alias);

  return (
    <li>
      <div className="townItem">
        {town.id === selectedId && <MdCheck className="ico-check" />}
        <div className="townItem__title">
          <label htmlFor={town.id}>{`${town.alias}(${town.name})`}</label>
          <input
            type="radio"
            id={town.id}
            name="town"
            checked={selectedId === town.id}
            onChange={() => handleChange(town.id)}
          />
        </div>
        <div className="btn-group">
          <Button
            className="btn--edit"
            onClick={() => setIsEditAlias(!isEditAlias)}
          >
            {!isEditAlias ? '별칭수정' : '취소'}
          </Button>
          <Button className="btn--remove" onClick={() => removeTown(town.id)}>
            삭제
          </Button>
        </div>
      </div>
      {isEditAlias && (
        <>
          <div>
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <Button>수정</Button>
          </div>
        </>
      )}
    </li>
  );
}

function TownSetup({ show, onClose }) {
  const [towns, setTown] = useState(townList);
  const [selectedId, setSelectedId] = useState('1');
  const [isEdit, setIsEdit] = useState(false);

  const removeTown = (id) => {
    const newTowns = towns.filter((town) => town.id !== id);
    setTown(newTowns);
  };

  const handleChange = (id) => {
    setSelectedId(id);
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
          {towns.map((town) => (
            <TownItem
              key={town.id}
              town={town}
              selectedId={selectedId}
              handleChange={handleChange}
              removeTown={removeTown}
            />
          ))}
        </Inner>
      </MyTownList>
    </TownSetupModal>
  );
}

export default TownSetup;
