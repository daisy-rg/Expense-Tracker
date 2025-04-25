import React, {useState} from 'react';
import Form from './components/Form';
import SearchBar from './components/SearchBar';
import Table from './components/Table';
import "./App.css";

function App  (){
    const [expenses, setExpenses] = useState([]); //stores all added expenses
    const [searchTerm, setSearchTerm] =useState(''); // tracks user expense input in search bar

     const addExpense =(expense) => {
        setExpenses([expense, ...expenses]);
     };

     const deleteExpense =(id) => {
        setExpenses(expenses.filter((exp) => exp.id !== id));
     };

     const filteredExpenses = expenses.filter((exp) =>exp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exp.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    console.log(expenses); 
    console.log(filteredExpenses);


    return (
        <div className='container'>
            <h1>Expense Tracker</h1>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            <div className='wrapper'>
                <div className='form-container'>
                <Form onAddExpense={addExpense}/>
                </div>
                <div className='table-container'>
                <Table expenses={filteredExpenses} onDelete={deleteExpense}/>
                </div>
                </div>
        </div>
    );
};

export default App;