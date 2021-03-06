import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import { LightGrayBut } from "../../../components/Button";
import { BlueBut } from "../../../components/Button";

//Import Style
import "../ServiceCenter.scss";

function ReviewForm() {
  const [text, setText] = useState("");
  return (
    <Box sx={{ flexGrow: 1, p: 2, marginTop: 4 }}>
      <Stack direction="row" spacing={2} style={{ margin: 0, display: "flex" }}>
        <Avatar
          className="img-user-profile"
          sx={{ width: 110, height: 110, mr: 3 }}
        ></Avatar>
        <TextField
          className="form-review"
          style={{
            alignSelf: "center",
            backgroundColor: "#F5F5F5",
            borderRadius: 50,
          }}
          multiline
          rows={2}
          fullWidth
          label="Write a review..."
          id="fullWidth"
          inputProps={{ style: { padding: "0px 20px" } }}
          value={text}
          onChange={(e) => setText(e.target.value)}
          InputLabelProps={{
            style: {
              display: "flex",
              alignSelf: "center",
              padding: "0px 20px",
            },
          }}
        />
        {text ? (
          <BlueBut style={{ padding: "10px 20px", alignSelf: "center" }}>
            Send
          </BlueBut>
        ) : (
          <LightGrayBut className='disable-button' style={{ padding: "10px 20px", alignSelf: "center" }}>
            Send
          </LightGrayBut>
        )}
      </Stack>
    </Box>
  );
}

export default ReviewForm;
