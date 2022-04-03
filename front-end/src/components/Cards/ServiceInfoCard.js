import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

//Import Icon
import LanguageIcon from "@mui/icons-material/Language";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

export default function ServiceInfoCard({ data }) {
  const contentStyle = {
    margin: "0px",
    lineBreak: "auto",
    fontSize: 18,
    marginTop: 20,
    color: "#797979",
    display: "flex",
  };
  const infoText = {
    color: "black",
  };

  return (
    <Card sx={{ display: "flex", padding: "20px", boxShadow: "none" }}>
      <Grid container style={{ flex: 1 }}>
        <Grid item xs={4} style={{ alignSelf: "center" }}>
          <CardMedia
            component="img"
            style={{ width: "100%", height: "20vw", objectFit: "cover" }}
            image={
              data.imageUrl
                ? data.imageUrl
                : "https://cr.lnwfile.com/2p7f81.jpg"
            }
          />
        </Grid>
        <Grid item xs={8} sx={{ paddingLeft: 5 }}>
          <CardContent sx={{ textAlign: "left", padding: "0px" }}>
            <Typography
              className="name"
              component="div"
              variant="h5"
              sx={{ fontWeight: "bold", fontSize: 36, marginBottom: 3 }}
            >
              {data.name}
            </Typography>
            <div className="address" style={contentStyle}>
              <span style={infoText}>
                {data.type === "ONLINE"
                  ? "Online"
                  : data.type === "BOTH"
                  ? ` ${data.address} ${data.province} and Online`
                  : `${data.address} ${data.province}`}
              </span>
            </div>
            <div className="office_hours" style={contentStyle}>
              <span style={infoText}>เวลาทำการ: {data.office_hours || "-"}</span>
            </div>
            {data.website ? (
              <div className="website" style={contentStyle}>
                <LanguageIcon sx={{ mr: 1 }} />
                <a
                  href={data.website}
                  target="_blank"
                  rel="noreferrer"
                  sx={{ fontWeight: "bold" }}
                >
                  {data.website.slice(0, 50)}
                </a>
              </div>
            ) : (
              false
            )}
            {data.facebook ? (
              <div className="facebook" style={contentStyle}>
                <FacebookIcon sx={{ mr: 1 }} />
                <a
                  href={data.facebook}
                  target="_blank"
                  rel="noreferrer"
                  sx={{ fontWeight: "bold" }}
                >
                  {data.facebook.split("?")[0]}
                </a>
              </div>
            ) : (
              false
            )}
            {data.email ? (
              data.email.length > 5 ? (
                <div className="email" style={contentStyle}>
                  <LocalPostOfficeIcon sx={{ mr: 1 }}/>
                  <span style={infoText}>{data.email}</span>
                </div>
              ) : null
            ) : null}
            {data.cost !== '฿฿' ? (
              <div className="cost" style={contentStyle}>
                <AttachMoneyIcon sx={{ mr: 1 }}/>
                <span style={infoText}>{data.cost}</span>
              </div>
            ) : (
              false
            )}
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
}