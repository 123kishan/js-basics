function createPost(post) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const postId = Math.floor(Math.random() * 1000); 
        resolve({ id: postId, content: post });
      }, 1000);
    });
  }
  
  function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const lastActivityTime = new Date().toLocaleTimeString();
        resolve(lastActivityTime);
      }, 1000);
    });
  }
  
  function deletePost(postId) {
    return new Promise((resolve, reject) => {
      // Simulating a successful deletion
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  }
  
  // Usage example
  function runProgram() {
    const posts = [];
  
    // Create a post
    createPost("Hello, world!")
      .then((post) => {
        posts.push(post);
  
        // Update user's last activity time
        return updateLastUserActivityTime();
      })
      .then((lastActivityTime) => {
        console.log("Posts:", posts);
        console.log("Last Activity Time:", lastActivityTime);
  
        // Delete the last post
        const lastPost = posts.pop();
        return deletePost(lastPost.id);
      })
      .then(() => {
        console.log("Posts after deletion:", posts);
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  }
  
  runProgram();
  