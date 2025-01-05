import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import moment from "moment";

function LatestItemCard({ item }) {
  const navigate = useNavigate();
  const { thumbnail: photo, title, date, name, _id } = item;
  return (
    <div className="flex gap-2 hover:scale-110 cursor-pointer ">
      <Card className="md:w-[350px] w-full px-2 md:px-0  ">
        <CardMedia sx={{ height: 200 }} image={photo} title="" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <p className="text-[14px] text-base text-center font-bold px-2 py-1   rounded-full">
              Event Occured:
              {moment(date).format("DD MMMM YYYY")}
            </p>
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", height: 50 }}
          >
            <span className=" font-bold">Title: {title}</span>
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", height: 50 }}
          >
            <span className="">Added by: {name}</span>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default LatestItemCard;
