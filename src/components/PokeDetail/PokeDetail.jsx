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

import PokeAPI from "../../utils/PokeApi";

export default class PokeDetail extends React.Component {
  // refatorar o pokedetail
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      imagem: "",
      tipo: "",
      altura: "",
      peso: "",
    };
  }

  componentDidMount() {}

  render() {
    const fetchPokemon = async (nomePokemon) => {
      let pokeApi = new PokeAPI();
      let response = await pokeApi.buscaPokemon(nomePokemon);
      this.setState({
        imagem: response.data.sprites["front_default"],
        nome: response.data.name,
        tipo: response.data.types[0].type.name,
        peso: response.data.weight,
        altura: response.data.height,
      });
    };
    //{nome, url}
    if (this.props.data.url) {
      fetchPokemon(this.props.data.nome);
    } else {
      //{nome, imagem, tipo, altura,peso}
      // this.state.nome = this.props.data.nome;
      // this.state.imagem = this.props.data.imagem;
      // this.state.tipo = this.props.data.tipo;
      // this.state.altura = this.props.data.altura;
      // this.state.peso = this.props.data.peso;
      this.setState(this.props.data);
    }
    // let data = this.props.data;

    // console.log(data);
    return (
      <div className="container">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia component="img" height="140" image={this.state.imagem} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {this.state.nome}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <TableContainer component={Paper}>
                <Table size="small" aria-label="a dense table">
                  <TableBody>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        Tipo
                      </TableCell>
                      <TableCell>{this.state.tipo}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        Peso
                      </TableCell>
                      <TableCell>{Math.round(this.state.peso / 4.3)}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        Altura
                      </TableCell>
                      <TableCell>
                        {Math.round(this.state.altura * 3.9)}
                      </TableCell>
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
