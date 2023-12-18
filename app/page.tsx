import Image from 'next/image'

export default function Home() {
  return (
    <div className=' w-screen h-screen flex justify-center items-center bg-custom-300'>
      <div className=' bg-white p-5  rounded-lg w-full md:h-auto h-full md:w-[680px]'>
        <div className=' flex flex-row justify-between items-center'>
          <div className='flex flex-row'>
            <div className=' font-bold text-xl'>
              Notifications
            </div>
            <div className=' bg-custom-200 px-2  ml-2 rounded-md text-white text-sm items-center flex font-bold'>
              3
            </div>
          </div>
          <div className=' text-custom-800'>
            Mark all as read
          </div>
        </div>
        <div className=' mt-7 flex flex-col space-y-2'>
          <div className=' flex flex-row bg-custom-300 p-3 rounded-lg'>
            <Image
            src={"/images/avatar-mark-webber.webp"}
            width={90}
            height={90}
            alt='mark-webber'
            className=' w-10 h-10'/>
            <div className=' ml-5 flex flex-col'>
              <div className=' flex flex-row'>
                <span>
                  <span className=' font-bold'>Mark Webber</span> <span className=' ml-1 text-custom-700'> reacted to your recent post</span> <span className=' ml-1 text-custom-700 font-bold'>My first tournament today!</span> <span className=' text-xl text-custom-100'>•</span>
                </span>
              </div>
              <div className=' text-custom-600'>
                1m ago
              </div>
            </div>
          </div>
          <div className=' flex flex-row bg-custom-300 p-3 rounded-lg'>
            <Image
            src={"/images/avatar-angela-gray.webp"}
            width={90}
            height={90}
            alt='angela-gray'
            className=' w-10 h-10'/>
            <div className=' ml-5 flex flex-col'>
              <div className=' flex flex-row'>
                <span>
                  <span className=' font-bold'>Angela Gray</span> <span className=' ml-1 text-custom-700'> followed you</span> <span className=' text-xl text-custom-100'>•</span>
                </span>
              </div>
              <div className=' text-custom-600'>
                5m ago
              </div>
            </div>
          </div>
          <div className=' flex flex-row bg-custom-300 p-3 rounded-lg'>
            <Image
            src={"/images/avatar-jacob-thompson.webp"}
            width={90}
            height={90}
            alt='jacob-thompson'
            className=' w-10 h-10'/>
            <div className=' ml-5 flex flex-col'>
              <div className=' flex flex-row'>
                <span>
                  <span className=' font-bold'>Jacob Thompson</span> <span className=' ml-1 text-custom-700'> has joined your group</span> <span className=' ml-1 text-custom-200 font-bold'> Chess Club</span> <span className=' text-xl text-custom-100'>•</span>
                </span>
              </div>
              <div className=' text-custom-600'>
                1 day ago
              </div>
            </div>
          </div>
          <div className=' flex flex-row p-3 rounded-lg'>
            <Image
            src={"/images/avatar-rizky-hasanuddin.webp"}
            width={90}
            height={90}
            alt='rizky-hasanuddin'
            className=' w-10 h-10'/>
            <div className=' ml-5 flex flex-col'>
              <div className=' flex flex-row'>
                <span>
                  <span className=' font-bold'>Rizky Hasanuddin</span> <span className=' ml-1 text-custom-700'> sent you a private message</span> 
                </span>
              </div>
              <div className=' text-custom-600'>
                5 day ago
              </div>
              <div className=' text-custom-700 p-3 border rounded-md mt-2'> 
                Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.
              </div>
            </div>
          </div>
          <div className=' relative flex flex-row justify-between items-cente p-3 rounded-lg'>
            <div className=' flex flex-row'>
              <Image
              src={"/images/avatar-kimberly-smith.webp"}
              width={90}
              height={90}
              alt='kimberly-smith'
              className=' w-10 h-10'/>
              <div className=' ml-5 flex flex-col'>
                <div className=' flex flex-row'>
                  <span>
                    <span className=' font-bold'>Kimberly Smith</span> <span className=' ml-1 text-custom-700'> commented on your picture</span>  
                  </span>
                </div>
                <div className=' text-custom-600'>
                  1 week ago
                </div>
              </div>
            </div>
            <Image
            src={"/images/image-chess.webp"}
            width={90}
            height={90}
            alt='image-chess'
            className=' flex items-end justify-end w-10 h-10'/>
          </div>
          <div className=' flex flex-row p-3 rounded-lg'>
            <Image
            src={"/images/avatar-nathan-peterson.webp"}
            width={90}
            height={90}
            alt='nathan-peterson'
            className=' w-10 h-10'/>
            <div className=' ml-5 flex flex-col'>
              <div className=' flex flex-row'>
                <span>
                  <span className=' font-bold'>Nathan Peterson</span> <span className=' ml-1 text-custom-700'>reacted to your recent post </span> <span className=' ml-1 text-custom-700 font-bold'>5 end-game strategies to increase your win rate</span>  
                </span>
              </div>
              <div className=' text-custom-600'>
                2 week ago
              </div>
            </div>
          </div>
          <div className=' flex flex-row p-3 rounded-lg'>
            <Image
            src={"/images/avatar-anna-kim.webp"}
            width={90}
            height={90}
            alt='anna-kim'
            className=' w-10 h-10'/>
            <div className=' ml-5 flex flex-col'>
              <div className=' flex flex-row'>
                <span>
                  <span className=' font-bold'>Anna Kim</span> <span className=' ml-1 text-custom-700'> left the group </span> <span className=' ml-1 text-custom-200 font-bold'>Chess Club</span> 
                </span>
              </div>
              <div className=' text-custom-600'>
                2 week ago
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    )}