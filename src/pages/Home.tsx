import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store/store";
import { v4 as uuidv4 } from "uuid";
import ArticleCard from "../components/card/articleCard";
import { currentDate, truncate } from "../shared/utils";
//import { Button } from "@mui/base";
import EditForm from "../components/editForm/editForm";
import { removePost } from "../redux/reducers/slices/postSlice";
import Button from "../components/button/button";

function Home() {
  const posts = useSelector((state: RootState) => state.post.postList);
  const dispatch = useDispatch();

  // DELETE
  const handleDelete = (id: number) => {
    dispatch(removePost({ id: id }));
  };

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
                <div className="px-8 text-sm">
                  {truncate(post.description, 300)}
                </div>
                <div className="flex justify-end ">
                  <EditForm
                    name={post.name}
                    title={post.title}
                    post={post.description}
                    id={post.id}
                  />
                  <Button
                    action="delete"
                    handleClick={() => handleDelete(post.id)}
                  />
                </div>
              </ArticleCard>
            </div>
          );
        })}
    </section>
  );
}

export default Home;
