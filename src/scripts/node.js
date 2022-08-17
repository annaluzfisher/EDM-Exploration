//file for logic on how the nodes opperates
//node keeps track of it's DOM properties
import {
  mainContent,
  contentBox,
  innerContentBox,
  tree,
  bubbles,
  hiddenSpace,
} from "./util";
class Node {
  constructor(name, childrenData, content, parent) {
    this.name = name;
    this.children = [];
    this.childrenData = childrenData;
    this.content = content || "there is no info for this subgenre";
    this.parent = parent || "root";
    this.bubble = this.makeBubble();
    this.addListeners();
    this.location = this.bubble.parentNode;
    this.siblings = [];
  }

  getSiblings() {
    if (this.parent === "root") return null;
    if (this.siblings.length > 1) return null;
    else {
      let siblings = this.parent.children.filter((element) => {
        return element.name !== this.name;
      });
      this.siblings = siblings;
      return siblings.length;
    }
  }

  toggleBubbleVisibility() {
    if (this.displayed()) this.moveToHiddenSpace();
    else {
        this.moveToMain();
      }
    this.bubble.classList.toggle("visible-bubble");
    return this.displayed();
  }

  displayed() {
    return [...this.bubble.classList].includes("visible-bubble");
  }

  in(space) {
    return this.bubble.parentNode === space;
  }

  hasChildren() {
    if (this.children.length > 0) return true;
    return false;
  }

  makeBubble() {
    let bubble = document.createElement("div");
    let span = document.createElement('span');
    span.innerText = this.name;
    bubble.appendChild(span);
    bubble.classList.add("bubble");
    bubble.classList.add("bubble-transitions");
    if (this.name === 'edm'){
      bubble.classList.add('edm');
    }
    hiddenSpace.appendChild(bubble);
    return bubble;
  }

  moveToMain() {
    this.bubble.parentNode.removeChild(this.bubble);
    mainContent.appendChild(this.bubble);
    this.location = mainContent;
  }

  moveToTree() {
    this.bubble.parentNode.removeChild(this.bubble);
    tree.appendChild(this.bubble);
    this.location = tree;
  }

  moveToHiddenSpace(){
     this.bubble.parentNode.removeChild(this.bubble);
     hiddenSpace.appendChild(this.bubble);
     this.location = hiddenSpace;
  }

  displayContent() {
    let content = document.createElement("p");
    content.setAttribute("id", "description");
    content.innerText = `${this.content}`;
    innerContentBox.appendChild(content);
    contentBox.classList.toggle("hidden");
  }

  toggleContentVisibility() {
    contentBox.classList.toggle("hidden");
    let content = document.getElementById("description");
    content.remove();
  }

  contentVisible() {
    return ![...contentBox.classList].includes("hidden");
  }

  addListeners() {
    this.bubble.addEventListener("click", () => {
      handleBubbleClick(this);
    });
    // this.bubble.addEventListener("mouseover", () => {
    //     handleBubbleMouseOver(this);
    // });
    // this.bubble.addEventListener("mouseout", () => {
    //     handleBubbleMouseOut(this);
    // });
  }
}

function makeNodes(data) {
  let node = new Node(data["name"], data["children"], data["content"]);
  bubbles.push(node);
  if (data["children"]) {
    makeChildren(data["children"], node);
  }
  return node;
}

function makeChildren(childrenData, parent) {
  childrenData.forEach((childData) => {
    let child = makeNodes(childData);
    parent.children.push(child);
    child.parent = parent;
  });
}

//for fetching locally:

// async function makeNodes(data) {
//   let root = data.genres[0];
//   // console.log("in MAKE NODES", data.genres[0]);
//   let node = new Node(root.description, root.id, root.links, root.name);
//   bubbles.push(node);
//   // console.log(bubbles);
//   if (node.childrenData.length > 0) {
//     await makeChildren(node.childrenData, node);
//   }
//   return node;
// }

// async function makeChildren(ids, parent) {
//   // console.log(ids[4]);
//   for (let index = 0; index < ids.length; index++) {
//     let data = await fetchA(ids[index]);
//     // console.log('in the children',index,'_____',data.genres[0].name);
//     if (data.genres[0].links.childGenres) {
//       let child = await makeNodes(data);
//       parent.children.push(child);
//       console.log("parent w kids?", parent.children);
//       child.parent = parent;
//     }
//     // else{

//     // }
//   }
// }


function toggleChildren(children) {
  if (children === null) return null;
  else {
    children.forEach((child) => {
      child.toggleBubbleVisibility();
    });
  }
}

function toggleSiblings(siblings) {
  if (siblings == null) return null;
  else {
    siblings.forEach((sibling) => {
      sibling.toggleBubbleVisibility();
    });
  }
}
function handleBubbleClick(node) {
  if (node.in(mainContent)) {
    node.moveToTree();
    node.getSiblings();
    if (node.siblings !== null) {
      toggleSiblings(node.siblings);
    }
    if (node.children.length > 0) {
      toggleChildren(node.children);
    } else {
      node.displayContent();
    }
    //swapCurrentTrack();
  } else if (node.in(tree)) {
    clearTreeBelow(node);
    clearThePage();
    toggleSiblings(node.siblings);
    node.toggleBubbleVisibility();
  
    if (node.contentVisible()) node.toggleContentVisibility();

  }
}

function clearTreeBelow(node) {
  node.moveToMain();
  node.toggleBubbleVisibility();
  node.children.forEach((child) => {
    if (child.in(tree)) clearTreeBelow(child);
  });
}

function clearThePage() {
  bubbles.forEach((bubble) => {
    console.log(bubble.name, bubble.displayed());
    if (bubble.displayed() && bubble.in(mainContent)) bubble.toggleBubbleVisibility();
  });
}
export { Node, makeNodes, toggleChildren, toggleSiblings };
