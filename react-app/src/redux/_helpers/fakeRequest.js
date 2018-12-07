export default function(endpoint, payload) {
  const nickname = endpoint.replace("star-user/", "")
  const state = payload.starred ? "starred" : "unstarred"

  return new Promise((resolve) => {
    setTimeout(function () {
      resolve({ message: `${nickname} ${state} successfully` })
    }, 2000)
  })
}
