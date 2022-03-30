import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import moment from "moment";
import { useGetPostQuery } from "../api/apiServices";

function App() {
  const { data, refetch } = useGetPostQuery("");
  const serverTime = data?.serverTime;
  let date = null;
  if (serverTime) {
    date = moment(serverTime).format("MMM DD, YYYY h:mm:ss");
    console.log(date);
  }

  setInterval(() => {
    refetch();
  }, 30);
  return (
    <Box sx={{ backgroundColor: "black" }}>
      <Box sx={{p:2}} display='flex' justifyContent='space-between'>
        <Typography align="center" variant="h3" color="violet">
          Live Crypto Prices
        </Typography>
        <Typography align="center" variant="h5" color="blue">
          {date}
        </Typography>
      </Box>
      <Divider />
      <Box
        display="flex"
        flexDirection="row"
        sx={{ backgroundColor: "wheat" }}
        justifyContent="space-evenly"
      >
        <Typography align="center" variant="h5" color="blue">
          Bitcoin
        </Typography>
      </Box>
    </Box>
  );
}

export default App;
