export class SpendingService {
  private spending = {
    'Housing': [
      {
        name: 'Car Insurance',
        cost: 150.00,
        billingDate: new Date(2023, 10, 15), // November 15, 2023
        subject: 'Housing',
      },
      {
        name: 'House Insurance',
        cost: 200.00,
        billingDate: new Date(2023, 10, 20), // November 20, 2023
        subject: 'Housing',
      },
      {
        name: 'Groceries',
        cost: 100.00,
        billingDate: new Date(2023, 10, 25), // November 25, 2023
        subject: 'Housing',
      },
    ],
    'Personal': [
      {
        name: 'Netflix',
        cost: 33.00,
        billingDate: new Date(2023, 10, 1), // November 1, 2023
        subject: 'Personal',
      },
      {
        name: 'Prime',
        cost: 10.00,
        billingDate: new Date(2023, 10, 5), // November 5, 2023
        subject: 'Personal',
      },
      {
        name: 'Videoland',
        cost: 9.00,
        billingDate: new Date(2023, 10, 10), // November 10, 2023
        subject: 'Personal',
      },
    ],
    'Transport': [
      {
        name: 'Petrol',
        cost: 75.00,
        billingDate: new Date(2023, 10, 25), // November 25, 2023
        subject: 'Transport',
      },
    ]
  };  

  getTotalCostByCategory(): { [key: string]: number } {
    const totalCostByCategory: { [key: string]: number } = {};
    let overallTotalCost = 0;

    for (const category in this.spending) {
      if (this.spending.hasOwnProperty(category)) {
        const totalCost = this.spending[category].reduce((total, item) => total + item.cost, 0);
        totalCostByCategory[category] = totalCost;
        overallTotalCost += totalCost;
      }
    }

    totalCostByCategory['Overall'] = overallTotalCost;

    return totalCostByCategory;
  }

    getTotalCostOfSubject(subject: string): number {
      const filteredSpendings = this.spending[subject] || [];
      return filteredSpendings.reduce((total, item) => total + item.cost, 0);
    }
  
    addSpending(name: string, cost: number, date: string, subject: string) {
      const billingDate = new Date(date);
  
      if (!isNaN(billingDate.getTime())) {
        const newSpending = { name, cost, billingDate, subject };
        this.spending[subject].push(newSpending);
        console.log('Updated spendings:', this.spending);
      } else {
        alert('Invalid date entered. Please enter a valid date.');
      }
    }
}