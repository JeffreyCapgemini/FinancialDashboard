export class IncomeService {
income: number = 0;

incomeSources = [{
    income: 2700,
    name: 'Salaris',
    percentage: 0,
    color: 'green'
    }, {
    income: 500,
    name: 'Zorgtoeslag',
    percentage: 0,
    color:'red'
    }, {
    income: 1000,
    name: 'ZZP',
    percentage: 0,
    color: 'blue'
    }, {
    income: 100,
    name: 'Marktplaats',
    percentage: 0,
    color: 'orange'
    }]

    calculateIncome(): void {
        this.income = this.incomeSources.reduce((acc: number, source) => {
            return acc + source.income
        }, 0)
    }

    calculateHeightPercentage(): void {
        this.calculateIncome()

    for (let income of this.incomeSources) {
        let heightPercentage = (100 * income.income) / this.income;
        income.percentage = heightPercentage;
        }
    }
}