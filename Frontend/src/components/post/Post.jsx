import "./post.css";

export default function Post() {
  return (
    <div className="post">
        <img className="postImg" src="https://www.ceylonexpeditions.com/medias/destination_places/big/130/kandy-1.jpg" alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Hitorical</span>
            </div>
            <span className="postTitle">Kandy</span>
            <hr />
        </div>
        <p className="postDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui
            necessitatibus nostrum illum reprehenderit.
            </p>
    </div>
  );
}