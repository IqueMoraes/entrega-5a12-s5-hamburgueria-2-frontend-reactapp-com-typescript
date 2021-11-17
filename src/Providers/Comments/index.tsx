import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { useHistory } from "react-router-dom";
import { Api } from "../../Services/api";

interface Commentsdata {
  comment: Comments;
  endpoint: string;
}

interface Comments {
  rating: number;
  comment: string;
  author: string;
  userId: number;
}

interface CommentsProps {
  children: ReactNode;
}

interface CommentsProviderValues {
  commentsList: Comments[];
  sendComments: (Commentsdata: Commentsdata) => void;
  getComments: () => void;
}

const CommentsContext = createContext<CommentsProviderValues>(
  {} as CommentsProviderValues
);

export const CommentsProvider = ({ children }: CommentsProps) => {
  const history = useHistory();
  const authToken = () => localStorage.getItem("token") || "";
  const [commentsList, setCommentsList] = useState<Comments[]>([]);

  const sendComments = (commentsdata: Commentsdata) => {
    Api.post(`/${commentsdata.endpoint}`, commentsdata.comment, {
      headers: { Authorization: `Bearer ${authToken}` },
    })
      .then(() => {
        history.push("/");
        alert("comentário enviado");
      })
      .catch((err) => console.log(err));
  };

  const getComments = () => {
    Api.get("/restComments")
      .then((res) => {
        setCommentsList(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <CommentsContext.Provider
      value={{ commentsList, sendComments, getComments }}
    >
      {children}
    </CommentsContext.Provider>
  );
};

export const useComments = () => useContext(CommentsContext);
