import { useSelector } from 'react-redux';

function Username() {
  const { username } = useSelector((state) => state.root.user);

  if (!username)
    return (
      <div className="hidden text-sm font-semibold md:block">
        Hello user !!!
      </div>
    );

  return (
    <div className="hidden text-sm font-semibold md:block">{username}</div>
  );
}

export default Username;
