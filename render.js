const Renderer = function(){

    const renderPosts = function(posts){
        $("#posts").empty()
        for (let postInd in posts){

            let _currentPostID = posts[postInd].id

            let postBox = $(`<div class='post' data-id='${_currentPostID}'><div class='post-text'>${posts[postInd].text}</div><div class='comments' data-id='${_currentPostID}'></div></div>`)
            $("#posts").append(postBox)

            for (let commentInd in posts[postInd].comments){
                let comment = $(`<div class='comment'> <span class='delete-comment'>x</span> <span data-id='${posts[postInd].comments[commentInd].id}'> ${posts[postInd].comments[commentInd].text}</span></div>`)
                $('[data-id = ' + _currentPostID + '].comments').append(comment)
            }

            let commentInput = $(`<input type='text' placeholder='Got something to say?' class='comment-input' data-id='${_currentPostID}'>`)
            $('[data-id = ' + _currentPostID + '].post').append(commentInput)
            
            let commentButton = $(`<button class='commentButton' data-id='${_currentPostID}'> Comment </button>`)
            $('[data-id = ' + _currentPostID + '].post').append(commentButton)
            
            let deletePostButton = (`<div><div class='delete-post' data-id='${_currentPostID}'> Delete Post </div></div>`)
            $('[data-id = ' + _currentPostID + '].post').append(deletePostButton)
        }
    }

    return {
        renderPosts: renderPosts,
    }
}


