export default function NewsCard({ data }) {
  return (
    <div className="news-card">
      <img
        src={data.image}
        alt="richmond news gallery"
        className="news-image"
      />
      <h3 className="news-category">{data.category}</h3>
      <h2 className="news-title">{data.title}</h2>
    </div>
  )
}
