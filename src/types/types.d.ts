interface CustomButtonProps {
    onClick: () => void;
    text: string;
}

export interface AppBarProps {
    children: React.ReactNode;
  }

export interface TodoType {
    id: string;
    text: string;
    date: string;
    isDone: boolean;
  }
  
export type TodoAction = 
  {
    type: "ADD";
    payload: {
      text: string;
    }
  } | {
    type: "DELETE" | "UPDATE",
    payload: {
      id:string;
    }
  }