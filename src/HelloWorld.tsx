import { Button } from "@mui/material";
import { useNavigate } from "react-router";

export const HelloWorld = ({route}:{route:string}) => {
  let navigate = useNavigate();

  const print = () => {
    navigate(`/${route}`)
    console.log("good job!");
  };
  return (
    <Button variant="contained" onClick={print}>
      Hello World
    </Button>
  );
};
