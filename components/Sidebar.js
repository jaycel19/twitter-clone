import Image from "next/image";
import SidebarMenuItem from "./SidebarMenuItem";
import {HomeIcon} from "@heroicons/react/solid";
import {BellIcon, BookmarkIcon, ClipboardIcon, DotsCircleHorizontalIcon, HashtagIcon, InboxIcon, UserIcon} from "@heroicons/react/outline";

const Sidebar = () => {
  return (
    <div>

        {/* Twitter Logo */}
        <div className="hoverEffect">
            <Image width="50" height="50" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png"></Image>
        </div>

        {/* Menu */}
        <div className="">
            <SidebarMenuItem 
                text="Home"
                Icon={HomeIcon}
            />
            <SidebarMenuItem 
                text="Explore"
                Icon={HashtagIcon}
            />
            <SidebarMenuItem 
                text="Notification"
                Icon={BellIcon}
            />
            <SidebarMenuItem 
                text="Messages"
                Icon={InboxIcon}
            />
            <SidebarMenuItem 
                text="Bookmarks"
                Icon={BookmarkIcon}
            />
            <SidebarMenuItem 
                text="Lists"
                Icon={ClipboardIcon}
            />
            <SidebarMenuItem 
                text="Profile"
                Icon={UserIcon}
            />
            <SidebarMenuItem 
                text="More"
                Icon={DotsCircleHorizontalIcon}
            />
        </div>

        {/* Button */}
        <button>Tweet</button>

        {/* Mini-Profile */}
        <div className="">
            <img src="https://scontent.fcrk1-1.fna.fbcdn.net/v/t39.30808-6/325197585_835812720858128_4554418488082995669_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEJsWgkxDZS0wcOrOXv9xRIYixTzXWrrxRiLFPNdauvFM0iijkTu80dSL-l-_n-QQe232fR_C96C82_Zo1btl2N&_nc_ohc=Ka7l2-XvPdcAX-56Uhs&_nc_ht=scontent.fcrk1-1.fna&oh=00_AfBUyE93A5dkyWhlpZJTaZWvrUPNOLIB7I3omSvgBLZdhQ&oe=64059CA2" alt="user-img" />
            <div className="">
                <h4>Jhun Chester Lalongisip</h4>
                <p>@jaycel</p>
            </div>
            <DotsCircleHorizontalIcon className="h-5" />
        </div>
    </div>
  )
}

export default Sidebar