let selector = document.querySelector("#insta");

const nodeInsta = fetch(`https://www.instagram.com/vanlifehub/?__a=1`)
  .then((response) => response.json())
  .then((response) => {
    getNodeInsta(response);
  })
  .catch((error) => console.error("error:", error));

function getNodeInsta(response) {
  const nodeInsta = response.graphql.user.edge_owner_to_timeline_media.edges;

  nodeInsta.forEach((element) => {
    const URL = element.node.thumbnail_src;
    const descriptionText = element.node.accessibility_caption;
    showInstagramPost(selector, URL, descriptionText);
  });
}

const showInstagramPost = (selector, URL, descriptionText) => {
  selector.innerHTML += `
      <div class="card">
      <img class="card-img-top" src="${URL}" alt="Card image cap">
      <div class="card-body">
        <p class="card-text small">${descriptionText}</p>
      </div>
    </div>
  `;
};
