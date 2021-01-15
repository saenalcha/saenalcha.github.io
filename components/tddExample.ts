// TDD 1장 다중 통화를 지원하는 Money 객체
class Dollar {
  amount: number

  constructor(amount: number) {
    this.amount = amount
  }

  times(multiplier: number) {
    this.amount *= multiplier
  }
}


const testMultiplication = () => {
  const five = new Dollar(5)
  five.times(2)

  return five.amount
}

export default testMultiplication

