import React from 'react';
export default class PokeDetail extends React.Component {
  render() {
      let data = this.props.data;
    return  <div className="container">

            <img src={data.sprites["front_default"]} />

            <div className="divMesa">
              <div className="divMesaBody">

                <div className="divMesaRow">
                  <div className="divMesaCell">Tipo</div>
                  <div className="divMesaCell">{data.types[0].type.name}</div>
                </div>

                <div className="divMesaRow">
                  <div className="divMesaCell">Altura</div>
                  <div className="divMesaCell">
                    {" "}
                    {Math.round(data.height * 3.9)}"
                  </div>
                </div>

                <div className="divMesaRow">
                  <div className="divMesaCell">Peso</div>
                  <div className="divMesaCell">
                    {" "}
                    {Math.round(data.weight / 4.3)} lbs
                  </div>
                </div>

                <div className="divMesaRow">
                  <div className="divMesaCell">N/ de batalhas</div>
                  <div className="divMesaCell">{data.game_indices.length}</div>
                </div>

              </div>
            </div>
          </div>
  }
}