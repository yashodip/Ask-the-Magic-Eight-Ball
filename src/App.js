import { Avatar, Grid, Paper } from "@material-ui/core"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import SportsGolfIcon from "@material-ui/icons/SportsGolf"
import React, { useEffect, useRef, useState } from "react"
const useStyles = makeStyles((theme) => ({
  elementTop: {
    paddingTop: theme.spacing(5),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
  },
  elementBottom: {
    paddingBottom: theme.spacing(5),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
  },
}))
const usePreviousValue = (value) => {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}
function App() {
  const classes = useStyles()
  const [randomIndex, setRandomIndex] = useState("")
  const [userInput, setUserInput] = useState("")
  const prevValue = usePreviousValue(userInput)
  const possibleAnswers = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes, definitely",
    "You may rely on it",
    "As I see it, yes",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Most likely",
    "Outlook not so good",
    "Very doubtful",
  ]
  const handleInputChange = (event) => {
    setUserInput(event.target.value)
  }
  const askClickHandler = () => {
    if (userInput !== "") {
      if (userInput !== prevValue) {
        setRandomIndex(Math.floor(Math.random() * 20))
      }
    } else {
      setRandomIndex(-1)
    }
  }
  const answer = possibleAnswers[randomIndex]

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      direction="column"
      style={{ minHeight: "100vh" }}
      spacing={5}
    >
      <Paper
        className={classes.elementTop}
        elevation={10}
        style={{ margin: "1em" }}
      >
        <Grid
          container
          item
          xs={12}
          justify="center"
          alignItems="center"
          direction="column"
        >
          <Avatar style={{ backgroundColor: "#3f51b5" }}>
            <SportsGolfIcon />
          </Avatar>
          <h2>Ask the Magic Eight Ball!</h2>
          <p>Note : Please ask real and closed-ended (Yes/No) questions</p>
        </Grid>

        <form noValidate autoComplete="off">
          <Grid
            item
            xs={12}
            justify="center"
            alignItems="center"
            direction="column"
          >
            <TextField
              style={{ width: 300, marginBottom: "1em" }}
              value={userInput}
              variant="outlined"
              id="standard-basic"
              label="Ask a qustion"
              justify="center"
              alignItems="center"
              onChange={handleInputChange}
            />
          </Grid>
          <Grid
            item
            xs={12}
            justify="center"
            alignItems="center"
            direction="column"
          >
            <Button
              variant="contained"
              color="primary"
              onClick={askClickHandler}
            >
              Ask
            </Button>
          </Grid>
        </form>

        <Grid
          className={classes.elementBottom}
          item
          xs={12}
          justify="center"
          alignItems="center"
          direction="column"
        >
          <div className={classes.pos}>
            <h3>Answer: {answer}</h3>
          </div>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default App
