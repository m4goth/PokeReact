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
// import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default class PokeDetail extends React.Component {
  // refatorar o pokedetail

  componentDidMount() {
    // testo pra ver se ta vindo props.data.url
    // se tiver url, -> pokeApi.buscaPokemon(props.name)
    //joga dentro do state
  }


  render() {
    let data = this.props.data;
    
    console.log(data);
    return (
      <div className="container">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia component="img" height="140" image={data.imagem} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.nome}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <TableContainer component={Paper}>
                <Table size="small" aria-label="a dense table">
                  <TableBody>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        Tipo
                      </TableCell>
                      <TableCell>{data.tipo}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        Peso
                      </TableCell>
                      <TableCell>{Math.round(data.peso / 4.3)}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        Altura
                      </TableCell>
                      <TableCell>{Math.round(data.altura * 3.9)}</TableCell>
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
