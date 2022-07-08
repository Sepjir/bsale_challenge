const url = 'https://bsale-devsafio.herokuapp.com'
const cards = document.getElementById("cards");
const datalist = document.getElementById("datalist");
const category =  document.getElementById("category");
const search = document.getElementById("search")
const pages = document.getElementById("pagination")

const HTMLInjection = (item) => {
      return `<div class="col-12 mt-2 col-md-6 col-lg-4">
                <div class="card h-100 mx-auto" style="width: 18rem;">
                  <img src=${item.url_image} class="card-img-top img-fluid" alt=${item.name}>
                  <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                      <p class="card-text bold">$${item.price.toLocaleString("es-CL")}</p>
                        <span class="badge rounded-pill text-bg-secondary">${item.category.toUpperCase()}</span>
                  </div>
                </div>
              </div>
              `
}


//events
const clickPages = async(item) => {
      const {data} = await axios.get(`${url}/api/v1/products?page=${item}`)
      cleanContent()
      data.map((p) => {
        cards.innerHTML += HTMLInjection(p)
      })

}


const getProducts = async () => {
  try {
    const { data } = await axios.get(`${url}/api/v1/products`);
    data.map((item) => {
      cards.innerHTML += HTMLInjection(item)
    })

  } catch (e) {
    console.log(e)
  }
};

const searchOptions = async() => {
  try {
    const { data } = await axios.get(`${url}/api/v1/products/all`);
    data.map((item) => {
      datalist.innerHTML += `
                  <option value="${item.name}"></option>
                  `
    });
    
  } catch (e) {
    console.log(e)
  }
}

const getCategory = async() => {
  try {
    const { data } = await axios.get(`${url}/api/v1/categories`);
    data.map((item) => {
      category.innerHTML += `
          <li><a class="dropdown-item" id=${item.id} >${item.name.toUpperCase()}</a></li>
      `
    })
    
  } catch (e) {
    console.log(e)
  }
}

const searchProduct = () => {
  search.addEventListener("click", async (e) => {
    e.preventDefault()
    try {
      const product = document.getElementById("product").value
      const { data } = await axios.get(`${url}/api/v1/product/${product}`)
      cleanContent()
      cleanPagination()
      data.map((item) => {
        cards.innerHTML = HTMLInjection(item)
      })
    } catch (e) {
      console.log(e)
    }

  })

}

const getProductsByCategory = async () => {
  try {
    const { data } = await axios.get(`${url}/api/v1/categories`)
      data.map((item) => {
      document.getElementById(item.id).addEventListener("click", async () => {
      cleanContent()
      cleanPagination()
        const { data } = await axios.get(`${url}/api/v1/products/${item.name}`)
          data.map((itemCat) => {
            cards.innerHTML += HTMLInjection(itemCat)
              });
          })
      })
  } catch (e) {
    console.log(e)
  }
}

const pagination = async() => {
  try {
    const { data } = await axios.get(`${url}/api/v1/products/all`)
    const pagesCount = Math.ceil(data.length / 10)
    const arr = Array.from(Array(pagesCount).keys())
    arr.map((item) => {
      pages.innerHTML += `
          <li class="page-item"><a class="page-link" onclick=clickPages(${item+1}) href="#">${item+1}</a></li>
      `
    })

  } catch (e) {
    console.log(e)
  }

}

// Clean content functions
const cleanContent = () => {
  while(cards.hasChildNodes()) {
    cards.removeChild(cards.firstChild)
    
  }
}

const cleanPagination = () => {
  while (pages.hasChildNodes()) {
    pages.removeChild(pages.firstChild)
  }

}


//active functions
getCategory();
getProducts();
searchOptions();
searchProduct();
getProductsByCategory()
pagination()

