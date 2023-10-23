import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const TurfCard = () => {
  return (
    <Link href='' className='rounded-md p-2 shadow'>

      <div className='md:flex gap-2'>
        <div className="my-auto min-w-[150px]">
          <Image
            src="/img/soccer.jpg"
            width={500}
            height={500}
            alt="turf"
          />
        </div>
        <div className="">
          <h3 className='font-bold'>
            Turt at chelari po malappuram
          </h3>
          <p className='max-h-52 overflow-hidden text-ellipsis'>
            Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Blanditiis necessitatibus
            temporibus a aliquam, voluptatibus laudantium
            quidem illum quaerat harum commodi provident
            asperiores, dicta ab kjsdhf sdkjfhkajshdkjhfk ahsdkjfh akjshdkjfh akjshdkjfh kahsdfhf asdhjfh d quibusdam.dkjkjfhsjdhfjhsdk dfjhsd fhsdk kfhsadkjfh hkashdkjfj haskjdhkj askjd shdkjfh kajhsdk kjhfhkashdkf hskjdhfkj haskdhkh ashdkjs dhfkhskdh fkjhasdkjh fkjhasdh khsd
          </p>
        </div>
      </div>
    </Link>
  )
}

export default TurfCard