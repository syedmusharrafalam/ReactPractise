// ReactDOM.render(
//     React.createElement('h1',null,'Hello World'),

//     document.getElementById('content')

// );




    //    var a = React.createElement('a',{href:'https://www.google.com',target:'_blank',title:'Google Link'},'Google');
    
    //     var content= document.getElementById('content');
    //     ReactDOM.render(a,content);

         var h1=React.createElement('a',null,"Hello world")
         var p=React.createElement('p',null,'My Name is Musharraf')
         //var a = React.createElement('a',{href:'https://www.google.com',target:'_blank',title:'Google Link'},'Google');
    
        var content= document.getElementById('content');
        ReactDOM.render(React.createElement('div',null,h1,p),content);
    
  
