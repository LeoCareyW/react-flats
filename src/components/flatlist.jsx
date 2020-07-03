import React from 'react';
import Gif from './gif';
import flats from '.../data/flat'

class FlatList extends Component {
  constructor (props){
    super(props);

  }

  render() {
  return (
    <div className="gif-list">
     {flats.map(flat => <flat id={flat.id} key={flat.id}/>)}
    </div>
   )
  }
}

export default FlatList;
