import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import moment from "moment/moment";

function ItemCard({ item }) {
  const { thumbnail: photo, title, description, _id, date } = item;
  const navigate = useNavigate();
  return (
    <div className="flex gap-2 ">
      <Card className="w-[350px] ">
        <CardMedia sx={{ height: 200 }} image={photo} title="" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            <span className="text-sm">
              Event-Occured: {moment(date).format("DD MMMM YYYY")}
            </span>
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", height: 50 }}
          >
            <span className="">{description.substring(0, 100)}...</span>
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => {
              navigate(`/items/${_id}`);
            }}
            size="small"
          >
            Details
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default ItemCard;
