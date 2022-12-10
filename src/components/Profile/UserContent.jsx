import { UserContentBlock } from './UserContent.style';

function UserContent({ title, children }) {
  return (
    <UserContentBlock>
      <h3 className="title">{title}</h3>
      {children}
    </UserContentBlock>
  );
}

export default UserContent;
