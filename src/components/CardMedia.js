import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function CardMediaYoutube({ videoId, typo, src }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="video" src={videoId} allow="autoPlay" />
        <img src={src} alt="icon" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {typo}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
