import { Button,CircularProgress } from "@material-ui/core";

export default function ProgressButton(props) {
    const {isWorking,...rest} = props;
  return (
    <Button disabled={isWorking} {...rest}>
      {isWorking && <CircularProgress size={24}/>}
      {!isWorking  && props.children}
    </Button>
  );
}
