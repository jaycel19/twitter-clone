import { EmojiHappyIcon, PhotographIcon } from "@heroicons/react/outline";

const Input = () => {
  return (
    <div className="flex border-b border-gray-200 p-3 space-x-3">
        <img 
            src="https://scontent.fcrk1-1.fna.fbcdn.net/v/t39.30808-6/325197585_835812720858128_4554418488082995669_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEJsWgkxDZS0wcOrOXv9xRIYixTzXWrrxRiLFPNdauvFM0iijkTu80dSL-l-_n-QQe232fR_C96C82_Zo1btl2N&_nc_ohc=Ka7l2-XvPdcAX-56Uhs&_nc_ht=scontent.fcrk1-1.fna&oh=00_AfBUyE93A5dkyWhlpZJTaZWvrUPNOLIB7I3omSvgBLZdhQ&oe=64059CA2" 
            alt="user-image"
            className="h-11 w-11 rounded-full cursor-pointer hover:brightness-95"
        />
        <div className="w-full divide-y divide-gray-200">
            <div className="">
                <textarea className="w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700" rows="2" placeholder="What's happening?"></textarea>
            </div>
            <div className="flex items-center justify-between pt-2.5">
                <div className="flex">
                    <PhotographIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
                    <EmojiHappyIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
                </div>
                <button className="bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50">Tweet</button>
            </div>
        </div>
    </div>
  )
}

export default Input;