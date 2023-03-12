import { SparklesIcon } from "@heroicons/react/outline"
import Input from "./Input";
import Post from "./Post";

const Feed = () => {
  const posts = [
    {
      id: "1",
      name: "Jhun Chester Lalongisip",
      username: "jaycel",
      userImg: "https://scontent.fcrk1-1.fna.fbcdn.net/v/t39.30808-6/325197585_835812720858128_4554418488082995669_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEJsWgkxDZS0wcOrOXv9xRIYixTzXWrrxRiLFPNdauvFM0iijkTu80dSL-l-_n-QQe232fR_C96C82_Zo1btl2N&_nc_ohc=Ka7l2-XvPdcAX-56Uhs&_nc_ht=scontent.fcrk1-1.fna&oh=00_AfBUyE93A5dkyWhlpZJTaZWvrUPNOLIB7I3omSvgBLZdhQ&oe=64059CA2",
      img: "https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg",
      text: "nice view!",
      timestamp: "2 hours"
    }, 
    {
      id: "2",
      name: "Jhun Chester Lalongisip",
      username: "jaycel",
      userImg: "https://scontent.fcrk1-1.fna.fbcdn.net/v/t39.30808-6/325197585_835812720858128_4554418488082995669_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEJsWgkxDZS0wcOrOXv9xRIYixTzXWrrxRiLFPNdauvFM0iijkTu80dSL-l-_n-QQe232fR_C96C82_Zo1btl2N&_nc_ohc=Ka7l2-XvPdcAX-56Uhs&_nc_ht=scontent.fcrk1-1.fna&oh=00_AfBUyE93A5dkyWhlpZJTaZWvrUPNOLIB7I3omSvgBLZdhQ&oe=64059CA2",
      img: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "wow!",
      timestamp: "6 hours"
    }
  ]
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
        <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
            <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
            <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
                <SparklesIcon className="h-5" />
            </div>
        </div>
        <Input />
        {posts.map((post)=>(
          <Post 
            key={post.id}
            post={post}
          />
        ))}
    </div>
  );
}

export default Feed