const containerB = (content: string, containerType: "code" | "alert" = "code") => {
  const C = containerType === "code"
    ? ["pre", "text-white-50"]
    : ["div", "alert alert-danger"]
  const container = document.createElement(C[0])
  container.classList.value = C[1]
  container.append(content)

  return container

}

const shower = (data: any, { where = ".showingPlace", clear = true } = {}) => {
  const type = data.name ? "alert" : "code"
  const target = document.querySelector(where)
  clear ? target.innerHTML = "" : ""
  where
    ? target.append(containerB(JSON.stringify(data.name ? data.stack : data, null, 4), type))
    : console.log(data)
}

const inFindbyid = function(e: Event) {
  this.form.action += this.parentElement.parentElement.querySelector('[data-binding="_id"]')
}

interface Hero {
  id: number,
  name: string
}


async function broPost(url: string = '', data?: FormData, method = "POST"): Promise<JSON> {
  // Default options are marked with *
  const response = await fetch(url, {
    method: method,
    body: data ?? null
  });
  return response.json(); // parses JSON response into native JavaScript objects
}


// Example POST method implementation:
async function postData(url: string = '', data: Hero): Promise<JSON> {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      // 'Content-Type': 'text/plain'
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    // redirect: 'follow', // manual, *follow, error
    // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}


export { shower, broPost, postData }