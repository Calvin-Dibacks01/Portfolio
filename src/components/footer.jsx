const Footer = (props) =>{
    return(
        <nav class="page-nav clear">
            <div class="container">
                <div class="flex flex-middle space-between">
                    <span class="prev-page"><a href={props.prev} class="link">&larr; Prev Page</a></span>
                    {props.next &&
                    <span class="next-page"><a href={props.next} class="link">Next Page &rarr;</a></span>}
                </div>                
            </div>
        </nav>
    )
} 
export default Footer