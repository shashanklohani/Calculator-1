import "./App.css";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { Button, Container, Paper, styled } from "@material-ui/core";
import { useState } from "react";

const OutputContainer = styled("div")(({ theme }) => ({}));

const CalculatorBase = styled(Paper)(({ theme }) => ({}));

function App() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [operationCurrent, setCurrentOperation] = useState("");
  const [firstNumberString, setFirstNumberString] = useState("");
  const [secondNumberString, setSecondNumberString] = useState("");
  const [history, setHistory] = useState<string[][]>([]);
  const clearHistory = ()=>{
    setHistory([])
  }

  const applyOperation = (operation: string) => {
    if (secondNumberString !== "") {
      setHistory((oldArray) => [
        ...oldArray,
        [firstNumberString, operationCurrent, secondNumberString],
      ]);
      switch (operationCurrent) {
        case "*":
          setFirstNumberString(
            `${(
              parseFloat(firstNumberString) * parseFloat(secondNumberString)
            ).toLocaleString()}`
          );
          setSecondNumberString("");
          break;
        case "/":
          setFirstNumberString(
            `${(
              parseFloat(firstNumberString) / parseFloat(secondNumberString)
            ).toLocaleString()}`
          );
          setSecondNumberString("");
          break;
        case "+":
          setFirstNumberString(
            `${(
              parseFloat(firstNumberString) + parseFloat(secondNumberString)
            ).toLocaleString()}`
          );
          setSecondNumberString("");
          break;
        case "-":
          setFirstNumberString(
            `${(
              parseFloat(firstNumberString) - parseFloat(secondNumberString)
            ).toLocaleString()}`
          );
          setSecondNumberString("");
          break;
      }
      setCurrentOperation("");
    }
    setCurrentOperation(operation);
  };

  // const generateNumber = (input: string) => {
  //   let number = "";
  //   if (operationCurrent === "") {
  //     if (firstNumber === 0) {
  //       if (input === ".") {
  //         number = `0${input}`;
  //       } else {
  //         number = `${input}`;
  //       }
  //     } else {
  //       number = `${firstNumber}${input}`;
  //     }
  //     setFirstNumber(parseFloat(number));
  //   } else {
  //     if (secondNumber === 0) {
  //       if (input === ".") {
  //         number = `0${input}`;
  //       } else {
  //         number = `${input}`;
  //       }
  //     } else {
  //       number = `${firstNumber}${input}`;
  //     }
  //     setSecondNumber(parseFloat(number));
  //   }
  // };

  const generateNumberString = (input: string) => {
    let number = "";
    if (operationCurrent === "") {
      if (firstNumberString === "") {
        if (input === ".") {
          number = `0${input}`;
        } else {
          number = `${input}`;
        }
      } else {
        number = `${firstNumberString}${input}`;
      }
      setFirstNumberString(number);
    } else {
      if (secondNumberString === "") {
        if (input === ".") {
          number = `0${input}`;
        } else {
          number = `${input}`;
        }
      } else {
        number = `${secondNumberString}${input}`;
      }
      setSecondNumberString(number);
    }
  };

  return (
    <Container maxWidth="sm" style={{ display: "flex", width:'800px', border:'2px solid black', padding:'16px'}}>
      <CalculatorBase
        style={{
          padding: "16px",
          width:'75%',
          border:'2px solid black',
          borderRadius:'0'
        }}
      >
        <Grid container spacing={1}>
          <Grid
            item
            xs={12}
            style={{
              border: "2px solid black",
              marginBottom: "4px",
            }}
          >
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Button
                variant="outlined"
                style={{ height: "20%", border: "2px solid black", borderRadius:'0', fontSize:'.6em' }}
                onClick={()=>clearHistory()}
              >
                Clr History
              </Button>
              <Box>
                <OutputContainer
                  style={{
                    height: "40px",
                    textAlign: "right",
                    padding: "16px",
                    fontSize: "2em",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                  }}
                >
                  0
                </OutputContainer>
                <OutputContainer
                  style={{
                    height: "40px",
                    textAlign: "right",
                    padding: "16px",
                    fontSize: "2em",
                    overflow: "hidden",
                  }}
                >
                  {`${firstNumberString} ${
                    operationCurrent !== "" && operationCurrent !== "="
                      ? operationCurrent
                      : ""
                  } ${secondNumberString !== "" ? secondNumberString : ""}`}
                </OutputContainer>
              </Box>
            </Box>
          </Grid>
          <Grid
            container
            spacing={1}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gridTemplateRows: "repeat(5, 1fr)",
            }}
          >
            <Button
              variant="outlined"
              style={{
                margin: "5px",
                border:'2px solid black',
                color: "black",
                gridColumn: "span 2",
                borderRadius:'0'
              }}
              onClick={() => {
                setFirstNumberString("");
                setSecondNumberString("");
                setCurrentOperation("");
              }}
            >
              Clear
            </Button>
            <Button
              variant="outlined"
              style={{
                margin: "5px",
                border:'2px solid black',
                color: "black",
                borderRadius:'0'
              }}
              onClick={() => applyOperation("/")}
            >
              /
            </Button>
            <Button
              variant="outlined"
              style={{
                margin: "5px",
                border:'2px solid black',
                color: "black",
                borderRadius:'0'
              }}
              onClick={() => applyOperation("*")}
            >
              *
            </Button>
            <Button
              variant="outlined"
              style={{
                margin: "5px",
                border:'2px solid black',
                color: "black",
                borderRadius:'0'
              }}
              onClick={() => generateNumberString("7")}
            >
              7
            </Button>
            <Button
              variant="outlined"
              style={{
                margin: "5px",
                border:'2px solid black',
                color: "black",
                borderRadius:'0'
              }}
              onClick={() => generateNumberString("8")}
            >
              8
            </Button>
            <Button
              variant="outlined"
              style={{
                margin: "5px",
                border:'2px solid black',
                color: "black",
                borderRadius:'0'
              }}
              onClick={() => generateNumberString("9")}
            >
              9
            </Button>
            <Button
              variant="outlined"
              style={{
                margin: "5px",
                border:'2px solid black',
                color: "black",
                borderRadius:'0'
              }}
              onClick={() => applyOperation("-")}
            >
              -
            </Button>
            <Button
              variant="outlined"
              style={{
                margin: "5px",
                border:'2px solid black',
                color: "black",
                borderRadius:'0'
              }}
              onClick={() => generateNumberString("4")}
            >
              4
            </Button>
            <Button
              variant="outlined"
              style={{
                margin: "5px",
                border:'2px solid black',
                color: "black",
                borderRadius:'0'
              }}
              onClick={() => generateNumberString("5")}
            >
              5
            </Button>
            <Button
              variant="outlined"
              style={{
                margin: "5px",
                border:'2px solid black',
                color: "black",
                borderRadius:'0'
              }}
              onClick={() => generateNumberString("6")}
            >
              6
            </Button>
            <Button
              variant="outlined"
              style={{
                margin: "5px",
                border:'2px solid black',
                color: "black",
                borderRadius:'0'
              }}
              onClick={() => applyOperation("+")}
            >
              +
            </Button>
            <Button
              variant="outlined"
              style={{
                margin: "5px",
                border:'2px solid black',
                color: "black",
                borderRadius:'0'
              }}
              onClick={() => generateNumberString("1")}
            >
              1
            </Button>
            <Button
              variant="outlined"
              style={{
                margin: "5px",
                border:'2px solid black',
                color: "black",
                borderRadius:'0'
              }}
              onClick={() => generateNumberString("2")}
            >
              2
            </Button>
            <Button
              variant="outlined"
              style={{
                margin: "5px",
                border:'2px solid black',
                color: "black",
                borderRadius:'0'
              }}
              onClick={() => generateNumberString("3")}
            >
              3
            </Button>
            <Button
              variant="outlined"
              style={{
                margin: "5px",
                border:'2px solid black',
                color: "black",
                gridRow: "span 2",
                borderRadius:'0'
              }}
              onClick={() => applyOperation("=")}
            >
              =
            </Button>
            <Button
              variant="outlined"
              style={{
                margin: "5px",
                border:'2px solid black',
                color: "black",
                gridColumn: "span 2",
                borderRadius:'0'
              }}
              onClick={() => generateNumberString("0")}
            >
              0
            </Button>
            <Button
              variant="outlined"
              style={{
                margin: "5px",
                border:'2px solid black',
                color: "black",
                borderRadius:'0'
              }}
              onClick={() => generateNumberString(".")}
            >
              .
            </Button>
          </Grid>
        </Grid>
      </CalculatorBase>
      <Box
        style={{
          padding: "16px",
          width:'25%',
          borderRight:'2px solid black',
          borderTop:'2px solid black',
          borderBottom:'2px solid black',
          borderRadius:'0'
        }}
      >
        <Paper style={{
          height:'100%',
          border:'2px solid black',
          borderRadius:'0',
          width:'100%',
        }}>{
          history.map((e)=>{
            return <Box style={{width:'100%', display:'flex', justifyContent:'center', margin:'2px'}}>{`${e[0]} ${e[1]} ${e[2]}`}</Box>
          })
        }
        </Paper>
      </Box>
    </Container>
  );
}

export default App;
