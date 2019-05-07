import React from 'react';
import c from './Messages.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Messages = (props) => {
  console.log(c);
  return (
    <div className={c.dialogs}>
      <div className={c.dialog_items}>
        <div className={c.search_bar}>
          <input type="text" placeholder="Search..." />
        </div>
        <Dialog interlocutor_id='1' interlocutor_id='1' interlocutor='Jon' img_src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/jon-snow-rhaegar-targaryen-1554321615.jpg?crop=0.482xw:0.962xh;0,0&resize=480:*' />
        <Dialog interlocutor_id='2' interlocutor='Sansa' img_src='https://s3.r29static.com//bin/entry/4ca/720x864,85/2160612/youre-probably-going-to-need-2160612.webp' />
        <Dialog interlocutor_id='3' interlocutor='Cersei' img_src='https://pixel.nymag.com/imgs/fashion/daily/2019/04/29/29-cersei.w700.h700.jpg' />
        <Dialog interlocutor_id='4' interlocutor='Daenerys' img_src='https://www.telegraph.co.uk/content/dam/fashion/2017/06/19/TELEMMGLPICT000131421802_trans_NvBQzQNjv4BqkUE_BTgBOQu3VWKvpDGX9fr7sARQy7EgBjwPUzvqL_M.jpeg?imwidth=450' />
        <Dialog interlocutor_id='5' interlocutor='Jaime' img_src='https://www.playerprofiler.com/wp-content/uploads/2017/07/Jaime-Lannister-1.png' />
      </div>
      <div className={c.message_items}>
        <Message img_src='https://www.playerprofiler.com/wp-content/uploads/2017/07/Jaime-Lannister-1.png' message='How many dragons you still have?' />
        <Message img_src='https://www.telegraph.co.uk/content/dam/fashion/2017/06/19/TELEMMGLPICT000131421802_trans_NvBQzQNjv4BqkUE_BTgBOQu3VWKvpDGX9fr7sARQy7EgBjwPUzvqL_M.jpeg?imwidth=450' message='I am afraid to say, but only two of them still alive.' />
        <Message img_src='https://pixel.nymag.com/imgs/fashion/daily/2019/04/29/29-cersei.w700.h700.jpg' message='Poor you...' />
        <Message img_src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/jon-snow-rhaegar-targaryen-1554321615.jpg?crop=0.482xw:0.962xh;0,0&resize=480:*' message='At least you still have me...' />
        <Message img_src='https://s3.r29static.com//bin/entry/4ca/720x864,85/2160612/youre-probably-going-to-need-2160612.webp' message='Yeah...That is really uplifting...' />
        <div className={c.create_msg}>
          <input className={c.write_msg} type="text" placeholder="Write a message..." />
          <input className={c.send_msg} type="submit" value="Send"/>
        </div>   
      </div>
    </div>
  )
}

export default Messages;