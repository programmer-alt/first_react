import { useLocation } from 'react-router-dom';

function Users() {
  let location = useLocation();

  return (
    <>
      <h1>Users</h1>
      <ul>
        <li>
          <a href={`${location.pathname}/ivanov`}>Ivanov</a>
        </li>
        <li>
          <a href={`${location.pathname}/petrov`}>Petrov</a>
        </li>
      </ul>
    </>
  );
}

export default Users;
