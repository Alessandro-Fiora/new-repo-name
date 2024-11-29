import Card from "./Card";
import { posts } from "../db/posts";

export default function Main() {
  return (
    <main>
      <div className="container">
        <h1 className="h3 text-center p-3">Il mio blog</h1>
        <div className="row row-cols-3">
          {posts
            .filter((post) => post.published)
            .map((post) => (
              <Card title={post.title} img={post.img}>
                {post.content}
              </Card>
            ))}
          {/* filtrare cards con cards.filter e generarle con map(card => <Card title = card.title img = card.img>DESCRIZIONE</Card>) */}
          {/* passare i parametri dei post alle card */}
        </div>
      </div>
    </main>
  );
}
