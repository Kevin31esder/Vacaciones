import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";



function InformacionGeneral() {
  return (
    <Box sx={{ backgroundColor: "#0f3057", color: "white", paddingTop: "6%", zIndex:1,position:"relative" }}>
      <Box
        sx={{
          width: { xs: "auto", md: "30%" },
          textAlign: "left",
          marginLeft: { xs: 2, md: 6 },
        }}
      >
        <Typography variant="h2" sx={{fontFamily:"Poppins", fontWeight:800}}>Lorem impsum</Typography>
        <Typography sx={{width:"60%"}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nostrum
          consequatur praesentium fugiat voluptatum nobis asperiores a molestiae
          quia, inventore illo. Mollitia, qui. Exercitationem, delectus magnam
          necessitatibus sapiente debitis animi.
        </Typography>
      </Box>
      <Box
        sx={{
          width: { xs: "auto", md: "40%" },
          textAlign: "left",
          position: "relative",
          marginLeft: { xs: 2, md: "auto" },
          marginRight: { xs: 2, md: "10%" },
          marginTop: { xs: 3, md: 0 },
          marginBottom:{xs:0, md:"15%"},
          paddingBottom: "40px",
        }}
      >
        <Typography variant="h2" sx={{fontFamily:"Poppins", fontWeight:800}}>Lorem impsum</Typography>
        <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nostrum
            consequatur praesentium fugiat voluptatum nobis asperiores a
            molestiae quia, inventore illo. Mollitia, qui. Exercitationem,
            delectus magnam necessitatibus sapiente debitis animi.
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea itaque
            enim veniam ex mollitia eligendi quibusdam, possimus omnis dolore
            sequi fugit iure. Dolores a ratione, enim dolorum nobis ex? Quas.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "#00587A",
          marginX:4,
          paddingX: 5,
          height: {xs:"auto", md:"60vh"},
          display: "flex",
          paddingTop:5,
          flexDirection:{xs:"column", md:"row"}
        }}
      >
        <Box sx={{ marginLeft: 5, paddingTop: 4, width: "30%", zIndex:1 }}>
          <Typography
            sx={{ fontSize:{xs:"5vh", md:"12vh"}, lineHeight: {xs:"55px", md:"80px"}, textAlign: "left", fontFamily:"Poppins", fontWeight:800, }}
          >
            Your vacation is here
          </Typography>
        </Box>
        <Box
          component="img"
          alt="Ballenar."
          src="/ballena.png"
          sx={{ height: {xs:"50vh", md:"100%"}, position: "relative", left: {xs:0, md:-100}, width:"auto", zIndex:0 }}
        />
         <Box>
        <Box>
        <Typography sx={{textAlign:{xs:"center", md:"right"}, fontSize:{xs:"4vh", md:"10vh"}, color:"#D2E603", lineHeight:"70.56px", }}>Ready to sail</Typography>
        <Box component="img" src="/Olas.jpg" sx={{mt:3, position:"relative", left:{xs:"auto", md:100}}}></Box>
        </Box>
       
      </Box>
      </Box>
    </Box>
  );
}

export default InformacionGeneral;
