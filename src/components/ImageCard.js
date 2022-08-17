import React from "react";

//img objectがimageというpropとしてimageCardに渡される
class ImageCard extends React.Component {
  //React refを作る
  //インスタンス変数に代入することで後でクラス内部で参照できるようにする
  constructor(props) {
    super(props);

    //stateの初期化
    this.state = { spans: 0 };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    //必要なspan(150px分の高さ)を計算する
    //Math, +1は画像に必要な業の一部がある場合切り上げる
    const spans = Math.ceil(height / 10);

    this.setState({ spans });
    // this.setState({span:spans})だけど省略しても書ける
  };

  render() {
    const { description, urls } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
