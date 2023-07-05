const form = document.querySelector('#form')






document.addEventListener('DOMContentLoaded', checkingBudget)
form.addEventListener('submit', creatingBills)

class Budget {

    constructor(budget){
        this.budget= budget
        this.remain= budget
        this.bills= []
    }

    mixingBills(budgets){
        this.bills= [...this.bills, budgets]

        console.log(this.bills)
    }
    
    
    
    
    }
    
    
    class UI {
    
    
      gettingStartBudget(startBudget){

       const budgetDiv = document.querySelector('#result_budget').textContent= startBudget
       const remainDiv = document.querySelector('#result_remaing').textContent= startBudget 

        }

        addingHTM(objectBudget){
         const {budget, remain, id}= objectBudget

         console.log(budget, remain, id)

        }

    
    }


    const ui = new UI()
    let budgets;


function checkingBudget(){
    const budget = prompt('Add your start budget: ')
    Number(budget)    

    if(budget==='' || budget=== null || isNaN(budget) || budget<=0 ){
        window.location.reload()
    }


   ui.gettingStartBudget(budget)
}


function creatingBills(e){
    e.preventDefault()

const billInput= document.querySelector('#bill').value
const amountInput = document.querySelector('#amount').value

if(billInput==='' || amountInput==='' || amountInput<=0 ){
    console.log('error message')
}


const objectBudget= {billInput, amountInput, id: Date.now()}

budgets = new Budget()
budgets.mixingBills(objectBudget)

ui.addingHTM(budgets)

}


  
