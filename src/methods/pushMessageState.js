import emitter from './emitter.js'
export default function (response, title = '更新') {
  if (response.data.success) {
    emitter.emit('push-message', {
      style: 'success',
      title: `${title}成功`
    })
  } else {
    // 有些訊息是字串，有些是陣列，需統一格式
    const message = typeof response.data.message === 'string' ? [response.data.message] : response.data.message
    emitter.emit('push-message', {
      style: 'danger',
      title: `${title}失敗`,
      // 透過 join 方式把陣列內容一一取出，並用逗號隔開，存到 content 內
      content: message.join('、')
    })
  }
}
