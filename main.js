//Reply

function showReply(){
  var replyArea = document.getElementById("reply-area");
  if (replyArea.style.display === "block") {
    replyArea.style.display = "none";
    } else {
        replyArea.style.display = "block";
    }
}

function showComments(){
    var commentArea = document.getElementById("comment-area");
    if (commentArea.style.display === "block") {
      commentArea.style.display = "none";
      } else {
          commentArea.style.display = "block";
      }
  }