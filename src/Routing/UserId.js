import { useParams } from 'react-router-dom';

function UserId() {
  let { userName } = useParams();

  return (
    <div>
      <a href="/Routing/Users">Назад</a>
      <h1> Users: {userName} </h1>
    </div>
  );
}

export default UserId;
