import React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default class PokeDetail extends React.Component {
  render() {
    let data = this.props.data;
    return (
      <div className="container">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={data.sprites["front_default"]}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <TableContainer component={Paper}>
                <Table size="small" aria-label="a dense table">
                  <TableBody>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        Tipo
                      </TableCell>
                      <TableCell>{data.types[0].type.name}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        Peso
                      </TableCell>
                      <TableCell>{Math.round(data.weight / 4.3)}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        Altura
                      </TableCell>
                      <TableCell>{Math.round(data.height * 3.9)}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}
