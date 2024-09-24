import { useState } from "react";
import { Button, Paper, Typography } from "@mui/material";

const Calculator = () => {
    const [input, setInput] = useState("");
    const [result, setResult] = useState(0);

    const handleClick = (value) => {
        setInput(input + value);
    };

    const clearInput = () => {
        setInput("");
        setResult(0);
    };

    const calculateResult = () => {
        try {
            setResult(eval(input)); // eval() is unsafe for production apps; use a safe parser.
        } catch {
            setResult("Error");
        }
    };

    return (
        <Paper elevation={3}>
            <div>
                <Typography variant="h5" align="right">
                    {input || "0"}
                </Typography>
                <Typography variant="h4" align="right">
                    {result}
                </Typography>
            </div>
            <div>
                <Button variant="contained" onClick={() => handleClick("1")}>
                    1
                </Button>
                <Button variant="contained" onClick={() => handleClick("2")}>
                    2
                </Button>
                <Button variant="contained" onClick={() => handleClick("3")}>
                    3
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleClick("+")}
                >
                    +
                </Button>

                <Button variant="contained" onClick={() => handleClick("4")}>
                    4
                </Button>
                <Button variant="contained" onClick={() => handleClick("5")}>
                    5
                </Button>
                <Button variant="contained" onClick={() => handleClick("6")}>
                    6
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleClick("-")}
                >
                    -
                </Button>

                <Button variant="contained" onClick={() => handleClick("7")}>
                    7
                </Button>
                <Button variant="contained" onClick={() => handleClick("8")}>
                    8
                </Button>
                <Button variant="contained" onClick={() => handleClick("9")}>
                    9
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleClick("*")}
                >
                    *
                </Button>

                <Button variant="contained" onClick={() => handleClick("0")}>
                    0
                </Button>
                <Button variant="contained" onClick={() => handleClick(".")}>
                    .
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleClick("/")}
                >
                    /
                </Button>
                <Button variant="contained" color="error" onClick={clearInput}>
                    C
                </Button>
            </div>

            <Button
                variant="contained"
                color="primary"
                fullWidth
                style={{ marginTop: "10px" }}
                onClick={calculateResult}
            >
                =
            </Button>
        </Paper>
    );
};

export default Calculator;
