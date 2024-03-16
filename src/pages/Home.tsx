import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";
import { v4 as uuidv4 } from "uuid";
import ArticleCard from "../components/card/articleCard";
import { currentDate } from "../shared/types";

function Home() {
  const posts = useSelector((state: RootState) => state.post.postList);

  return (
    <section className="container mx-auto my-20 flex flex-wrap justify-center md:gap-x-5 gap-y-5 px-5 py-10">
      {posts &&
        posts.map((post) => {
          return (
            <div key={uuidv4()}>
              <ArticleCard>
                <div className="flex justify-center py-4 font-roboto font-bold text-xl text-blue-500">
                  {post.title}
                </div>
                <div className="flex justify-between px-8 py-3 text-sm italic font-medium text-slate-500">
                  <div>By: {post.name}</div>
                  <div>Created on: {currentDate(new Date())}</div>
                </div>
                <div className="px-8 text-sm">{post.description}</div>
              </ArticleCard>
            </div>
          );
        })}
    </section>
  );
}

export default Home;
