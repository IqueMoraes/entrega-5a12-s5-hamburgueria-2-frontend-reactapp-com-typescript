export const Comments = () => {
  return (
    <div>
      oi
    </div>
  )
}

// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { useComments } from "../../Providers/Comments";

// export const Comments = () => {
//   const meses = [
//     "Jan",
//     "Fev",
//     "Mar",
//     "Abr",
//     "Mai",
//     "Jun",
//     "Jul",
//     "Ago",
//     "Set",
//     "Ago",
//     "Out",
//     "Nov",
//     "Dez",
//   ];
//   const mockComments = [
//     {
//       myreview: "Ótimos hambúrgueres!",
//       author: "Machado de Assis",
//       date: "Thu Oct 28 2021 16:27:01 GMT-0300 (Horário Padrão de Brasília)",
//       id: 7,
//     },
//     {
//       myreview: "As batatas fritas são super crocantes!",
//       author: "Jose",
//       date: "Thu Oct 28 2021 16:27:01 GMT-0300 (Horário Padrão de Brasília)",
//       id: 8,
//     },
//   ];

//   const { commentsList } = useComments();

//   return (
//     <div>
//       <ul>
//         {mockComments.map((item) => (
//           <li>
//             <div>
//               <h6>{item.date.split(" ").slice(1, 3).join(" ")}</h6>
//               <h4>
//                 <span>"</span>
//                 {item.myreview}
//                 <span>"</span>
//               </h4>
//               <h5>-{item.author}</h5>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export const CommentsForm = () => {
//   const AuthorReview = JSON.parse(
//     localStorage.getItem("@Gastrobar:token")
//   ).name;
//   const [selectAuthor, setSelectAuthor] = useState();
//   const { Send, Take, commentsList } = useComments();
//   const { handleSubmit } = useForm();
//   const [ inputReview, setInputReview ] = useState("")

//   return (
//     <>
//       <form onSubmit={handleSubmit(Send)}>
//         <input type="text"  value={inputReview} onChange={(e)=> setInputReview(e.target.value)}/>
//         <select
//           value={selectAuthor}
//           onChange={(e) => setSelectAuthor(e.target.value)}
//         >
//           <option selected value={AuthorReview}>
//             {AuthorReview}
//           </option>
//           <option value="Anônimo">Anônimo</option>
//         </select>
//         <button type="submit" disabled={!inputReview}>Enviar comentário</button>
//       </form>
//     </>
//   );
// };
