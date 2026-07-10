
import Image from "next/image";
import Link from "next/link";




const FriendsCard = ({ friend }) => {

  const {id, picture, name, days_since_contact, status, goal } = friend;

  const statusColors = {
    "overdue": "bg-error text-error-content",       // Red
    "almost-due": "bg-warning text-warning-content", // Yellow
    "on-track": "bg-success text-success-content"   // Green
  };



  return (
    <Link href={`/friendsDetails/${id}`}>
      <div className="bg-white p-10 flex flex-col items-center rounded-2xl shadow-md">
        <div className="w-24 h-24 mx-auto overflow-hidden rounded-full aspect-square relative">
          <Image className="object-cover" sizes="96px" priority={id <= 4} src={picture} fill alt="home"></Image>
        </div>
        <div>
          <ul className="flex flex-col items-center space-y-2 mt-3">
            <li className="text-xl font-semibold">{name}</li>
            <li className="text-[#64748B]">{days_since_contact}days ago</li>
            <li>goal:{goal}</li>
            <li>
              <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${statusColors[status] || "bg-base-200"}`}>
                {status}
              </span>
            </li>
          </ul>


        </div>
      </div>
    </Link>
  );
};

export default FriendsCard;