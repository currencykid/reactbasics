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

