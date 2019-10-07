const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())

//add post
const post = function(){
    tweeter.addPost($("#input").val())
    $("#input").val("")
    renderer.renderPosts(tweeter.getPosts())  
}

//delete post
$("#posts").on("click", ".delete-post", function(){
    let postID = $(this).data().id
    console.log(postID)
    tweeter.removePost(postID)
    renderer.renderPosts(tweeter.getPosts())  
})

// add comment
$("#posts").on("click", ".commentButton", function(){
        let postID = $(this).data().id
        let newComment = $('[data-id = ' + postID + ']' + '.comment-Input').val()
    if (newComment == ""){
        alert("When you push the comment button it means, well, THAT YOU HAVE TO COMMENT. Dummy")
    }
    else{
        tweeter.addComment(newComment, postID)
        renderer.renderPosts(tweeter.getPosts())  
    }
})

//delete comment
$("#posts").on("click", ".delete-comment", function(){
    let postID = $(this).closest(".comments").data().id
    let commentID = $(this).next("span").data().id
    tweeter.removeComment(postID, commentID)
    renderer.renderPosts(tweeter.getPosts())  
})