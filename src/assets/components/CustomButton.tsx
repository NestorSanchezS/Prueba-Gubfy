interface CustomButtonProps {
    onClick: () => void;
    text: string;
}

export const CustomButton = ({onClick, text}: CustomButtonProps) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}
