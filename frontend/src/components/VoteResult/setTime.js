const setTime = () => {
  const times = []
  for (let hour = 9; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 15) {
      times.push({ h: hour, m: minute })
    }
  }
  return times
}

const times = setTime()

export { times }
