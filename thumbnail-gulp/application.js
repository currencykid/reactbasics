var options = { 
  thumbnailData: [{
    title: 'See tutorials',
    number: '69' ,
    header : "Learn lalalala",
    description: "Great resources for learning shi Great resources for learning shitGreat resources for learning shittGreat resources for learning shit" ,
    imageUrl:'https://tleunen.github.io/react-mdl/react.svg'
  },
   {
    title: "See more tutorial" ,  
    number: " 34" ,
    header: "Learn how to see double lalalal" ,
    description: "Great resources for lerning even more garbage that you'll never need just keep learning and learning adn paying money for trash." ,
    imageUrl: 'https://www.python.org/static/opengraph-icon-200x200.png'
   }
]};

// Ask react to render this class,,, think of it as creating an instance
// pass in object as second argument..
var element = React.createElement(ThumbnailList, options); 

// When we ask to render class, we tell it
// where to put render element in the DOM 
//first arg is instance of class we want to render
//second arg is where we want to RENDER IT TO
ReactDOM.render(element, document.querySelector('.container')); 



var Badge = React.createClass({displayName: "Badge",
  render: function(){
  return React.createElement("button", {className: "btn btn-primary", type: "button"}, 
      this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.number)
    )
  }
}); 


var ThumbnailList = React.createClass({displayName: "ThumbnailList",
  render: function (){
   // use map to turnn objects into components 
   // the first parameter thumbnailprops is the object iself 
   // do {...thumbnailProps} to pass in entire object and create instance passing in all properties 
  var list = this.props.thumbnailData.map(function(thumbnailProps){
    return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))  
  }); 

  return React.createElement("div", null, 
    list
  ) 
  }
});



// when you're nesting compoenents we gotta add props so they trickle down
var Thumbnail = React.createClass({displayName: "Thumbnail",
    render: function(){
      return React.createElement("div", {className: "col-sm-6 col-md-4"}, 
      React.createElement("div", {className: "thumbnail"}, 
      React.createElement("img", {src: this.props.imageUrl}), 
      React.createElement("div", {className: "caption"}, 
        React.createElement("h3", null, this.props.header), 
        React.createElement("p", null, this.props.description), 
        React.createElement("p", null, 
        React.createElement(Badge, {title: this.props.title, number: this.props.number})
        )
      )
      )
    ) 
    }
});

