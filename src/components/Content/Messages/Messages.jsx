import React from 'react';
import c from './Messages.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Messages = (props) => {
  const dialogData = [
    {id: 1, name: 'Jon', img_src: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/jon-snow-rhaegar-targaryen-1554321615.jpg?crop=0.482xw:0.962xh;0,0&resize=480:*'},
    {id: 2, name: 'Sansa', img_src: 'https://s3.r29static.com//bin/entry/4ca/720x864,85/2160612/youre-probably-going-to-need-2160612.webp'},
    {id: 3, name: 'Cersei', img_src: 'https://pixel.nymag.com/imgs/fashion/daily/2019/04/29/29-cersei.w700.h700.jpg'},
    {id: 4, name: 'Daenerys', img_src: 'https://www.telegraph.co.uk/content/dam/fashion/2017/06/19/TELEMMGLPICT000131421802_trans_NvBQzQNjv4BqkUE_BTgBOQu3VWKvpDGX9fr7sARQy7EgBjwPUzvqL_M.jpeg?imwidth=450'},
    {id: 5, name: 'Jaime', img_src: 'https://www.playerprofiler.com/wp-content/uploads/2017/07/Jaime-Lannister-1.png'}
  ]

  const messageData = [
    {message: 'How many dragons you still have?', img_src: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/jon-snow-rhaegar-targaryen-1554321615.jpg?crop=0.482xw:0.962xh;0,0&resize=480:*'},
    {message: 'I am afraid to say, but only two of them still alive.', img_src: 'https://www.telegraph.co.uk/content/dam/fashion/2017/06/19/TELEMMGLPICT000131421802_trans_NvBQzQNjv4BqkUE_BTgBOQu3VWKvpDGX9fr7sARQy7EgBjwPUzvqL_M.jpeg?imwidth=450'},
    {message: 'Poor you...', img_src: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/jon-snow-rhaegar-targaryen-1554321615.jpg?crop=0.482xw:0.962xh;0,0&resize=480:*'},
    {message: 'At least you still have me...', img_src: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/jon-snow-rhaegar-targaryen-1554321615.jpg?crop=0.482xw:0.962xh;0,0&resize=480:*'},
    {message: 'Yeah...That is really uplifting...', img_src: 'https://www.telegraph.co.uk/content/dam/fashion/2017/06/19/TELEMMGLPICT000131421802_trans_NvBQzQNjv4BqkUE_BTgBOQu3VWKvpDGX9fr7sARQy7EgBjwPUzvqL_M.jpeg?imwidth=450'}
  ]

  const dialogs = dialogData.map( d => <Dialog id={d.id} name ={d.name} img_src={d.img_src} />)
  
  const messages = messageData.map( m => <Message img_src={m.img_src} message={m.message} />)

  return (
    <div className={c.dialogs}>
      <div className={c.dialog_items}>
        <div className={c.search_bar}>
          <input type="text" placeholder="Search..." />
        </div>
        { dialogs }
      </div>
      <div className={c.message_items}>
        { messages }
        <div className={c.create_msg}>
          <input className={c.write_msg} type="text" placeholder="Write a message..." />
          <input className={c.send_msg} type="submit" value="Send"/>
        </div>   
      </div>
    </div>
  )
}

export default Messages;