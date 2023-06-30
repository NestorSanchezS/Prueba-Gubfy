import { Button } from "@material-ui/core";
import { ColorGreen } from '../../utils/constans';


interface CustomButtonProps {
    onClick: () => void;
    disabled?:boolean;
    text: string;
}

export const CustomButton = ({onClick, text, disabled}: CustomButtonProps) => {
  return (
    <Button onClick={onClick} style={{ color: ColorGreen }} disabled={disabled}>{text}</Button>
  )
}
