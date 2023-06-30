import { Button } from "@material-ui/core";
import { stylesCard } from "../utils/Styles";


interface CustomButtonProps {
    onClick: () => void;
    text: string;
}

export const CustomButton = ({onClick, text,}: CustomButtonProps) => {
  const classes = stylesCard();
  return (
    <Button className={classes.bCounter} variant="contained" onClick={onClick} style={{marginLeft:'10px'}}>{text}</Button>
  )
}
