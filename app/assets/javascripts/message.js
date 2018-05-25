$(function(){
  var interval = setInterval(function() {
  var messageId = $('.message:last').data('message-id');
  if (location.pathname.match(/\/groups\/\d+\/messages/)) {
    $.ajax({
      url: location.href,
      type: 'GET',
      data: { id: messageId },
      dataType: 'json',
    })
    .done(function(json){
      var id = $('.chat').data('messageId');
      var insertHTML = '';
      json.messages.forEach(function(message){
        if (message.id > id ) {
        insertHTML += buildHTML(message);
        }
      });
      $('.messages').prepend(insertHTML);
    })
    .fail(function(data){
      alert('自動更新に失敗しました');
    });
  } else {
    clearInterval(interval);
  }} , 5000 );

  function buildHTML(message){
    var image = ""
    if (message.image != null) {
      image = `<img src = ${message.image} class='lower-message__image' height= "150">`
    }
    var html =
      `<div class="message" data-message-id="${message.id}">
         <div class="upper-message">
           <div class="upper-message__user-name">
             ${message.user_name}
           </div>
           <div class="upper-message__date">
             ${message.created_at}
           </div>
         </div>
         <div class="lower-meesage">
           <p class="lower-message__content">
             ${message.content}
           </p>
           ${image}
         </div>
       </div>`
    return html;
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false,
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html)
      $('.messages').animate({scrollTop:$('.messages')[0].scrollHeight}, 'fast');
      $('#new_message')[0].reset();
      $('.form__submit').prop('disabled', false);
    })
    .fail(function(){
      alert('error');
    })
  })
});
