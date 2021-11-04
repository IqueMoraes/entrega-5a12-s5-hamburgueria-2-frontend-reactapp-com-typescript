import { createContext, useContext, useState, ReactNode } from "react";
import { useHistory } from "react-router-dom";
import { Api } from "../../Services/api";

interface Commentsdata {
  comment: Comments;
  endpoint: string;
}

interface Comments {
  review: string;
  name: string;
  meal?: string;
  date: string;
}

interface CommentsProps {
    children: ReactNode;
}

interface CommentsProviderValues {
  commentsList: Comments[];
  Send: (Commentsdata: Commentsdata) => void;
  Take: (Commentsdata: Commentsdata) => void;
}

const CommentsContext = createContext<CommentsProviderValues>({} as CommentsProviderValues);

export const CommentsProvider = ({ children }: CommentsProps) => {
  const history = useHistory();
  const authToken = () => localStorage.getItem("token") || "";
  const [commentsList, setCommentsList] = useState<Comments[]>([]);

  const Send = (commentsdata: Commentsdata) => {
    Api.post(`/${commentsdata.endpoint}`, commentsdata.comment, {
      headers: { Authorization: `Bearer ${authToken}`}
    })
      .then(() => {
        history.push("/");
        alert("comentário enviado")
      })
      .catch((err) => console.log(err));
  };

  const Take = (commentsdata: Commentsdata) => {
    Api.post(`/${commentsdata.endpoint}`, {
      headers: { Authorization: `Bearer ${authToken}`}
    } )
      .then((res) => {
        setCommentsList(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
      <CommentsContext.Provider value={{commentsList, Send, Take}}>
          {children}
      </CommentsContext.Provider>
  )
};


export const useComments = () => useContext(CommentsContext);