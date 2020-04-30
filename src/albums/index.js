import React from 'react';
import Album from './album';
import Favorites from './favorites';

const API = 'https://jsonplaceholder.typicode.com/photos';

class AlbumList extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      albums: [],
			albumNum: '',
			show: false
    };
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ albums: data }));
  }

  render() {
    const { albums } = this.state;
 
    return (
			<React.Fragment>
				<div className="favorites-holder">
					<Favorites show={this.state.show} handleClose={this.hideModal} children={this.favoritePics}>
						<h1>Favorites</h1>
					</Favorites>
					<button type="button" onClick={this.showModal}>
						Show Favorites
					</button>
				</div>
				<h1>Albums</h1>
				<div className="button-holder">
					<button value='1' onClick={() => this.setState({ albumNum: 1 })}>Album 1</button>
					<button value='2' onClick={() => this.setState({ albumNum: 2 })}>Album 2</button>
					<button value='3' onClick={() => this.setState({ albumNum: 3 })}>Album 3</button>
					<button value='4' onClick={() => this.setState({ albumNum: 4 })}>Album 4</button>
					<button value='5' onClick={() => this.setState({ albumNum: 5 })}>Album 5</button>
				</div>
				<ul>
					{
						albums.map(album =>
								album.albumId === this.state.albumNum && (
									<li key={album.id}>
										<Album {...album} />
									</li>
								)
						)
					}
				</ul>
			</React.Fragment>
    );
  }

}

export default AlbumList;