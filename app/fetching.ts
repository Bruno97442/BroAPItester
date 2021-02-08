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
  const type = data.stack ? "alert" : "code"
  const target = document.querySelector(where)
  clear ? target.innerHTML = "" : ""
  where
    ? target.append(containerB(JSON.stringify(data.stack ? data.stack : data, null, 4), type))
    : console.log(data)
}

const broJson = (response: Response) => response.json()

// interface Option {
//   method: string,
//   mode: string,
//   credentials: string,
//   headers : {
//     'content-Type': string
//   },
//   redirect: string,
//   referrerPolicy: string
//   body: any
// }

async function broPost(url: string = '', init : RequestInit): Promise<JSON> {
  // Default options are marked with *
  const response = await fetch(url, init);
  return response.json(); // parses JSON response into native JavaScript objects
}


export { shower, broPost, broJson }