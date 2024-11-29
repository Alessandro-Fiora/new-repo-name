import Card from "./Card";
import Label from "./Label";

import { posts } from "../db/posts";

const renderFilters = () => {
  let filters = [];
  posts.forEach((post) => {
    post.tags.forEach((tag) => {
      if (!filters.includes(tag)) filters.push(tag);
    });
  });
  return filters.map((filter) => <Label>{filter}</Label>);
};

export default function Main() {
  return (
    <main>
      <div className="container">
        <h1 className="h3 text-center p-3">Il mio blog</h1>
        <div className="filters-container text-center">{renderFilters()}</div>
        <div className="row row-cols-3">
          {posts
            .filter((post) => post.published)
            .map((post) => (
              <Card
                key={post.id}
                id={post.id}
                title={post.title}
                img={post.img}
                content={post.content}
                tags={post.tags}
              >
                {/* voglio avere qui le labels e passarle alle card come 'children' */}
              </Card>
            ))}
        </div>
      </div>
    </main>
  );
}
