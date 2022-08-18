//file for logic on how the nodes opperates
//node keeps track of it's DOM properties
import { mainContent, contentBox, tree, bubbles, hiddenSpace } from "./util";
class Node {
  constructor(name, childrenData, content, link, bpm, audio, parent) {
    this.name = name;
    this.children = [];
    this.childrenData = childrenData;
    this.content = this.getContent(content);
    this.parent = parent || "root";
    this.bubble = this.makeBubble();
    this.addListeners();
    this.location = this.bubble.parentNode;
    this.siblings = [];
    this.link = link;
    this.bpm = bpm;
    this.audio = audio || null;
  }

  getContent(content) {
    if (typeof content === 'undefined')
      return "there is no info for this subgenre";
    else {
      return content;
    }
  }
  getSiblings() {
    if (this.parent === "root" || !this.siblings) return null;
    else {
      let siblings = this.parent.children.filter(
        (element) => element.name !== this.name
      );
      this.siblings = siblings;
      return siblings.length;
    }
  }

  toggleBubbleVisibility() {
    if (this.displayed()) this.moveTo(hiddenSpace);
    else {
      this.moveTo(mainContent);
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
  moveTo(location) {
    this.bubble.parentNode.removeChild(this.bubble);
    location.appendChild(this.bubble);
    this.location = location;
  }

  makeBubble() {
    let bubble = document.createElement("div");
    let span = document.createElement("span");
    span.innerText = this.name;
    bubble.appendChild(span);
    bubble.classList.add("bubble");
    bubble.classList.add("bubble-transitions");
    if (this.name === "EDM") {
      bubble.classList.add("edm");
    }
    hiddenSpace.appendChild(bubble);
    return bubble;
  }

  displayContent() {
    console.log(this.content);
    let content = document.getElementById("description");
    content.innerText = `${this.content}`;
    let link = document.getElementById("wikipedia");
    link.setAttribute("href", `${this.link}`);
    let waveform = document.getElementById("waveform");
    waveform.dataset.audio = `${this.audio}`;
    let title = document.getElementById("title");
    title.innerText = `${this.name}`;
    contentBox.classList.toggle("hidden");
  }
  

  toggleContentVisibility() {
    contentBox.classList.toggle("hidden");
    let content = document.getElementById("description");
    content.innerText = "";
  }

  contentVisible() {
    return ![...contentBox.classList].includes("hidden");
  }

  addListeners() {
    this.bubble.addEventListener("click", () => {
      handleBubbleClick(this);
    });
  }
}

function makeNodes(data) {
  let node = new Node(
    data["name"],
    data["children"],
    data["content"],
    data["link"],
    data["bpm"],
    data["audio"]
  );
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

function toggleBubbles(bubbles) {
  if (bubbles === null) return null;
  else {
    bubbles.forEach((bubble) => {
      bubble.toggleBubbleVisibility();
    });
  }
}

function handleBubbleClick(node) {
  if (node.in(mainContent)) {
    node.moveTo(tree);
    node.getSiblings();
    if (node.siblings !== null) {
      toggleBubbles(node.siblings);
    }
    if (node.children.length > 0) {
      toggleBubbles(node.children);
    } else {
      node.displayContent();
    }
  } else if (node.in(tree)) {
    if (node.contentVisible()) node.toggleContentVisibility();
    setTimeout( () => {
  clearTreeBelow(node);
    clearThePage();
    toggleBubbles(node.siblings);
    node.toggleBubbleVisibility();
    },800);

  }
}

function clearTreeBelow(node) {
  node.moveTo(mainContent);
  node.toggleBubbleVisibility();
  node.children.forEach((child) => {
    if (child.in(tree)) clearTreeBelow(child);
  });
}

function clearThePage() {
  bubbles.forEach((bubble) => {
    if (bubble.displayed() && bubble.in(mainContent))
      bubble.toggleBubbleVisibility();
  });
}

export { makeNodes };
