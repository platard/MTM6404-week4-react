
const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<h1>Hello, World</h1>)
const counter = 4 
// const component = (
//     <React.Fragment>
//         <h1>Counter X</h1>
//         <p>Count: {counter}</p>
//         <button>Increment</button>
//     </React.Fragment>
// )
// root.render(component)



function Counter(props){
    return (
        <div className="counter">
            <h1>{props.title}</h1>
            <p>Count: {props.initialCounter}</p>
            <button>Increment</button>
        </div>
    )
}

root.render(<Counter title="My component" initialCounter={counter} />)




const Card = props => (
    <React.Fragment>
        <h2>{props.title}</h2>
        <p>Biref description </p>
        {console.log(props.url)}
        { props.url ? <a href={props.url}>Read More...</a> : <em>Link comming soon!</em> }
    </React.Fragment>
    )
//    root.render(<Card title="CardX" url="#" />)
    

    // Array of articles
  const articles = [
    {
      id: 1,
      title: 'React Components',
      url: '#'
    },
    {
        id: 2,
        title: 'React Lists',
        url: '#'
    },
    {
        id: 3,
        title: 'React rendering',
        url: '#'
    }
  ]

    const ArticleList = props => {
        const articles = props.articles

        if (articles){
         return (
            <ul>
                {
                  articles.map(article => 
                    (
                        <div>
                            <h2>{article.title}</h2>
                            <p>Biref description </p>
                            { article.url ? <a href={article.url}>Read More...</a> : <em>Link comming soon!</em> }
                        </div>
                    )  
                ) //Closes the map
                }  
            </ul>
         ) // Closes the return
        } // Closes the if
    } // Closes the function
    









// root.render(
//     <div>
//         <Counter title="Counter 1" initialCounter={counter} />
//         <Counter title="Counter B" initialCounter={counter + 1} />
//         <hr/>
//         <Card url="#" title="Article Z" />
//         <hr/>
//         <ArticleList articles={articles} />
//     </div>
// )