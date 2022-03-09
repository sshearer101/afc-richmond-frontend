import NewsCard from "./NewsCard";
import { newsData } from "./NewsData"

export default function NewsContainer(){
    return (
        <div className="news-container">
            {newsData.map((data) => (
                <NewsCard data={data} key={data.id}/>
            ))}
            
            
        </div>

    )
}


