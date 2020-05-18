var synth = window.speechSynthesis;

// DATA ENTRY HELPERS

let btn_data = (str, x, y, w, h) => {
  return {
    "string" : str,
    "position" : {
      "x" : "" + x + "%", 
      "y" : "" + y + "%" 
    },
    "size" : {
      "w" : "" + w + "%",
      "h" : "" + h + "%"
    }
  }
}

let px_data_to_relative_data = (x, y, w, h, img_w, img_h) => {
  return [
      (x/img_w)*100,
      (y/img_h)*100,
      (w/img_w)*100,
      (h/img_h)*100
  ]
}

// DOM CODE

function add_img(url, parent){
  let img = document.createElement("img")
  img.setAttribute("src", "./images/edited/" + url);
  img.style.maxWidth = "100%";
  img.style.position = "relative";
  parent.appendChild(img);
  return img;
}

function add_btns(pbtn_data, parent){
  pbtn_data.forEach((btn_data) => {
    console.log(btn_data);
    let new_btn_element = document.createElement("button");
    // new_btn_element.innerText = btn_data.string;
    new_btn_element.style.width = btn_data.size.w;
    new_btn_element.style.height = btn_data.size.h;
    new_btn_element.style.position = "absolute";
    new_btn_element.style.left = btn_data.position.x;
    new_btn_element.style.top = btn_data.position.y;
    new_btn_element.addEventListener("click", () => talk_to_me(btn_data.string))
    parent.appendChild(new_btn_element);
  });
}

function talk_to_me(str){
  // let utterance = new SpeechSynthesisUtterance(str);
  // utterance.pitch = 1.8;
  // utterance.rate = 0.8;
  synth.speak(spoken_word[str]);
}

function words_to_utterance_dict(pages){
  let all_btns = pages.flatMap((page) => page.buttons)
  let dict = {}
  all_btns.forEach((btn_data) => {
    let utterance = new SpeechSynthesisUtterance(btn_data.string);
    utterance.pitch = 1.8;
    utterance.rate = 0.6;
    dict[btn_data.string] = utterance;
  })
  return dict;
}

// DATA ENTRY

let pages = [
  {
    "image": "part1_page1.png",
    "buttons": [
      btn_data("farther", ...px_data_to_relative_data(60,543-10,64,20,550,800)),
      btn_data("rustling", ...px_data_to_relative_data(253,618-10,68,20,550,800)),
      btn_data("on", ...px_data_to_relative_data(401,564-10,30,20,550,800)),
      btn_data("each day", ...px_data_to_relative_data(195,524-10,77,20,550,800)),
      btn_data("a bit", ...px_data_to_relative_data(385,524-10,46,20,550,800)),
      btn_data("voice", ...px_data_to_relative_data(263,638-10,42,20,550,800)),
      btn_data("deaf to", ...px_data_to_relative_data(339,544-10,69,20,550,800)),
      btn_data("a shrill", ...px_data_to_relative_data(160,638-10,60,20,550,800)),
      btn_data("and on", ...px_data_to_relative_data(60,580-10,64,20,550,800)),
      btn_data("this", ...px_data_to_relative_data(303,581-10,36,20,550,800))
    ]
  },
  {
    "image": "part1_page2.png",
    "buttons": [
      btn_data("so", ...px_data_to_relative_data(402,740,37,47,1200,1800)),
      btn_data("you almost seem", ...px_data_to_relative_data(239,995,262,38,1200,1800)),
      btn_data("dizzy", ...px_data_to_relative_data(813,322,99,47,1200,1800)),
      btn_data("just stopped there!", ...px_data_to_relative_data(198,320,307,47,1200,1800)),
      btn_data("much to hold us", ...px_data_to_relative_data(134,779,258,47,1200,1800)),
      btn_data("said", ...px_data_to_relative_data(553,572,72,47,1200,1800)),
      btn_data("you", ...px_data_to_relative_data(207,946,70,47,1200,1800)),
      btn_data("it doesn't take", ...px_data_to_relative_data(699,740,230,47,1200,1800)),
      btn_data("said", ...px_data_to_relative_data(508,947,70,47,1200,1800))
    ]
  },
  {
    "image": "part1_page3.png",
    "buttons": [
      btn_data("building", ...px_data_to_relative_data(293,708,155,47,1200,1800)),
      btn_data("called the museum", ...px_data_to_relative_data(277,756,333,42,1200,1800)),
      btn_data("to", ...px_data_to_relative_data(281,248,47,47,1200,1800)),
      btn_data("in the", ...px_data_to_relative_data(825,459,104,47,1200,1800)),
      btn_data("to the edge", ...px_data_to_relative_data(576,838,199,42,1200,1800)),
      btn_data("live here", ...px_data_to_relative_data(782,248,147,47,1200,1800)),
      btn_data("we have seen", ...px_data_to_relative_data(477,1172,204,42,1200,1800)),
      btn_data("and", ...px_data_to_relative_data(296,1214,74,42,1200,1800)),
      btn_data("pictures", ...px_data_to_relative_data(490,1005,137,42,1200,1800)),
      btn_data("like", ...px_data_to_relative_data(371,1005,73,42,1200,1800)),
      btn_data("an hour", ...px_data_to_relative_data(701,1339,137,42,1200,1800)),
      btn_data("any picture", ...px_data_to_relative_data(583,1089,183,42,1200,1800)),
      btn_data("at his wrist watch", ...px_data_to_relative_data(888,1381,42,42,1200,1800)),
      btn_data("at his wrist watch", ...px_data_to_relative_data(131,1423,250,42,1200,1800)),
      btn_data("reflected in", ...px_data_to_relative_data(131,1256,181,42,1200,1800))
    ]
  },
  {
    "image": "part1_page4.png",
    "buttons": [
      btn_data("driving in", ...px_data_to_relative_data(161-12,359,164,47,1200,1800)),
      btn_data("the parking place", ...px_data_to_relative_data(366-12,359,285,50,1200,1800)),
      btn_data("as if", ...px_data_to_relative_data(709-12,491,96,47,1200,1800)),
      btn_data("interested in all the things we love in", ...px_data_to_relative_data(394-12,872,567,42,1200,1800)),
      btn_data("interested", ...px_data_to_relative_data(320-12,1165,160,42,1200,1800)),
      btn_data("It's a bus!", ...px_data_to_relative_data(269-12,234,168,47,1200,1800)),
      btn_data("a", ...px_data_to_relative_data(933-12,657,32,47,1200,1800)),
      btn_data("in our nice camp", ...px_data_to_relative_data(666-12,1001,295,42,1200,1800)),
      btn_data("new animal", ...px_data_to_relative_data(161-12,698,196,47,1200,1800)),
      btn_data("in", ...px_data_to_relative_data(900-12,1127,42,42,1200,1800)),
      btn_data("if anything happens", ...px_data_to_relative_data(310-12,1416,322,42,1200,1800)),
      btn_data("in", ...px_data_to_relative_data(752-12,1252,37,42,1200,1800))
    ]
  }
]

// MAIN
let poem_section = document.getElementById("poem");
let spoken_word = words_to_utterance_dict(pages);

pages.forEach((page) => {
  let page_div_parent = document.createElement("div");
  page_div_parent.style.position = "relative";
  page_div_parent.style.maxWidth = "100%";
  add_img(page.image, page_div_parent);
  add_btns(page.buttons, page_div_parent);
  poem_section.appendChild(page_div_parent);
})
