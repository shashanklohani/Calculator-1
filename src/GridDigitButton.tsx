import { Button, Grid, GridSize } from "@material-ui/core";

interface GridDigitButtonProps {
    digit : string;
    enterDigit? : (digit : string)=> void;
    xs?: GridSize;
}

export const GridDigitButton : React.FC<GridDigitButtonProps> = ({
    digit,
    // enterDigit,
    xs = 3
}) =>{
    return (
        <Grid item xs={xs}>
            <Button fullWidth variant="outlined" >
                {digit}
            </Button>
        </Grid>
    )
}
