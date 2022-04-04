import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function CardMediaYoutube({ videoId, typo, src }) {
  return (
    <Card sx={{ maxWidth: 345, height: 100 }}>
      <CardActionArea>
        <CardMedia component="video" src={videoId} allow="autoPlay" />
        <div className="absolute top-0">
          <img src={src} alt="icon" />
          <p>{typo}</p>
        </div>
        <CardContent></CardContent>
      </CardActionArea>
    </Card>
  );
}
