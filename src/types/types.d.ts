interface CustomButtonProps {
    onClick: () => void;
    text: string;
}

export interface AppBarProps {
    children: React.ReactNode;
  }

export interface TaskType {
    id: string;
    title: string;
    description: string;
    completed: boolean;
  }
  
export type TaskAction = 
  {
    type: "ADD";
    payload: {
      title: string;
      description: string;
    }
  } | {
    type: "DELETE" | "UPDATE",
    payload: {
      id:string;
    }
  }