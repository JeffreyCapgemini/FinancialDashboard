export class SpendingService {
    private spending = [
      {
        name: 'Netflix',
        cost: 33.99,
        billingDate: new Date(2023, 10, 1), // November 1, 2023
        subject: 'Personal',
      },
      {
        name: 'Prime',
        cost: 10.99,
        billingDate: new Date(2023, 10, 5), // November 5, 2023
        subject: 'Personal',
      },
      {
        name: 'Videoland',
        cost: 9.99,
        billingDate: new Date(2023, 10, 10), // November 10, 2023
        subject: 'Personal',
      },
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
      {
        name: 'Petrol',
        cost: 75.00,
        billingDate: new Date(2023, 10, 25), // November 25, 2023
        subject: 'Transport',
      }
    ];


    getSpendings(){
        return this.spending.slice();
    }

    getTotalCost(): number {
        return this.spending.reduce((total, item) => total + item.cost, 0);
    }

    getTotalCostOfSubject(subject: string): number {
        const filteredSpendings = this.spending.filter(item => item.subject === subject);
        return filteredSpendings.reduce((total, item) => total + item.cost, 0);
    }

    addSpending(name: string, cost: number, date: string, subject: string) {
        // Create a new Date object based on the provided date string
        const billingDate = new Date(date);
      
        // Check if the date is valid
        if (!isNaN(billingDate.getTime())) {
          // If the date is valid, create the spending object with billingDate
          const newSpending = { name, cost, billingDate, subject };
          this.spending.push(newSpending);
        } else {
          // Handle the case where the date is invalid (e.g., display an error message)
          console.error('Invalid date entered. Please enter a valid date.');
        }
      }
      
}