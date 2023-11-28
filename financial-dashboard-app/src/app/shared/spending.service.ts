export class SpendingService {
  private spending = {
    'Housing': [
      {
        name: 'Car Insurance',
        cost: 150.00,
        billingDate: new Date(2023, 10, 15),
        subject: 'Housing',
      },
      {
        name: 'House Insurance',
        cost: 200.00,
        billingDate: new Date(2023, 10, 20),
        subject: 'Housing',
      },
      {
        name: 'Groceries',
        cost: 100.00,
        billingDate: new Date(2023, 10, 25),
        subject: 'Housing',
      },
    ],
    'Personal': [
      {
        name: 'Netflix',
        cost: 33.00,
        billingDate: new Date(2023, 10, 1),
        subject: 'Personal',
      },
      {
        name: 'Prime',
        cost: 10.00,
        billingDate: new Date(2023, 10, 5),
        subject: 'Personal',
      },
      {
        name: 'Videoland',
        cost: 9.00,
        billingDate: new Date(2023, 10, 10),
        subject: 'Personal',
      },
    ],
    'Transport': [
      {
        name: 'Petrol',
        cost: 75.00,
        billingDate: new Date(2023, 10, 25),
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

    private generateTimestamp(): number {
      return new Date().getTime();
    }
  
    addSpending(name: string, cost: number, date: string, subject: string) {
      const billingDate = new Date(date);
  
      if (!isNaN(billingDate.getTime())) {
        const newSpending = { name, cost, billingDate, subject, timestamp: this.generateTimestamp() };
        this.spending[subject].push(newSpending);
        console.log('Updated spendings:', this.spending);
      } else {
        alert('Invalid date entered. Please enter a valid date.');
      }
    }

    getLatestObjects() {
      let allObjects = [];
  
      // Concatenate all objects from different categories into a single array
      for (const category in this.spending) {
        allObjects = allObjects.concat(this.spending[category]);
      }
  
      if (allObjects.length > 0) {
        // Sort the array by billing date and then by timestamp in descending order
        allObjects.sort((a, b) => {
          if (b.billingDate.getTime() === a.billingDate.getTime()) {
            return b.timestamp - a.timestamp;
          }
          return b.billingDate.getTime() - a.billingDate.getTime();
        });
  
        // Return the first three objects in the sorted array
        return allObjects.slice(0, 3);
      } else {
        console.log('No objects found.');
        return [];
      }
  }

}