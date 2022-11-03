import React from "react";
import StarIcon from "@mui/icons-material/Star";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination } from "swiper";

const data = [
  {
    id: 1,
    username: "Alexandra Graff",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, aspernatur suscipit aut perferendis eveniet, deserunt assumenda officiis impedit architecto iusto, explicabo doloribus maxime quos quis inventore quibusdam culpa earum magnam!",
  },
  {
    id: 2,
    username: "Alexandra Graff",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, aspernatur suscipit aut perferendis eveniet, deserunt assumenda officiis impedit architecto iusto, explicabo doloribus maxime quos quis inventore quibusdam culpa earum magnam!",
  },
  {
    id: 3,
    username: "Alexandra Graff",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, aspernatur suscipit aut perferendis eveniet, deserunt assumenda officiis impedit architecto iusto, explicabo doloribus maxime quos quis inventore quibusdam culpa earum magnam!",
  },
  {
    id: 4,
    username: "Alexandra Graff",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, aspernatur suscipit aut perferendis eveniet, deserunt assumenda officiis impedit architecto iusto, explicabo doloribus maxime quos quis inventore quibusdam culpa earum magnam!",
  },
  {
    id: 5,
    username: "Alexandra Graff",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, aspernatur suscipit aut perferendis eveniet, deserunt assumenda officiis impedit architecto iusto, explicabo doloribus maxime quos quis inventore quibusdam culpa earum magnam!",
  },
  {
    id: 6,
    username: "Alexandra Graff",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, aspernatur suscipit aut perferendis eveniet, deserunt assumenda officiis impedit architecto iusto, explicabo doloribus maxime quos quis inventore quibusdam culpa earum magnam!",
  },
  {
    id: 7,
    username: "Alexandra Graff",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, aspernatur suscipit aut perferendis eveniet, deserunt assumenda officiis impedit architecto iusto, explicabo doloribus maxime quos quis inventore quibusdam culpa earum magnam!",
  },
  {
    id: 8,
    username: "Alexandra Graff",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, aspernatur suscipit aut perferendis eveniet, deserunt assumenda officiis impedit architecto iusto, explicabo doloribus maxime quos quis inventore quibusdam culpa earum magnam!",
  },
  {
    id: 9,
    username: "Alexandra Graff",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, aspernatur suscipit aut perferendis eveniet, deserunt assumenda officiis impedit architecto iusto, explicabo doloribus maxime quos quis inventore quibusdam culpa earum magnam!",
  },
];

function Comentarios() {
  return (
    <Box sx={{ backgroundColor: "#0f3057", color: "white", paddingTop: "25%" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: 1,
        }}
      >
        <StarIcon
          fontSize="large"
          sx={{ color: "black", backgroundColor: "#D2E603" }}
        />
        <StarIcon
          fontSize="large"
          sx={{ color: "black", backgroundColor: "#D2E603" }}
        />
        <StarIcon
          fontSize="large"
          sx={{ color: "black", backgroundColor: "#D2E603" }}
        />
        <StarIcon
          fontSize="large"
          sx={{ color: "black", backgroundColor: "#D2E603" }}
        />
        <StarIcon
          fontSize="large"
          sx={{ color: "black", backgroundColor: "#D2E603" }}
        />
      </Box>
      <Box component="div" sx={{ mt: 5 }}>
        <Typography variant="h5">Tus Palabras No nuestras</Typography>
        <Typography sx={{ fontFamily: "Poppins", fontWeight: 30 }}>
          After 15 years running The Yacht Week, people have a lot to say about
          us
        </Typography>
      </Box>
      <Box sx={{ marginX: 5, paddingY: "5%", position: "relative" }}>
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {data.map((user) => (
            <SwiperSlide key={user.id}>
              <Box
                sx={{
                  backgroundColor: "#505B87",
                  height: "270px",
                  borderRadius: "2%",
                }}
              >
                <Box sx={{paddingTop:2}}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: {
                        xs: "column",
                        md: "row",
                        justifyContent: "left",
                        gap: 3,
                        width: "80%",
                        marginLeft: "auto",
                        marginRight: "auto",
                      },
                    }}
                  >
                    <img src="/woman.png" />
                    <Typography sx={{ marginTop: 2 }}>
                      {user.username}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      textAlign: "left",
                      width: "80%",
                      marginLeft: "auto",
                      marginRight: "auto",
                      marginTop: 3,
                    }}
                  >
                    <Typography sx={{fontSize:{xs:".5rem", md:"1rem"}}}>{user.comment}</Typography>
                  </Box>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}

export default Comentarios;
