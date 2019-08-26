/* Import node modules */
import React from 'react';
import Lightbox from 'react-images';


export class PopupGallery extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			lightboxIsOpen: false,
			currentImage: 0,
			images: props.images
		};
		this.closeLightbox = this.closeLightbox.bind(this);
		this.gotoNext = this.gotoNext.bind(this);
		this.gotoPrevious = this.gotoPrevious.bind(this);
		this.gotoImage = this.gotoImage.bind(this);
		this.handleClickImage = this.handleClickImage.bind(this);
		this.openLightbox = this.openLightbox.bind(this);
  }
    
	openLightbox (index, event) {
		event.preventDefault();
		this.setState({
			currentImage: index,
			lightboxIsOpen: true,
		});
  }
    
	closeLightbox () {
		this.setState({
			currentImage: 0,
			lightboxIsOpen: false,
		});
  }
    
	gotoPrevious () {
		this.setState({
			currentImage: this.state.currentImage - 1,
		});
  }
    
	gotoNext () {
		this.setState({
			currentImage: this.state.currentImage + 1,
		});
	}
    
	gotoImage (index) {
		this.setState({
			currentImage: index,
		});
  }
    
	handleClickImage () {
		if (this.state.currentImage === this.props.images.length - 1) return;
		this.gotoNext();
	}
    
	render () {
		return (
            <Lightbox
                currentImage={this.state.currentImage}
                images={this.state.images}
                isOpen={this.state.lightboxIsOpen}
                onClickImage={this.handleClickImage}
                onClickNext={this.gotoNext}
                onClickPrev={this.gotoPrevious}
                onClickThumbnail={this.gotoImage}
                onClose={this.closeLightbox}
                showThumbnails={true}
            />
		);
	}

	showGallery() {
		this.setState({lightboxIsOpen: true});
	}

	closeGallery() {
		this.setState({lightboxIsOpen: false});
	}

	setImages(images) {
		this.setState({images: images});
	}
}