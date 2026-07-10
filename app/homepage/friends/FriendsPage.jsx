import friends from '../../../public/data.json'
import FriendsCard from '../../components/FriendsCard';





const FriendsPage = () => {
  console.log(friends);

  return (
    <div className='container mx-auto py-15 border-t-2 border-gray-200'>
      <h3 className='text-3xl font-semibold mb-10'>Your Friends</h3>

      <div className='grid grid-cols-4 gap-7'>
        {friends.map(friend => <FriendsCard key={friend.id} friend={friend}></FriendsCard>)}
      </div>

    </div>
  );
};

export default FriendsPage;