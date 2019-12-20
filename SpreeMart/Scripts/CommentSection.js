function handleSubmit() {
    const comment = document.getElementById("comment-box").value;
    document.getElementById("comment-box").value = "";
    let currentComment = localStorage.getItem("comment");
    let newComment = "";
    if (!currentComment) {
        newComment = `${comment}`;
    } else {
        newComment = `${currentComment},${comment}`;
    }

    localStorage.setItem("comment", newComment);

    const commentArray = newComment.split(",");
    const commentHTML = commentArray.map((cmt) => {
        return `<div class="ui-grid-a" style="margin-bottom: 10px;">
       <div class="ui-block-a comment-pic-block">
           <img id="comment-pic" src="Images/jan-profile-circle.png">
           <div class="commenter-name">Janet Miller</div>
       </div>
       <div class="ui-block-b comment-block">
           <div class="comment">
               ${cmt}
           </div>
           <div class="rating-star2">
             <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
             </div>
       </div>
   </div>`
    });

    const commentList = document.getElementById("comment-list");
    commentList.innerHTML = commentHTML;
}