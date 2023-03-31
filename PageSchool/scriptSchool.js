var classSelector = document.getElementById("classSchool");
var LinksVideo = [
  {
    links: [
      "https://www.youtube.com/embed/mbK_kB0hTB0",
      "https://www.youtube.com/embed/ZAOfHdpb6eA",
      "https://www.youtube.com/embed/BIKfIgt3bJM",
    ],
  },
  {
    links: [
      "https://www.youtube.com/embed/XwxVAdkvWX8",
      "https://www.youtube.com/embed/Ggz4RqVEBeI",
      "https://www.youtube.com/embed/DJby9uBEN3U"
    ]
  },
  {
    links: [
      "https://www.youtube.com/embed/cFVSvteFMjk",
      "https://www.youtube.com/embed/v2ybhykok1U",
      "https://www.youtube.com/embed/Krt67dc3weA"
    ]
  }

]

// clear for new links
function clearLinks(){
  document.getElementById("video").innerHTML = "";
}
function randomLinks(){

    if(classSelector.value == "صف التاسع"){
      LinksVideo[0].links.forEach(element => {

        const elementVideo = document.createElement("iframe");
        elementVideo.setAttribute("src", element);
        elementVideo.setAttribute("width", "360");
        elementVideo.setAttribute("height", "215");
        elementVideo.setAttribute("id","size")
        document.getElementById("video").appendChild(elementVideo);
      });
    }else if(classSelector.value == "صف الثامن"){
      LinksVideo[1].links.forEach(element => {
        const elementVideo = document.createElement("iframe");
        elementVideo.setAttribute("src", element);
        elementVideo.setAttribute("width", "360");
        elementVideo.setAttribute("height", "215");
        elementVideo.setAttribute("id","size")
        document.getElementById("video").appendChild(elementVideo);
      });
    }else if(classSelector.value == "صف السابع"){
      LinksVideo[2].links.forEach(element => {
        const elementVideo = document.createElement("iframe");
        elementVideo.setAttribute("src", element);
        elementVideo.setAttribute("width", "360");
        elementVideo.setAttribute("height", "215");
        elementVideo.setAttribute("id","size")
        document.getElementById("video").appendChild(elementVideo);
      });
    }



}


classSelector.addEventListener("change", function () {

  if (classSelector.value == "صف التاسع") {
      clearLinks()
      randomLinks();
  } else if (classSelector.value == "صف السابع") {
    clearLinks()
    randomLinks();
  } else if (classSelector.value == "صف الثامن") {
    clearLinks()
    randomLinks();
  }


});
