
var ThumbnailList = React.createClass({
  render: function (){
   // use map to turnn objects into components 
   // the first parameter thumbnailprops is the object iself 
   // do {...thumbnailProps} to pass in entire object and create instance passing in all properties 
  var list = this.props.thumbnailData.map(function(thumbnailProps){
    return <Thumbnail {...thumbnailProps} />  
  }); 

  return <div> 
    {list}
  </div> 
  }
});

