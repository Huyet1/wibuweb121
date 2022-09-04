let products = {
    data: [
      {
        productName: "Anh Hùng Mạnh Nhất Trở Lại",
        category: "Manwa",
        type: "Manwa",
        image: "anhhung.jpg",
        stuck: "../Comic/anhhungmanhnhat.php"
      },
      {
        productName: "Bạn gái thuê",
        category: "Manga",
        type: "Manga",
        image: "bangaithue.jpg",
        stuck: "../Comic/bangaithue.php"
      },
      {
        productName: "Bạn học tôi là lính đánh thuê",
        category: "Manwa",
        type: "Manwa",
        image: "linhdanhthue.jpg",
        stuck: "../Comic/banhoc.php"
      },
      {
        productName: "Boku no hero",
        category: "Manga",
        type: "Manga",
        image: "Boku.jpg",
        stuck: "../Comic/Boku.php"
      },
      {
        productName: "Boruto next generation",
        category: "Manga",
        type: "Manga",
        image: "boruto.jpg",
        stuck: "../Comic/Boruto.php"
      },
      {
        productName: "Conan Thám tử lừng danh",
        category: "Manga",
        type: "Manga",
        image: "Conan.jpg",
      },
      {
        productName: "Con trai út của gia đình kiếm thuật danh tiếng",
        category: "Manwa",
        type: "Manwa",
        image: "kiemthuat.jpg",
      },
      {
        productName: "Con trai út huyền thoại nhà hầu tước",
        category: "Manwa",
        type: "Manwa",
        image: "contrai.jpg",
      },
      {
        productName: "Độc bộ tiêu dao",
        category: "Manhua",
        type: "Manhua",
        image: "docbo.jpg",
      },
      {
        productName: "Dragon ball super",
        category: "Manga",
        type: "Manga",
        image: "dragonball.jpg",
      },
      {
        productName: "Đại vương tha mạng",
        category: "Manhua",
        type: "Manhua",
        image: "DaiVuong.jpg",
      },
      {
        productName: "Fairy tail hội pháp sư",
        category: "Manga",
        type: "Manga",
        image: "fairytail.jpg",
      },
      {
        productName: "Bà xã tôi đến từ ngàn năm trước",
        category: "Manhua",
        type: "Manhua",
        image: "baxa.jpg",
      },
      {
        productName: "Naruto Shippudent",
        category: "Manga",
        type: "Manga",
        image: "naruto.jpg",
      },
      {
        productName: "Nương tử ta là nữ đế",
        category: "Manhua",
        type: "Manhua",
        image: "nuongtu.jpg",
      },

      {
        productName: "One Piece",
        category: "Manga",
        type: "Manga",
        image: "onepiece.jpg",
      },
      {
        productName: "One Punch Man",
        category: "Manga",
        type: "Manga",
        image: "OnePunch.jpg",
      },
      {
        productName: "Quý tộc lười biếng trở thành thiên tài",
        category: "Manwa",
        type: "Manwa",
        image: "Quytoc.jpg",
      },
      {
        productName: "Solo Leveling",
        category: "Manwa",
        type: "Manwa",
        image: "Solo.jpg",
      },
      {
        productName: "Sứ đồ vô hạn và 12 chiến cơ",
        category: "Manwa",
        type: "Manwa",
        image: "sudo.jpg",
      },
      {
        productName: "Anh hùng cấp thảm họa trở lại",
        category: "Manwa",
        type: "Manwa",
        image: "thamhoa.jpg",
      },
      {
        productName: "Thất hình đại tội",
        category: "Manga",
        type: "Manga",
        image: "download.jpg",
      },
      {
        productName: "Thiên quỷ chẳng sống nổi cuộc đời bình thường",
        category: "Manwa",
        type: "Manwa",
        image: "Thienquy.jpg",
      },
      {
        productName: "Tiên võ đế tôn",
        category: "Manhua",
        type: "Manhua",
        image: "tienvo.jpg",
      },
      {
        productName: "Đệ nhất tông sư trở lại",
        category: "Manhua",
        type: "Manhua",
        image: "tongsu.jpg",
      },

   
    ],
  };
  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("a");
    console.log(imgContainer);
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer); // Xuất ra phần từ img
    // Tạo một biến ngoài bọc img
    let stuck = document.createElement("a");
    stuck.setAttribute("href", i.stuck);
    imgContainer.appendChild(stuck);
    stuck.appendChild(image);

    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //type
    let type = document.createElement("h6");
    type.innerText =  i.type;
    container.appendChild(type);
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };