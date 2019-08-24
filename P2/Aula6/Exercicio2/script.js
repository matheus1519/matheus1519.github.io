function exibeIds(id) {
	$.ajax({
	  url: "https://jsonplaceholder.typicode.com/posts",
	  data: {
	    userId: id
	  },
	  success: function( result ) {
	    console.log(result);
	    exibirPost(result);
	  }
	});
}

function exibirPost(post) {
	for(let i = 0; i < post.length;i++)
	{
		body = document.querySelector('body');
		body.append(document.createElement('h1').textContent = post[i].title);
		body.append(document.createElement('br'));
		body.append(document.createElement('p').textContent = post[i].body);
		body.append(document.createElement('br'));
		//alert(post[i]);
	}

}

