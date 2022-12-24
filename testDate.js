for (let index = 100; index >= 0; index--) {
  let now = new Date();
  const today = new Date(now.setDate(now.getDate() - index));
  console.log("🚀 ~ file: testDate.js ~ line 4 ~ today", today);
  for (let j = 23; j >= 0; j--) {
    const hourago = new Date(today.getTime() - 1000 * 60 * 60 * j);
    const timeStart = hourago.setMinutes(0, 0, 0);
    const timeEnd = timeStart + 1000 * 60 * 60;
    console.log("-----", new Date(timeStart), new Date(timeEnd));
  }
}
