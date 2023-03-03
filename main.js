const dailyButton = document.getElementById("daily")
const weeklyButton = document.getElementById("weekly")
const monthlyButton = document.getElementById("monthly")
const currentHours = document.getElementsByClassName("current")
const previousHours = document.getElementsByClassName("previous")

function updateHours(timeframe) {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      Array.from(currentHours).forEach((element, index) => {
        element.textContent = data[index].timeframes[timeframe].current
      })
      Array.from(previousHours).forEach((element, index) => {
        element.textContent = data[index].timeframes[timeframe].previous
      })
    })
    .catch((error) => console.error(error))
}

dailyButton.addEventListener("click", () => {
  dailyButton.classList.add("text-white")
  weeklyButton.classList.remove("text-white")
  monthlyButton.classList.remove("text-white")
  updateHours("daily")
})

weeklyButton.addEventListener("click", () => {
  dailyButton.classList.remove("text-white")
  weeklyButton.classList.add("text-white")
  monthlyButton.classList.remove("text-white")
  updateHours("weekly")
})

monthlyButton.addEventListener("click", () => {
  dailyButton.classList.remove("text-white")
  weeklyButton.classList.remove("text-white")
  monthlyButton.classList.add("text-white")
  updateHours("monthly")
})
