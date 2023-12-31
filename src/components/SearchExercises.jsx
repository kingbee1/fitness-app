import React, { useEffect } from "react";


import { Box, Button, Stack, TextField, Typography } from "@mui/material";
//import HorizontalScrollbar from "./HorizontalScrollbar";
import { useState } from "react";
import { exerciseOptions, fetchData } from "../utils/FetchData";

const SearchExercises = () => {
  const [search, setSearch] = useState("");
  const [exercise, setExercise] = useState([]);
  const [bodyParts, setBodyParts] = useState([]);

  //a useeffect to fetch the categories as soon as the page loads.
  useEffect(()=> {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)
      //once we get the data, we set BodyParts to be all and then spread all the body oarts we got.
      setBodyParts(['all', ...bodyPartsData])
    }
  }, [])

  //async because we have fetch data from api. meaning it will take time.
  const handleSearch = async () => {
    //check if search exists. 
    if(search) {
      //if the searhc exists, fetch exercise data.
      const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/', exerciseOptions)
      //creating fetch data in utils folder only to keep this place tidy.
      //console.log(exerciseData)

      const searchedExercise = exerciseData.filter((exercise) => exercise.name.toLowerCase().includes(search) 
      || exercise.bodyPart.toLowerCase().includes(search)
      || exercise.equipment.toLowerCase().includes(search)
      || exercise.target.toLowerCase().includes(search) 
      );
      //first thing is to clear the search.
      setSearch("")
      //then set exercises to the searchd exercises.
      setExercise(searchedExercise)
    }
  }

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "41px", xs: "30px" },
        }}
        mb="50px"
        textAlign="center"
      >
        Exercises that are <br />
        good for you.
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          value={search}
          height="76px"
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "1170px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "173px", xs: "80px" },
            height: "56px",
            position: "absolute",
            right: "0px",
            fontSize: { lg: "20px", xs: "14px" },
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        {/* <HorizontalScrollbar /> */}
      </Box>
    </Stack>
  );
};

export default SearchExercises;
