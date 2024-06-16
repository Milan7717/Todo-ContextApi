import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

// defining todo interface
interface todoType {
  id: number;
  work: number | string;
}

//defining context type
interface TodoContextType {
  //current state
  todo: todoType[];
  //chnage state
  setTodo: Dispatch<SetStateAction<todoType[]>>;

  //for theme mode
  theme: boolean;
  setTheme: Dispatch<SetStateAction<boolean>>;
}

export const UserContext = createContext<TodoContextType | undefined>(
  undefined
);

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todo, setTodo] = useState<todoType[]>([]);
  const [theme, setTheme] = useState<boolean>(false);

  return (
    <UserContext.Provider value={{ todo, setTodo, theme, setTheme }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export const useTodos = (): TodoContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useTodos must be used within a TodoProvider");
  }
  return context;
};
