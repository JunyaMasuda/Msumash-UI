import {
  Stack,
  Box,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useState } from "react";

type Player = {
  name: string;
};

const MatchMaker = () => {
  const [playerList, setPlayerList] = useState<Player[]>([]);
  const [playerNameText, setPlayerNameText] = useState<string>("");
  const addPlayer = () => {
    const p: Player = { name: playerNameText };
    if (p.name){
      setPlayerList([...playerList, p]);
      setPlayerNameText("");
    }
  };

  return (
    <>
      <Box
        sx={{
          mx: "auto",
          width: "70%",
          p: 1,
        }}
      >
        <h2>選手を追加</h2>
        <Stack direction="row" justifyContent="space-between">
          <Stack direction="row" spacing={1}>
            <TextField
              id="standard-basic"
              label="player name"
              variant="standard"
              value={playerNameText}
              onChange={(event) => setPlayerNameText(event.target.value)}
            />
            <Button variant="outlined" onClick={addPlayer}>
              ADD
            </Button>
          </Stack>
          <Button variant="contained">Create Match</Button>
        </Stack>
      </Box>

      <Box
        m="auto"
        sx={{
          width: "70%",
          backgroundColor: "gray",
        }}
      >
        <List>
          {playerList.map((player) => (
            <ListItem>
              <ListItemText primary={player.name} />
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
};

export default MatchMaker;
