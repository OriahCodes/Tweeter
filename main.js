const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())


const post = function(){
    tweeter.addPost($("#input").val())
    renderer.renderPosts(tweeter.getPosts())  
}


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