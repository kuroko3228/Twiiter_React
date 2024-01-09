import { usePosts } from "../../store/usePosts";

import Form from "../Form/Form";
import Post from "../Post/Post";
import Header from "../Header/Header";

export default function Home() {
   const { posts } = usePosts();

   return (
      <div style={{width: '50%'}}>
         <Header title="Home"/>
         <Form />
         <div>
            {posts.map((post) => {
               return <Post key={post.postId} post={post} />;
            })}
         </div>
      </div>
   );
}
