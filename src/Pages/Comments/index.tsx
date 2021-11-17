import { Link } from "react-router-dom";
import { useComments } from "../../Providers/Comments";

export const RestComments = () => {
  const { commentsList } = useComments();
  console.log(commentsList);
  return (
    <>
      <p>Comentários do restaurante</p>
      <Link to="/signin">Login</Link>
      <br />
      <Link to="/signup">Cadastro</Link>
      <br />

      <Link to="/homepage">Veja o menu</Link>
<br/>
<br/>
<br/>

      <ul>
        {commentsList.map((item) => (
            <>
          <li>
            <div>
              <p>{item.comment}</p>
              <h4>{item.author}</h4>
            </div>
          </li>
          <br/>
          </>
        ))}
      </ul>
    </>
  );
};
