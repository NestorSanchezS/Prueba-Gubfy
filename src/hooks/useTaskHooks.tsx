import { useReducer } from 'react';
import {v4 as uuidv4} from "uuid";
import { TaskType, TaskAction } from '../types/types';

const taskReducer = (state: Array<TaskType>, action: TaskAction): Array<TaskType> => {
    switch (action.type){
      case "ADD":
        return [
          ...state,
          {
            id: uuidv4(),
            title:action.payload.title,
            description:action.payload.description,
            completed:false
          },
        ];
      case "DELETE":
        return state.filter(oneTask=> oneTask.id !== action.payload.id);
      case "UPDATE":
        return state.map(oneTask => {
          if ( oneTask.id === action.payload.id) {
            return oneTask.completed ? {...oneTask, completed: false} : {...oneTask, completed: true}
          }
          return oneTask;
        });
        default:
            return state;
    }
  }

  const INITIAL_STATE: Array<TaskType>= [
    {
      id: "1",
      title: "Lo que sea mi paisano",
      description:"Esto es una descripcion",
      completed: false,
    },
    {
      id:" 2",
      title: "Pa las que sea",
      description: "Esto es una descripcion",
      completed: false,
    },
    {
      id: "3",
      title: "Como fué como fué",
      description: "Esto es una descripcion",
      completed: false,
    }
  ]


  export const useTaskHook = () => useReducer(taskReducer, INITIAL_STATE)