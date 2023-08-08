import Navbar from "./navbar/page";
import HomePage from "./homepage/page"
import { Box } from "@mui/material";



export default function Home() {
  return (
    <>
    <Navbar/>
     <Box style={{marginTop:"65px"}}>
      <HomePage/>
     </Box>
     <h1>Home</h1>
     
    </>
  )
}
