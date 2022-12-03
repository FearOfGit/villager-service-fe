import { useState } from 'react';
import { TownSetupModal, Inner, Header, TownList } from './TownSetup.style';
import Button from '../../common/Button';

const townList = [
  {
    id: 1,
    name: '연남동',
    selected: true,
  },
  {
    id: 2,
    name: '산본동',
    selected: false,
  },
];

function TownSetup({ show, onClose }) {
  const [towns, setTown] = useState(townList);

  const updateTown = ({ target }, id) => {
    const newTowns = towns.map((town) =>
      town.id === id ? { ...town, name: target.innerText } : town,
    );
    setTown(newTowns);
  };

  const removeTown = (id) => {
    const newTowns = towns.filter((town) => town.id !== id);
    setTown(newTowns);
  };

  const selectTown = (id) => {
    const newTowns = towns.map((town) =>
      town.id === id
        ? { ...town, selected: true }
        : { ...town, selected: false },
    );
    setTown(newTowns);
  };

  return (
    <TownSetupModal show={show}>
      <Header>
        <Inner className="inner">
          <Button className="btn" onClick={onClose}>
            X
          </Button>
          <div className="title">내 동네 설정하기</div>
        </Inner>
      </Header>
      <TownList>
        <Inner className="inner">
          {towns.map((town) => (
            <li key={town.id}>
              <input
                type="checkbox"
                checked={town.selected}
                onChange={() => selectTown(town.id)}
              />
              <div
                className="title"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => updateTown(e, town.id)}
              >
                {town.name}
              </div>
              <Button className="remove" onClick={() => removeTown(town.id)}>
                X
              </Button>
            </li>
          ))}
          <li>
            <Button className="plus">+</Button>
          </li>
        </Inner>
      </TownList>
    </TownSetupModal>
  );
}

export default TownSetup;
