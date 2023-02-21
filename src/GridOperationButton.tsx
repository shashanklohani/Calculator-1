import { Button, Grid, GridSize, styled } from "@material-ui/core";

interface GridDigitButtonProps {
    operation : string;
    selectOperation? : (operation : string)=> void;
    selectedOperation?: string;
}

const StyledButton = styled(Button)(({theme})=>({
    backgroundColor:'rgb(254, 241, 73, .1)',
}))

export const GridOperationButton : React.FC<GridDigitButtonProps> = ({
    operation,
    selectOperation,
    selectedOperation
}) =>{
    return (
        <Grid item  >
            <StyledButton fullWidth variant="outlined">
                {operation}
            </StyledButton>
        </Grid>
    )
}